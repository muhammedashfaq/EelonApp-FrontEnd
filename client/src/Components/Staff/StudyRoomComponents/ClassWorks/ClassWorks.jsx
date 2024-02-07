import React, { useState } from "react";
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
import { Plus } from "lucide-react";
import AddClassWorks from "./AddClassWorksModal";
import AddClassWorksModal from "./AddClassWorksModal";

const ClassWorks = () => {
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
          <MenuItem>Importants</MenuItem>
        </MenuList>
      </Menu>


    <AddClassWorksModal open={isModalOpen} onClose={handleCloseModal} />
        </div>

        <div className="mt-20 space-y-3">
            <Card className="hover:shadow-xl"> 
                    <CardHeader>
                      
                    </CardHeader>
                <CardBody>
                    Assignment Added    <span>details</span>

                </CardBody>
               
            </Card>
            <Card className="hover:shadow-xl">
  <CardHeader></CardHeader>
  <CardBody>
  <div className="relative">
      Assignment Added <span>details</span>
      <Button className="absolute right-0 ">X</Button>
    </div>

  </CardBody>
</Card>

        </div>
    </div>
  );
};

export default ClassWorks;
