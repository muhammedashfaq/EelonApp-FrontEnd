import React, { useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { createElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faDatabase, faFile, faGraduationCap, faMedal } from "@fortawesome/free-solid-svg-icons";

const DetailImagePage = () => {
  
  const data = [
    {
      label: "Parents Details",
      value: "1",
      icon: faBook,
    },
    {
      label: "Academic Details",
      value: "2",
      icon: faGraduationCap,
    },
    {
      label: "Achivements",
      value: "3",
      icon: faMedal,
    },
    {
      label: "Documents",
      value: "4",
      icon: faFile,
    },
  ];

  const [selectedTab, setSelectedTab] = useState("1");

  const handleTabChange = (value) => {
    setSelectedTab(value);
  };

  return (
    <div>
      
      <div className="w-full max-w-[100rem] flex-row border-2">
        <Tabs value={selectedTab} onChange={handleTabChange}>
          <TabsHeader>
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {data.map(({ value }) => (
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
                        <div className="grid grid-cols-3 grid-flow-col gap-4">
                          <div>
                            <div className="mb-4">
                              <h3 className="text-xl font-semibold mb-2">
                                Father Details
                              </h3>
                              <p>
                                <span className="font-semibold">Name:</span>{" "}
                                John Doe
                              </p>
                              <p>
                                <span className="font-semibold">
                                  Name In Tamil:
                                </span>{" "}
                                123456
                              </p>
                              <p>
                                <span className="font-semibold">
                                  Occupation:
                                </span>{" "}
                                123456
                              </p>
                            </div>

                            <div className="mb-4">
                              <h3 className="text-xl font-semibold mb-2">
                                Mother Details
                              </h3>
                              <p>
                                <span className="font-semibold">Name:</span>{" "}
                                john.doe@example.com
                              </p>
                              <p>
                                <span className="font-semibold">
                                  Name In Tamil:
                                </span>{" "}
                                1234567890
                              </p>
                              <p>
                                <span className="font-semibold">
                                  Occupation:
                                </span>{" "}
                                123 Main St, City
                              </p>
                            </div>

                            <div>
                              <h3 className="text-xl font-semibold mb-2">
                                Additional Information
                              </h3>
                              <p>
                                <span className="font-semibold">
                                  Annual Income:
                                </span>{" "}
                                Annual Income
                              </p>
                            </div>
                          </div>

                          <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700">
                              Upload Father Image
                            </label>
                            <input
                              type="file"
                              accept="image/*"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Upload Mother Image
                            </label>
                            <input
                              type="file"
                              accept="image/*"
                              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />{" "}
                          </div>
                        </div>
                      </div>
                    </div>

                    <table className="table-auto w-full"></table>
                  </div>
                ) : value === "2" ? (
                  <div>
                    <div className="bg-gray-700  shadow-lg rounded-lg p-2">
                      <div className="w-full bg-white p-6 rounded-lg shadow-md">
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
