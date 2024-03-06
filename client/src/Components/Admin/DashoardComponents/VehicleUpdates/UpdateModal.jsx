import { Button, Dialog } from "@material-tailwind/react";
import React, { useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

const UpdateModal = ({ busId }) => {
  const [open, setOpen] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  const handleOpen = () => setOpen(!open);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    try {
      const response = await axiosPrivate.put(
        `transportation/bus/complaints/${busId}`,
        { complaintsArray: formData }
      );

      handleOpen();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button onClick={handleOpen} variant="gradient" color="teal">
        Update
      </Button>
      <Dialog size="lg" open={open} handler={handleOpen}>
        <div className="p-1">
          <div className="heading text-center font-bold text-2xl m-5 text-gray-800 bg-white">
            New Post
          </div>
          <div className="editor mx-auto  flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg ">
            <input
              onChange={handleInputChange}
              name="reason"
              className="title bg-gray-100 border border-gray-300 p-2 mb-4 outline-none"
              spellcheck="false"
              placeholder="Title"
              type="text"
            />
            <textarea
              onChange={handleInputChange}
              name="description"
              className="description bg-gray-100 sec p-3 h-60 border border-gray-300 outline-none"
              spellcheck="false"
              placeholder="Describe everything about this post here"
            ></textarea>

            <div className="icons flex text-gray-500 m-2">
              <label id="select-image">
                <svg
                  className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  />
                </svg>
                <input hidden type="file" multiple />
              </label>
            </div>
            <div className="buttons flex justify-end space-x-2">
              <Button
                className="btn border border-gray-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-gray-500"
                onClick={handleOpen}
              >
                Close
              </Button>

              <Button
                onClick={handleSubmit}
                color="green"
                classNameName="btn border border-green-500 p-1 px-4 font-semibold cursor-pointer text-gray-200 ml-2 bg-green-500"
              >
                Post
              </Button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default UpdateModal;
