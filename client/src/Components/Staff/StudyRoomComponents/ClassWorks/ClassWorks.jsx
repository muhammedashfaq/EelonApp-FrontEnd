import React, { useEffect, useState } from "react";
import AddButton from "./AddButton";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Tooltip,
  Card,
  CardBody,
  CardHeader,
  Typography,
  CardFooter,
} from "@material-tailwind/react";
import { Plus, X } from "lucide-react";
import AddClassWorks from "./AddClassWorksModal";
import AddClassWorksModal from "./AddClassWorksModal";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";

const ClassWorks = () => {
  const axiosPrivate = useAxiosPrivate();
  const {classroomId}=useParams()
  const [assignment,setAssignment]=useState([])
  console.log(assignment,'asss');
const getClassWorks=async()=>{
  try {
    const response =await axiosPrivate.get(`classroom/assignment/${classroomId}`)
    setAssignment(response.data);

  } catch (error) {
    console.log(error);
  }
}


  useEffect(()=>{
    getClassWorks()
  },[])
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="m-10 h-max">
      <div>
        <Menu>
          <MenuHandler>
            <Button variant="outlined" color="blue">
              <Plus size={32} strokeWidth={2} absoluteStrokeWidth />
            </Button>
          </MenuHandler>

          <MenuList>
            <MenuItem onClick={handleOpenModal}>Assignments</MenuItem>
            <MenuItem>Notes</MenuItem>
            <hr className="my-3" />
            <MenuItem onClick={handleOpenModal}>Topic</MenuItem>
          </MenuList>
        </Menu>

        <AddClassWorksModal open={isModalOpen} onClose={handleCloseModal} />
      </div>

      <div className="mt-20 space-y-3">
        {
          assignment&&assignment?.map((as,i)=>(

            <Card key={i} className=" bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl">
          <CardBody className="">
            <div className="flex justify-between items-center bg-gray-200 p-6">
              <p className="text-gray-700">A Assignment Added {as.topic}</p>
              <X  className="cursor-pointer hover:bg-blue-gray-100 rounded-md"/>
            </div>

        
          </CardBody>
        </Card>
          ))
        }
      </div>
    </div>
  );
};

export default ClassWorks;
