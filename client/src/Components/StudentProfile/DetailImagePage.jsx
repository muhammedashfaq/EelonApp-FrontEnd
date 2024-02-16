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
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { createElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faDatabase,
  faEdit,
  faFile,
  faGraduationCap,
  faMedal,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const DetailImagePage = ({ userData }) => {
  const [fatherImage, setFatherImage] = useState(
    "https://img.freepik.com/premium-photo/man-is-smiling-holding-laptop-with-smile-his-face_973047-1028.jpg"
  );
  const [profileImageFather, setProfileImageFather] = useState("");
  const { auth } = useAuth();
  const ImageChange1 = (event) => {
    event.stopPropagation();
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFatherImage(imageUrl);
      setProfileImageFather(imageUrl);
    }
  };
  const submitimage = async (e) => {
    try {
      e.preventDefault();
      if (!profileImageFather) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Choose Any Image 📷",
        });
        return;
      }
      const response = null;
    } catch (error) {
      console.log(error);
    }
  };

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
                        <div className="grid grid-cols-2 grid-flow-col gap-4">
                          <Card className="w-auto flex-row">
                            <CardHeader
                              shadow={false}
                              floated={false}
                              className="m-0 w-2/5 shrink-0 rounded-r-none"
                            >
                              <img
                                src={fatherImage}
                                alt="card-image"
                                className=" w-auto h-auto object-cover m-1 rounded-lg"
                              />

                              {(auth.roles == 5151 || auth.roles == 2000) && (
                                <div className="space-x-2 flex justify-center my-1 items-center">
                                  <Button color="teal">
                                    <label
                                      htmlFor="imageUploadfather"
                                      className=" cursor-pointer text-white"
                                    >
                                      <FontAwesomeIcon
                                        icon={faEdit}
                                        size="2xl"
                                      />
                                    </label>
                                    <input
                                      type="file"
                                      id="imageUploadfather"
                                      name="profileimage"
                                      className="hidden"
                                      onChange={ImageChange1}
                                    />
                                  </Button>

                                  <Button
                                    color="lime"
                                    
                                    onClick={submitimage}
                                  >
                                    <FontAwesomeIcon
                                      icon={faUpload}
                                      size="2xl"
                                    />
                                  </Button>
                                </div>
                              )}
                            </CardHeader>

                            <CardBody>
                              <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">
                                  Father Details
                                </h3>
                                <p>
                                  <span className="font-semibold">Name:</span>{" "}
                                  {userData?.FathersName}
                                </p>
                                <p>
                                  <span className="font-semibold">
                                    Name In Tamil:
                                  </span>{" "}
                                  {userData?.FathersNameTamil}
                                </p>
                                <p>
                                  <span className="font-semibold">
                                    Occupation:
                                  </span>{" "}
                                  {userData?.FathersJob}
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
                                  {userData?.annualIncome}
                                </p>
                              </div>
                            </CardBody>
                          </Card>

                          <Card className="w-auto flex-row">
                            <CardHeader
                              shadow={false}
                              floated={false}
                              className="m-0 w-2/5 shrink-0 rounded-r-none"
                            >
                              <img
                                src={fatherImage}
                                alt="card-image"
                                className=" w-auto h-auto object-cover m-1 rounded-lg"
                              />

                              {(auth.roles == 5151 || auth.roles == 2000) && (
                                <div className="space-x-2 flex justify-center my-1 items-center">
                                  <Button color="teal">
                                    <label
                                      htmlFor="imageUploadfather"
                                      className=" cursor-pointer text-white"
                                    >
                                      <FontAwesomeIcon
                                        icon={faEdit}
                                        size="2xl"
                                      />
                                    </label>
                                    <input
                                      type="file"
                                      id="imageUploadfather"
                                      name="profileimage"
                                      className="hidden"
                                      onChange={ImageChange1}
                                    />
                                  </Button>

                                  <Button
                                    color="lime"
                                    
                                    onClick={submitimage}
                                  >
                                    <FontAwesomeIcon
                                      icon={faUpload}
                                      size="2xl"
                                    />
                                  </Button>
                                </div>
                              )}
                            </CardHeader>

                            <CardBody>
                              <div className="mb-4">
                                <h3 className="text-xl font-semibold mb-2">
                                  Mother Details
                                </h3>
                                <p>
                                  <span className="font-semibold">Name:</span>{" "}
                                  {userData?.MothersName}
                                </p>
                                <p>
                                  <span className="font-semibold">
                                    Name In Tamil:
                                  </span>{" "}
                                  {userData?.MothersNameTamil}
                                </p>
                                <p>
                                  <span className="font-semibold">
                                    Occupation:
                                  </span>{" "}
                                  {userData?.MothersJob}
                                </p>
                              </div>

                        
                            </CardBody>
                          </Card>
                        </div>
                      </div>
                    </div>

                    <table className="table-auto w-full"></table>
                  </div>
                ) : value === "2" ? (
                  <div>
                    <div className="bg-gray-700  shadow-lg rounded-lg p-2">
                      <div className="w-full bg-white p-6 rounded-lg shadow-md ">
                        <div className="w-full flex justify-center items-center">
                          <h2 className="text-2xl font-bold mb-4">
                            Dashboard Details
                          </h2>
                        </div>

                        <div className="bg-white p-3 shadow-sm rounded-sm">
    <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
           <span className="tracking-wide">About</span>
    </div>
    <div className="text-gray-700">
        <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">First Name</div>
                <div className="px-4 py-2">Jane</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Last Name</div>
                <div className="px-4 py-2">Doe</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Gender</div>
                <div className="px-4 py-2">Female</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Contact No.</div>
                <div className="px-4 py-2">+11 998001001</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Current Address</div>
                <div className="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Permanant Address</div>
                <div className="px-4 py-2">Arlington Heights, IL, Illinois</div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Email.</div>
                <div className="px-4 py-2">
                    <a className="text-blue-800" href="mailto:jane@example.com">jane@example.com</a>
                </div>
            </div>
            <div className="grid grid-cols-2">
                <div className="px-4 py-2 font-semibold">Birthday</div>
                <div className="px-4 py-2">Feb 06, 1998</div>
            </div>
        </div>
    </div>
  
</div> 
{/* 
                        <Card className=" bg-blue-gray-50 shadow-inner flex-row p-10">
                          <CardBody>
                            <h3 className="text-xl font-semibold mb-2">
                              Details:-
                            </h3>


                            <div className="flex flex-col space-y-3">


                              <div className="flex space-x-12  ">
                                <div >
                                  <p>
                                    <span className="font-semibold">
                                      Board:
                                    </span>{" "}
                                  </p>
                                  {userData?.board}
                                </div>
                                <div >
                                  <span className="font-semibold">
                                    Admission Year:
                                  </span>{" "}
                                  <p>{userData?.academicYear}</p>
                                </div>
                              </div>
                              <hr className="border-b-2"/>

                              <div className="flex space-x-12 ">
                                <div >
                                  <p>
                                    <span className="font-semibold">
                                      ClassSection:
                                    </span>{" "}
                                  </p>
                                  {userData?.classSection}10-A
                                </div>
                                <div >
                                  <p>
                                    <span className="font-semibold">
                                      EMIS Number:
                                    </span>{" "}
                                  </p>
                                  {userData?.EMSno}
                                </div>
                                <hr className="border-b-2"/>
                         
                              </div>
                              <hr className="border-b-2"/>
                              <div className="flex space-x-12 ">
                           
                                <div >
                                  <p>
                                    <span className="font-semibold">
                                      Category :
                                    </span>{" "}
                                  </p>
                                  {userData?.studentCategory}
                                </div>
                                <div>
                                  <p>
                                    <span className="font-semibold">
                                      Concession:
                                    </span>{" "}
                                  </p>
                                  {userData?.concessionStudent? "yes":"No"}
                                </div>
                              </div>
                              <hr className="border-b-2"/>

                              <div className="flex space-x-12 ">
                                <div >
                                  <p>
                                    <span className="font-semibold">
                                      Medium:
                                    </span>{" "}
                                  </p>
                                 {userData?.mediumOfInstruction}
                                </div>
                              </div>
                            </div>
                          </CardBody>
                        </Card> */}
                        <hr className="border-b-2"/>

                        {/* <Card className="w-max bg-blue-gray-50 shadow-inner flex-row p-10">
                          <CardBody>
                          <h3 className="text-xl font-semibold mb-2">
                                 Details:-
                                </h3>
                                <div className="space-y-3  ">

                                <div className="flex space-x-12 ">
                              <div >
                                <p>
                                  <span className="font-semibold">Board:</span>{" "}
                                </p>
                                  john.doe@example.com
                              </div>
                              <div >
                                  <span className="font-semibold">Admission Year:</span>{" "}
                                <p>
                                  john.doe@example.com
                                </p>
                              </div>
                            </div>




                          <div className="flex space-x-12 ">
                              <div >
                                <p>
                                  <span className="font-semibold">Class:</span>{" "}
                                </p>
                                  john.doe@example.com
                              </div>
                              <div >
                                <p>
                                  <span className="font-semibold">Section:</span>{" "}
                                </p>
                                  john.doe@example.com
                              </div>
                            </div>
                            <div className="flex space-x-12 ">
                              <div >
                                <p>
                                  <span className="font-semibold">EMIS Number:</span>{" "}
                                </p>
                                  john.doe@example.com
                              </div>
                              <div >
                                <p>
                                  <span className="font-semibold">Category :</span>{" "}
                                </p>
                                  john.doe@example.com
                              </div>
                            </div>
                            <div className="flex space-x-12 ">
                              <div >
                                <p>
                                  <span className="font-semibold">Concession:</span>{" "}
                                </p>
                                  john.doe@example.com
                              </div>
                              <div >
                                <p>
                                  <span className="font-semibold">Medium:</span>{" "}
                                </p>
                                  john.doe@example.com
                              </div>
                            </div>
                                </div>
                          </CardBody>
                        </Card>
                  */}
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
