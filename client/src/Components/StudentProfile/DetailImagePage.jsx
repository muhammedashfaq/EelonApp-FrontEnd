import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  CardBody,
  Card,
  CardHeader,
  IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGraduationCap,
  faMedal,
  faFile,
  faUpload,
  faEdit,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import AddDocuments from "./AddDocumentsModal";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";
import Tab2 from "./Tab2";
import FatherImageCard from "./FatherImageCard";
import MotherImageCard from "./MotherImageCard";

// Constants for tabs and card data
const tabsData = [
  { label: "Parents Details", value: "1", icon: faBook },
  { label: "Academic Details", value: "2", icon: faGraduationCap },
  { label: "Achievements", value: "3", icon: faMedal },
  { label: "Documents", value: "4", icon: faFile },
];

const cardsData = [
  { title: "Previous T.C", filename: "name_of_file_1.pdf", api: "" },
  { title: "Birth Certificate", filename: "name_of_file_2.pdf", api: "" },
  { title: "Community Certificate", filename: "name_of_file_3.pdf", api: "" },
  { title: "Adhar", filename: "name_of_file_4.pdf", api: "" },
];

const DetailImagePage = ({ userData }) => {
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  

  
  // State for selected tab
  const [selectedTab, setSelectedTab] = useState("1");

  // Function to handle tab change
  const handleTabChange = (value) => {
    setSelectedTab(value);
  };

  // Fetch PDF content function
  const fetchPdfContent = async (filename) => {
    try {
      const response = await axiosPrivate.get(""); // Update this with your API endpoint
      const pdfBlob = await response.blob();
      const pdfUrl = URL.createObjectURL(pdfBlob);
      // Trigger download
      const link = document.createElement("a");
      link.href = pdfUrl;
      link.download = `${filename}.pdf`;
      link.click();
    } catch (error) {
      console.error('Error fetching PDF:', error);
    }
  };

  return (
    <div>
      <div className="w-full max-w-[100rem] flex-row border-2">
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <TabsHeader>
            {tabsData.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                  <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {tabsData.map(({ value }) => (
              <TabPanel key={value} value={value}>
                {value === "1" ? (
                  <div>
                    <div className="bg-gray-700   shadow-lg rounded-lg p-2">
                      <div className="w-full bg-white p-6 rounded-lg shadow-md">
                        <div className="w-full flex justify-center items-center">
                          <h2 className="text-2xl font-bold mb-4">
                            Parents Details{" "}
                          </h2>
                        </div>
                        <div className="grid grid-cols-2 grid-flow-col gap-4">
                          
                         <FatherImageCard userData={userData}/>

                       <MotherImageCard userData={userData}/>
                        </div>
                      </div>
                    </div>

                    <table className="table-auto w-full"></table>
                  </div>
                ) : value === "2" ? (
                  <div>

                    <Tab2 userData={userData}/>

                  </div>
                ) : value === "3" ? (
                  <div>
                    <div className="bg-gray-700  shadow-lg rounded-lg p-2">
                      <div className="max-w-full bg-white p-6 rounded-lg shadow-md">
                        <div className="w-full flex justify-center items-center">
                          <h2 className="text-2xl font-bold mb-4">
                            Dashboard Details
                          </h2>
                        </div>
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold mb-2">
                            Personal Information
                          </h3>
                          <p>
                            <span className="font-semibold">Name:</span> John
                            Doe
                          </p>
                          <p>
                            <span className="font-semibold">Roll Number:</span>{" "}
                            123456
                          </p>
                        </div>

                        <div className="mb-4">
                          <h3 className="text-xl font-semibold mb-2">
                            Contact Details
                          </h3>
                          <p>
                            <span className="font-semibold">Email:</span>{" "}
                            john.doe@example.com
                          </p>
                          <p>
                            <span className="font-semibold">Phone:</span>{" "}
                            1234567890
                          </p>
                          <p>
                            <span className="font-semibold">Address:</span> 123
                            Main St, City
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-2">
                            Additional Information
                          </h3>
                          <p>
                            <span className="font-semibold">Course:</span>{" "}
                            Computer Science
                          </p>
                          <p>
                            <span className="font-semibold">Batch:</span>{" "}
                            2022-2026
                          </p>
                        </div>

                        <div className="mt-4">
                          <label className="block text-sm font-medium text-gray-700">
                            Upload Image
                          </label>
                          <input
                            type="file"
                            accept="image/*"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Add your dashboard content here */}
                  </div>
                ) : value === "4" ? (
                  <>
                    <div className="grid grid-cols-4 gap-2">
                      {cardsData.map((card, index) => (
                        <div
                          key={index}
                          className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
                        >
                          <div className="flex w-full items-center justify-between space-x-6 p-6">
                            <div className="flex-1 truncate">
                              <div className="flex items-center space-x-3">
                                <h3 className="truncate text-sm font-medium text-gray-900">
                                  {card.title}
                                </h3>
                              </div>
                              <span className="bg-gray-300 p-2"> {card.filename}</span>
                            </div>
                            <IconButton variant="text"  onClick={() => fetchPdfContent(card.filename)}>

                            <FontAwesomeIcon  
                              icon={faDownload}
                              className="h-6 w-6 flex-shrink-0 "
                               />
                              </  IconButton>
                          </div>
                          <div>
                            <div className="flex justify-center p-2">
                              <AddDocuments />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                ) : null}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default DetailImagePage;
