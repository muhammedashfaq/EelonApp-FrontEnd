import React, { useState } from "react";
import { Input, Tooltip, Dialog } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

const AddStaffExperianceDocuModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [files, setFiles] = useState({});
  const [isOverlayDraggedOver, setIsOverlayDraggedOver] = useState(false);
  const[jobRole,setJobRole]=useState()
  const[toDate,setToDate]=useState()
  const [fromdate,setFromDate]=useState()

  const addFile = (file) => {
    const isImage = file.type.match("image.*");
    const objectURL = URL.createObjectURL(file);

    setFiles((prevFiles) => ({
      ...prevFiles,
      [objectURL]: file,
    }));
  };

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

  const handleFileInputChange = (event) => {
    for (const file of event.target.files) {
      addFile(file);
    }
  };

  const handleFileDelete = (objectURL) => {
    const newFiles = { ...files };
    delete newFiles[objectURL];
    setFiles(newFiles);
  };

  const handleSubmit = () => {
    try {
      const formData={
        jobRole,
        fromdate,
        toDate,
        files
      }
      console.log(formData,'check data')
    } catch (error) {
      console.log(error);
    }
    // alert(`Submitted Files:\n${JSON.stringify(files)}`);
    // console.log(files);
  };

  const handleCancel = () => {
    setFiles({});
  };

  const hasFiles = ({ dataTransfer: { types = [] } }) =>
    types.indexOf("Files") > -1;


    
  return (
    <>
      <Tooltip content="Add New">
        <span>
          <FontAwesomeIcon
            icon={faSquarePlus}
            onClick={handleOpen}
            beat
            size="2xl"
            className="cursor-pointer"
          />
        </span>
      </Tooltip>
      <Dialog size="xl" open={open} handler={handleOpen} className="bg-transparent shadow-none">
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
                  <div className="flex items-center">
                    <label htmlFor="jobRole" className="mr-2">
                      Job Role:
                    </label>
                    <Input id="jobRole" className="border rounded-md p-2" onChange={(e)=>setJobRole(e.target.value)} />
                  </div>
                  <div className="flex items-center">
                    <label htmlFor="experienceFrom" className="mr-2">
                      Experience From:
                    </label>
                    <Input
                      type="date"
                      id="experienceFrom"
                      className="border rounded-md p-2"
                      onChange={(e)=>setFromDate(e.target.value)}
                    />
                    <label htmlFor="experienceTo" className="mr-2">
                      Experience To:
                    </label>
                    <Input
                      type="date"
                      id="experienceTo"
                      className="border rounded-md p-2"
                      onChange={(e)=>setToDate(e.target.value)}
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
                  }                >
                  Upload a file
                </button>
              </header>

              <h1 className="pt-8 pb-3 font-semibold sm:text-lg text-gray-900">
                To Upload
              </h1>

              <ul id="gallery" className="flex flex-1 flex-wrap -m-1">
                {Object.keys(files).length === 0 ? (
                  <li
                    id="empty"
                    className="h-full w-full text-center flex flex-col items-center justify-center"
                  >
                    <img
                      className="mx-auto w-32"
                      src="https://user-images.githubusercontent.com/507615/54591670-ac0a0180-4a65-11e9-846c-e55ffce0fe7b.png"
                      alt="no data"
                    />
                    <span className="text-small text-gray-500">
                      No files selected
                    </span>
                  </li>
                ) : (
                  Object.keys(files).map((objectURL) => (
                    <li
                      key={objectURL}
                      className="block p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8 h-24"
                    >
                      <article
                        tabIndex="0"
                        className="group w-full h-full rounded-md focus:outline-none focus:shadow-outline relative bg-gray-100 cursor-pointer"
                      >
                        <img
                          alt="upload preview"
                          className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed"
                          src={objectURL}
                        />
                        <section className="flex flex-col rounded-md text-xs break-words w-full h-full z-20 absolute top-0 py-2 px-3">
                          <h1 className="flex-1"></h1>
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
                            <p className="p-1 size text-xs"></p>
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
                        </section>
                      </article>
                    </li>
                  ))
                )}
              </ul>
            </section>

            {/* sticky footer */}
            <footer className="flex justify-end px-8 pb-8 pt-4">
              <button
                id="submit"
                className="rounded-sm px-3 py-1 bg-blue-700 hover:bg-blue-500 text-white focus:shadow-outline focus:outline-none"
                onClick={handleSubmit}
              >
                Upload now
              </button>
              <button
                id="cancel"
                className="ml-3 rounded-sm px-3 py-1 hover:bg-gray-300 focus:shadow-outline focus:outline-none"
                onClick={handleCancel}
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

export default AddStaffExperianceDocuModal;
