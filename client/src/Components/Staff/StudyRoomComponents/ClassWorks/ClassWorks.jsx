import React, { useEffect, useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Tooltip,
  Card,
  CardBody,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  CardHeader,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import { Plus, X } from "lucide-react";
import AddClassWorks from "./AddClassAssignmentsModal";
import AddClassWorksModal from "./AddClassAssignmentsModal";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";
import AddNotes from "./AddMaterialsModal";
import AddClassAssignmentsModal from "./AddClassAssignmentsModal";
import toast from "react-hot-toast";
import AddMaterialsModal from "./AddMaterialsModal";
import AssignmenViewModal from "./AssignmenViewModal";

import MaterialViewModal from "./MaterialViewModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faGear } from "@fortawesome/free-solid-svg-icons";

const ClassWorks = () => {
  const data = [
    {
      label: "Assignments",
      value: "1",
      icon: faBook,
    },
    {
      label: "Materials",
      value: "2",
      icon: faGear,
    },
  ];
  const [activeTab, setActiveTab] = useState("1");
  const axiosPrivate = useAxiosPrivate();
  const { classroomId } = useParams();
  const [assignment, setAssignment] = useState([]);
  const [material, setMaterial] = useState([]);

  const deletAssignment = async (id) => {
    try {
      const response = await axiosPrivate.delete(
        `classroom/assignment/${classroomId}`,
        { data: { deleteId: id } }
      );
      getClassWorks();
      response.data.success
        ? toast.success(response.data.message)
        : toast.error(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const deletMaterials = async (id) => {
    try {
      const response = await axiosPrivate.delete(
        `classroom/material/${classroomId}`,
        { data: { deleteId: id } }
      );
      getClassWorks();
      response.data.success
        ? toast.success(response.data.message)
        : toast.error(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const getClassWorks = async () => {
    try {
      const response = await axiosPrivate.get(
        `classroom/assignment/${classroomId}`
      );
      const response2 = await axiosPrivate.get(
        `classroom/material/${classroomId}`
      );
      setAssignment(response.data);
      setMaterial(response2.data);
      console.log(response2.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClassWorks();
  }, []);

  const [isAssignmentModalOpen, setIsAssignmentModalOpen] = useState(false);
  const [ismaterialModalOpen, setIsmaterialsModalOpen] = useState(false);
  const [isAssignmentView, setIsAssignmentView] = useState(false);
  const [isMaterialView, setIsMaterialView] = useState(false);
  const [materialModalData, setMaterialModalData] = useState();
  const [assignmentModalData, setAssignmentModalData] = useState();

  const handleCloseModal = () => {
    setIsAssignmentModalOpen(false);
    setIsmaterialsModalOpen(false);
    setIsAssignmentView(false);
    getClassWorks();
  };
  const handleCloseMaterialModal = () => {
    setIsMaterialView(false);
  };
  return (
    <div className="m-10 h-max">
      <Menu>
        <MenuHandler>
          <Button variant="outlined" color="blue" className="">
            <Plus size={15} strokeWidth={2} absoluteStrokeWidth />
          </Button>
        </MenuHandler>

        <MenuList>
          <MenuItem
            onClick={() => {
              setIsAssignmentModalOpen(true);
            }}
          >
            Assignments <FontAwesomeIcon icon={faBook} />
          </MenuItem>

          <hr className="my-3" />
          <MenuItem onClick={() => setIsmaterialsModalOpen(true)}>
            Materials <FontAwesomeIcon icon={faGear} />
          </MenuItem>
        </MenuList>
      </Menu>

      <AddClassAssignmentsModal
        open={isAssignmentModalOpen}
        onClose={handleCloseModal}
      />
      <AddMaterialsModal
        open={ismaterialModalOpen}
        onClose={handleCloseModal}
      />
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value, icon }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              <FontAwesomeIcon icon={icon} className="mr-2" />
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value }) => (
            <TabPanel key={value} value={value}>
              {value === "1" && (
                <>
                  <div className="mt-20 space-y-3 ">
                    {assignment &&
                      assignment?.map((as, i) => (
                        <Card
                          key={i}
                          className=" bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl"
                        >
                          <CardBody className="">
                            <div className="flex justify-between items-center bg-gray-200 p-6">
                              <p className="text-gray-700">{as.topic}</p>
                              <div className="flex justify-between items-center gap-5">
                                <Button
                                  variant="outlined"
                                  style={{ textTransform: "none" }}
                                  onClick={() => {
                                    setIsAssignmentView(true);
                                    setAssignmentModalData(as);
                                  }}
                                >
                                  view
                                </Button>

                                <X
                                  className="cursor-pointer hover:bg-blue-gray-100 rounded-md"
                                  onClick={() => deletAssignment(as._id)}
                                />
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      ))}
                    <AssignmenViewModal
                      open={isAssignmentView}
                      onClose={handleCloseModal}
                      assignmentData={assignmentModalData}
                    />
                  </div>
                </>
              )}
              {value === "2" && (
                <>
                  <div className="  mt-20 space-y-3 ">
                    {material &&
                      material?.map((as, i) => (
                        <Card
                          key={i}
                          className=" bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl"
                        >
                          <CardBody className="">
                            <div className="flex justify-between items-center bg-gray-200 p-6">
                              <p className="text-gray-700">{as.topic}</p>
                              <div className="flex justify-between items-center gap-5">
                                <Button
                                  variant="outlined"
                                  style={{ textTransform: "none" }}
                                  onClick={() => {
                                    setIsMaterialView(true);
                                    setMaterialModalData(as);
                                  }}
                                >
                                  view
                                </Button>

                                <X
                                  className="cursor-pointer hover:bg-blue-gray-100 rounded-md"
                                  onClick={() => deletMaterials(as._id)}
                                />
                              </div>
                            </div>
                          </CardBody>
                        </Card>
                      ))}
                    <MaterialViewModal
                      open={isMaterialView}
                      onClose={handleCloseMaterialModal}
                      materialData={materialModalData}
                    />
                  </div>
                </>
              )}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default ClassWorks;
