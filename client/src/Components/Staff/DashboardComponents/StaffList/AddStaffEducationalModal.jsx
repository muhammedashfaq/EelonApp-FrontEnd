import React, { useEffect, useState } from "react";
import { Input, Tooltip, Dialog, Button } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

const AddStaffEducationalModal = ({ userData, getData }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setFiles({});

    setOpen((cur) => !cur);
  };
  const [files, setFiles] = useState({});
  const [isOverlayDraggedOver, setIsOverlayDraggedOver] = useState(false);
  const [base64String, setBase64String] = useState("");
  const [qualification, setQualification] = useState("");
  const [univercity, setUnivercity] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isValidate, setIsValidate] = useState("");
  const axiosPrivate = useAxiosPrivate();

  const addFile = (file) => {
    const isImage = file.type.match("image.*");
    const objectURL = URL.createObjectURL(file);

    setFiles((prevFiles) => ({
      ...prevFiles,
      [objectURL]: file,
    }));
  };

  function formatFileSize(bytes) {
    const kilobytes = bytes / 1024;
    return kilobytes.toFixed(2) + " KB";
  }
  const handleDrop = (event) => {
    event.preventDefault();
    setIsOverlayDraggedOver(false);

    for (const file of event.dataTransfer.files) {
      addFile(file);
    }
  };

  const handleDragEnter = (event) => {
    event.preventDefault();
    setIsOverlayDraggedOver(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsOverlayDraggedOver(false);
  };

  const handleDragOver = (event) => {
    if (hasFiles(event)) {
      event.preventDefault();
    }
  };

  const handleFileDelete = (objectURL) => {
    const newFiles = { ...files };
    delete newFiles[objectURL];
    setFiles(newFiles);
  };

  const hasFiles = ({ dataTransfer: { types = [] } }) =>
    types.indexOf("Files") > -1;

  const handleFileInputChange = (event) => {
    for (const file of event.target.files) {
      addFile(file);

      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target.result;
        setBase64String(base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const formData = {
    qualification,
    uni: univercity,
    expFrom: fromDate,
    expTo: toDate,
    pdfB64: base64String,
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      await axiosPrivate.post(
        `certificates/staff/education/${userData._id}`,
        formData
      );
      setIsLoading(false);
      handleOpen();
      getData();
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Added successfully",
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    const isValidate =
      formData.expFrom && formData.qualification && formData.uni;

    setIsValidate(isValidate);
  }, [formData]);
  return (
    <>
      <Tooltip content="Add New">
        <span>
          <FontAwesomeIcon
            icon={faFileArrowUp}
            onClick={handleOpen}
            size="2xl"
            className="cursor-pointer"
          />
        </span>
      </Tooltip>
      <Dialog size="xl" open={open} className="bg-transparent shadow-none">
        <main className="container mx-auto max-w-screen-lg h-full">
          {/* file upload modal */}
          <article
            aria-label="File Upload Modal"
            className={`relative h-full flex flex-col bg-white shadow-xl rounded-md ${
              isOverlayDraggedOver ? "draggedover" : ""
            }`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDragEnter={handleDragEnter}
          >
            {/* scroll area */}
            <section className="h-full overflow-auto p-8 w-full flex flex-col">
              <div className="space-y-6 w-full mx-auto p-6 bg-white rounded-md shadow-md">
                <h1 className="text-2xl font-semibold mb-4">Upload Details</h1>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center space-x-1">
                    <Input
                      id="jobRole"
                      className="border rounded-md "
                      label="Qualification"
                      onChange={(e) => setQualification(e.target.value)}
                    />

                    <Input
                      id="jobRole"
                      className="border rounded-md "
                      label="School/Collage"
                      onChange={(e) => setUnivercity(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center space-x-1">
                    <label htmlFor="experienceFrom" className="mr-2">
                      Year From:
                    </label>
                    <Input
                      onChange={(e) => setFromDate(e.target.value)}
                      type="date"
                      id="experienceFrom"
                      className="border rounded-md p-2"
                    />
                    <label htmlFor="experienceTo" className="mr-2">
                      Year To:
                    </label>
                    <Input
                      onChange={(e) => setToDate(e.target.value)}
                      type="date"
                      id="experienceTo"
                      className="border rounded-md p-2"
                    />
                  </div>
                </div>
                <h2 className="font-semibold">Upload Related Documents:</h2>
              </div>

              <header className="border-dashed border-2 border-gray-400 py-2 flex flex-col justify-center items-center">
                <p className="mb-3 font-semibold text-gray-900 flex flex-wrap justify-center">
                  <span>Drag and drop your</span>&nbsp;
                  <span>files anywhere or</span>
                </p>
                <input
                  id="hidden-input"
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileInputChange}
                />
                <button
                  id="button"
                  className="mt-2 rounded-sm px-3 py-1 bg-gray-200 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                  onClick={() =>
                    document.getElementById("hidden-input").click()
                  }
                >
                  Upload a file
                </button>
              </header>

              <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                To Upload
              </h1>

              <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                {Object.keys(files).map((objectURL) => (
                  <li
                    key={objectURL}
                    className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24"
                  >
                    <article
                      tabIndex="0"
                      className="group w-full h-full rounded-md focus:outline-none focus:shadow-outline relative bg-gray-100 cursor-pointer"
                    >
                      <div className="w-full h-full flex flex-col rounded-md text-xs break-words">
                        <h1 className="flex-1">{files[objectURL].name}</h1>
                        <div className="flex">
                          <span className="p-1">
                            <i>
                              <svg
                                className="fill-current w-4 h-4 ml-auto pt-"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                              >
                                <path d="M5 8.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5zm9 .5l-2.519 4-2.481-1.96-4 5.96h14l-5-8zm8-4v14h-20v-14h20zm2-2h-24v18h24v-18z" />
                              </svg>
                            </i>
                          </span>
                          <p className="p-1 size text-xs">
                            {formatFileSize(files[objectURL].size)}
                          </p>
                          <button
                            className="delete ml-auto focus:outline-none hover:bg-gray-300 p-1 rounded-md"
                            onClick={() => handleFileDelete(objectURL)}
                          >
                            <svg
                              className="pointer-events-none fill-current w-4 h-4 ml-auto"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path
                                className="pointer-events-none"
                                d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>
            </section>

            {/* sticky footer */}
            <footer className="flex justify-end px-8 pb-8 pt-4">
              <Button
                disabled={!isValidate}
                loading={isLoading}
                id="submit"
                className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
                onClick={handleSubmit}
              >
                Upload now
              </Button>
              <button
                id="cancel"
                className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                onClick={handleOpen}
              >
                Cancel
              </button>
            </footer>
          </article>
        </main>
      </Dialog>
    </>
  );
};

export default AddStaffEducationalModal;
