import React from "react";
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
} from "@material-tailwind/react";
 
const UpdateInOutModal =({inOutUser,closeModal,setShowUpdateModal , labels})=> {

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
            <Typography variant="h4" color="blue-gray">
            Add
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="-mb-2" variant="h6">
            {labels}
            </Typography>
            <Input label={labels} type="time" size="lg" />
           
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={closeModal} fullWidth>
              Update
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
export default UpdateInOutModal