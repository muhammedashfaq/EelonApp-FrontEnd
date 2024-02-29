import React from "react";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faBookSkull } from "@fortawesome/free-solid-svg-icons";

const LibrarysettingsCard = () => {
  const axiosPrivate = useAxiosPrivate();

  const [bookCount, setbookCount] = useState();
  const [issueCount, setissueCount] = useState();

  const getBookCount = async () => {
    try {
      const response = await axiosPrivate.get("library/reports/bookcount");
      console.log(response.data);
      setbookCount(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBooksIssued = async () => {
    try {
      const response = await axiosPrivate.get("library/reports/issuecount");
      console.log(response.data);
      setissueCount(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookCount();
    getBooksIssued();
  }, []);

  return (
    <div className="mx-10 mt-4">
      <div className="flex flex-wrap gap-4 justify-around bg-blue-gray-50 shadow-inherit rounded-xl p-2">
        
      <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-blue-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
          <FontAwesomeIcon icon={faBookOpen}/>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Books</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{bookCount} nos</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">+55%</strong>&nbsp;than last week
            </p>
          </div>
        </div>

        <div className="max-w-md relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md">
          <div className="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-pink-600 to-pink-400 text-white shadow-pink-500/40 shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center">
           <FontAwesomeIcon icon={faBookSkull}/>
          </div>
          <div className="p-4 text-right">
            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600"> Total Books Issued</p>
            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{issueCount} nos</h4>
          </div>
          <div className="border-t border-blue-gray-50 p-4">
            <p className="block antialiased font-sans text-base leading-relaxed font-normal text-blue-gray-600">
              <strong className="text-green-500">+3%</strong>&nbsp;than last month
            </p>
          </div>
        </div>

        
       

        <div className="max-w-md p-8 sm:flex sm:space-x-6  text-black rounded-2xl border-gray-300 bg-gray-100 border-2 shadow-inherit">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm dark:text-gray-400 w-14 h-14 bg-blue-gray-100 rounded-md flex justify-center items-center border-2 ">
                1100
              </span>
              <div>
                <span className="text-2xl font-semibold flex flex-col">
                  Total Cards Issued
                </span>
                <div className="flex justify-end p-1 bg-yellow-50">
                  <span className="font-extrabold text-xl">5 nos</span>
                </div>
              </div>
            </div>
            <hr />
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="dark:text-gray-400">
                  leroy.jenkins@company.com
                </span>
              </span>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default LibrarysettingsCard;
