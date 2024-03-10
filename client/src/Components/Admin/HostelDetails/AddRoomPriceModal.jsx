import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  IconButton,
} from "@material-tailwind/react";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";


const AddRoomPriceModal = ({id,getDataHostel}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [roomType, setRoomType] = useState("");
  const [amount, setAmount] = useState("");
  const [noBeds,setNoBeds]=useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [isvalidate, setIsValidate] = useState(false);
  const axiosPrivate = useAxiosPrivate();


  const formData = {
    type:roomType,
    rentPerMonth:amount,
    occupantsNo:noBeds
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true)
       await axiosPrivate.post(`hostel/${id}`, {hostelRoomTypes:formData});
      setIsLoading(false)
      getDataHostel()
      handleOpen()
    } catch (error) {
        setIsLoading(false)
      console.log(error);
    }
  };
  useEffect(() => {
    const isValidate = formData.rentPerMonth && formData.type&&formData.occupantsNo;
    setIsValidate(isValidate);
  }, [formData]);
  return (
    <>
      <Button onClick={handleOpen}>Add</Button>
      <Dialog size="xs" open={open} className="bg-transparent shadow-none">
        <Card className="mx-auto w-full max-w-[24rem]">
          <div >
            <IconButton variant="text" className="float-right" onClick={handleOpen}>

            <FontAwesomeIcon icon={faClose} size="2xl"/>
            </IconButton>
          </div>
          <CardBody className="flex flex-col gap-4">
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter Room Type And Price
            </Typography>
   
             <Typography className="-mb-2" variant="h6">
              Occupents Number
            </Typography>
            <Input
              type="number"
              label=" Occupents Number"
              size="lg"
              onChange={(e) => setNoBeds(e.target.value)}
            />
            <Typography className="-mb-2" variant="h6">
              Amount
            </Typography>
            <Input
              type="number"
              label="Amount"
              size="lg"
              onChange={(e) => setAmount(e.target.value)}
            />
                     <Typography className="-mb-2" variant="h6">
              Type Of Rooms
            </Typography>
            <Input
              label="Type"
              placeholder="dormitory-10Bed"
              size="lg"
              onChange={(e) => setRoomType(e.target.value)}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              loading={isLoading}
              disabled={!isvalidate}
              variant="gradient"
              onClick={handleSubmit}
              fullWidth
            >
              Add
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};
export default AddRoomPriceModal;
