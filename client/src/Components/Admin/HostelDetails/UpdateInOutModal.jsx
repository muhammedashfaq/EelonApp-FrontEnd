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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const UpdateInOutModal = ({
  schoolIds,
  inOutUser,
  closeModal,
  setShowUpdateModal,
  labels,
}) => {
const axiosPrivate = useAxiosPrivate()
const [outTime, setOutTimne]=useState("")
const [inTime,setInTime]=useState("")
const [timeData,setTimeData]=useState("")

const submitData = async()=>{
  try {
    let formData;

    if (inTime) {
      formData = {
        schoolId:schoolIds,
        occupantId:inOutUser,
        status: "IN",
        inTime: inTime
      };
    } else if (outTime) {
      formData = {  
        schoolId:schoolIds,
        occupantId:inOutUser,
        status: "OUT",
        outTime: outTime
      };
    }

    const response = await axiosPrivate.put(`hostel/in_out/${timeData._id}`, formData);
    closeModal()
    console.log(response,'inout');
  } catch (error) {
    console.log(error)
  }
}

const getstatus = async()=>{
  try {
    const response = await axiosPrivate.put("hostel/in_out/filter",{occupantId:inOutUser })
    setTimeData(response.data[0])
    console.log(response,"daataaa")
  } catch (error) {
    console.log(error);
  }
}
  useEffect(()=>{
getstatus()
  },[])

  return (
    <>
      <Button onClick={closeModal}>Sign In</Button>
      <Dialog
        size="xs"
        open={setShowUpdateModal}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <div className="flex justify-between">
              <Typography variant="h4" color="blue-gray">
                Add
              </Typography>
              <IconButton variant="text" onClick={closeModal}>
                <FontAwesomeIcon icon={faClose} size="2xl" />
              </IconButton>
            </div>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
           
            <Typography className="-mb-2" variant="h6">
              Out
            </Typography>
            {timeData?.outTime?

<Input label="In" value={timeData?.outTime} size="lg"  />
:
<Input label="Out" type="time" size="lg"  onChange={(e)=>setOutTimne(e.target.value)}/>

            }
            <Typography className="-mb-2" variant="h6">
              IN 
            </Typography>
              {timeData?.inTime?
              <Input label="In" value={timeData?.inTime} size="lg"  />
              :
              <Input label="In" type="time" size="lg" onChange={(e)=>setInTime(e.target.value)} />

            }
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={submitData}>
              Update
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};
export default UpdateInOutModal;
