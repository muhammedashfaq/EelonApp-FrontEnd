import {
  faEdit,
  faInfoCircle,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Dialog,
  Input,
  Option,
  Select,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import useAuth from "../../../../Hooks/useAuth";

const AddSyllubusModal = ({ acYr, subjects, classes, getDetails }) => {
  const { auth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [year, setYear] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [subject, setSubject] = useState("");
  const [termName, settermName] = useState("");
  const [std, setStd] = useState("");
  const [error, setError] = useState();
  const axiosPrivate = useAxiosPrivate();
  const [base64String, setBase64String] = useState("");

  const handleOpen = () => setOpen(!open);
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target.result;
      setBase64String(base64);
    };
    reader.readAsDataURL(file);
  };

  // useEffect(() => {
  //   console.log(base64String, "b64");
  // }, [base64String]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = {
        year,
        teacherName,
        subject,
        termName,
        std,
        teacherId: auth?.userId,
        pdfB64: base64String,
      };
      if (
        !formData.year ||
        !formData.teacherName ||
        !formData.subject ||
        !formData.termName ||
        !formData.std
      ) {
        setError("All Field Are Reuqired");
        return;
      }
      setError(null);

      setIsLoading(true);
      await axiosPrivate.post("/lessonplanning/syllabus", formData);
      setIsLoading(false);
      handleOpen();
      getDetails();
      toast.success("success");
    } catch (error) {
      setIsLoading(false);
      console.error(error);

      let errorMessage = "An error occurred";

      if (error.response) {
        const responseData = error.response.data;

        // Check if there is a specific error message in the response data
        if (responseData && responseData.message) {
          errorMessage = responseData.message;
        } else {
          errorMessage = "Something went wrong with the server";
        }
      }

      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  return (
    <div>
      <Button
        className="flex items-center gap-3"
        size="sm"
        onClick={handleOpen}
      >
        <FontAwesomeIcon
          icon={faUserPlus}
          strokeWidth={2}
          className="h-4 w-4"
        />{" "}
        Add Syllabus
      </Button>
      <Dialog size="md" open={open} className="w-full">
        <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
          <p className="font-semibold text-gray-800">
            Add {error && <p className="text-red-600">{error}</p>}
          </p>
          <svg
            onClick={handleOpen}
            className="w-6 h-6 cursor-pointer bg-gray-400 text-black p-1 rounded-md"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div className="flex flex-col px-6 py-5 bg-gray-50">
          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Accademic Year</p>
              <Select label="Select Year" onChange={(e) => setYear(e)}>
                {acYr &&
                  acYr.map((item, i) => (
                    <Option key={i} value={item}>
                      {i + 1}. {item}
                    </Option>
                  ))}
              </Select>
            </div>
            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Exam Name</p>

              <Select label="Select The Exam" onChange={(e) => settermName(e)}>
                <Option value="1st Mid Term Exam">1. 1st Mid Term </Option>
                <Option value="Quarterly Exam">2. Quarterly Exam</Option>
                <Option value="2nd Mid Term Exam">3. 2nd Mid Term </Option>
                <Option value="Half Yearly Exam">4. Half Yearly Exam</Option>
                <Option value="3rd Mid Term Exam">5. 3rd Mid Term </Option>
                <Option value="Annual Exam">6. Annual Exam</Option>
              </Select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5 space-y-3">
            <div className="w-full sm:w-1/2">
              <p className="mb-2 font-semibold text-gray-700">Teacher Name</p>
              <Input
                label="Enter Teacher Name"
                onChange={(e) => setTeacherName(e.target.value)}
              />
            </div>
            <div className="w-full sm:w-1/2 mt-2 sm:mt-0">
              <p className="mb-2 font-semibold text-gray-700">Subject</p>
              <Select label="Select Subject" onChange={(e) => setSubject(e)}>
                {subjects &&
                  subjects.map((item, i) => (
                    <Option key={i} value={item}>
                      {i + 1}. {item}
                    </Option>
                  ))}
              </Select>
              <p className="mb-2 font-semibold text-gray-700">Class</p>
              <Select label="Select Subject" onChange={(e) => setStd(e)}>
                {classes &&
                  classes.map((item, i) => (
                    <Option key={i} value={item}>
                      {i + 1}. {item}
                    </Option>
                  ))}
              </Select>
            </div>
          </div>
          <hr />

          <div className="mt-5 mb-3 space-x-4">
            <Button color="teal">
              <label
                htmlFor="imageUploadfather"
                className=" cursor-pointer text-white"
              >
                <FontAwesomeIcon icon={faEdit} size="1x" />
              </label>
              <input
                accept=".pdf"
                type="file"
                id="imageUploadfather"
                name="profileimage"
                className="hidden"
                onChange={handleFileChange}
              />
            </Button>

            {selectedFile && <p>{selectedFile.name}</p>}
          </div>
          <p className="text-xs text-red-600">
            <FontAwesomeIcon icon={faInfoCircle} color="red" /> Only PDF Formate
            will Accept
          </p>
        </div>
        <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <Button
            loading={isLoading}
            type="submit"
            className="px-4 py-2 text-white font-semibold bg-blue-500 rounded"
            onClick={handleSubmit}
          >
            {isLoading ? "Sending..." : "Send"}
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default AddSyllubusModal;
