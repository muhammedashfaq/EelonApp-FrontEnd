import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Select,
  Option,
  IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
 
const  AlocateModal = ({setInputValue,findUser,isLoading,memberName ,UserType ,setUserType,AddToRoom,setFromDate})=> {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  return (
    <>
      <Button onClick={handleOpen}>Allocate</Button>
      <Dialog
        size="xs"
        open={open}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <div className="flex justify-between">

            <Typography variant="h4" color="blue-gray">
              Details
            </Typography>

            <IconButton variant="text">

            <FontAwesomeIcon icon={faClose} size="2x" onClick={handleOpen}/>
            </IconButton>
       
            </div>
            <Input
            type="date"
            label="Date"
            onChange={(e)=>setFromDate(e.target.value)}
            />
       
            <Select
              label="Select"
              variant="standard"
              onChange={(e) => setUserType(e)}
            >
              <Option value="staff">Staff</Option>
              <Option value="student">Student </Option>
            </Select>
         

            <div className="relative flex">
              <Input
                placeholder="Enter Here"
           
                label={UserType === "staff"? "StaffID":"Admission Number"} 
                onChange={(e) => setInputValue(e.target.value)}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Button
                onClick={findUser}
                disabled={UserType==""}
                loading={isLoading}
                size="sm"
                // color={rgNo ? "gray" : "blue-gray"}
                className="!absolute right-1 top-1 rounded"
              >
                Search
              </Button>
            </div>

            <Typography className="-mb-2" variant="h6">
             Name
             </Typography>
            <Input value={memberName} size="lg" />

            
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={AddToRoom} fullWidth>
              Allocate
            </Button>

          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
export default AlocateModal