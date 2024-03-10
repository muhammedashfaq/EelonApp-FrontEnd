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
  Select,
  Option,
} from "@material-tailwind/react";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const AddRoomsModal = ({ hostelData,id }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [roomType, setRoomType] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [noBeds, setNoBeds] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isvalidate, setIsValidate] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const groupedRoomType = {};
  hostelData?.forEach((item) => {
    const typeofroom = item.type;

    if (!groupedRoomType[typeofroom]) {
      groupedRoomType[typeofroom] = [];
    }
    groupedRoomType[typeofroom].push(item);
  });

  console.log(groupedRoomType, "data");

  const formData = {
    schoolId:id,
    type: roomType,
    rentPerMonth: groupedRoomType[roomType]?.[0]?.rentPerMonth,
    occupantsNo: groupedRoomType[roomType]?.[0]?.occupantsNo,
    roomNo:roomNumber

  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formData,'newwwwwwwwwwww');
      setIsLoading(true);
        const response = await axiosPrivate.post("hostel/room", formData);
      setIsLoading(false);
      handleOpen()
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    const isValidate =
      formData.type && formData.roomNo
    setIsValidate(isValidate);
  }, [formData]);
  return (
    <>
      <Button onClick={handleOpen}>Add</Button>
      <Dialog size="xs" open={open} className="bg-transparent shadow-none">
        <Card className="mx-auto w-full max-w-[24rem]">
          <div>
            <IconButton
              variant="text"
              className="float-right"
              onClick={handleOpen}
            >
              <FontAwesomeIcon icon={faClose} size="2xl" />
            </IconButton>
          </div>
          <CardBody className="flex flex-col gap-4">
            <Typography
              className=" font-normal"
              color="gray"
            >
              Enter Room Details
            </Typography>
            <Typography className="-mb-2" variant="h6">
             Room No
            </Typography>
            <Input
            type="number"
              label="Number"
              placeholder="101"
              size="lg"
              onChange={(e) => setRoomNumber(e.target.value)}
            />

            <Typography className="-mb-2" variant="h6">
              Room Number
            </Typography>
            <Select label="Select" onChange={(e) => setRoomType(e)}>
              {Object.keys(groupedRoomType).map((type) => (
                <Option key={type} value={type}>
                  {type}
                </Option>
              ))}
            </Select>

            <Typography className="-mb-2" variant="h6">
              Rent Per Month:{" "}
              {groupedRoomType[roomType]?.[0]?.rentPerMonth || "N/A"}

            </Typography>
        
   
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
export default AddRoomsModal;
