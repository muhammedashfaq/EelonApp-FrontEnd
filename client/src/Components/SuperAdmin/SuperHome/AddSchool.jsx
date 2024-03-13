import React, { useState } from "react";
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
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
 
const  AddSchool = ()=> {
    const axiosPrivate = useAxiosPrivate()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [schoolAddress,setSchoolAddress]=useState("")
  const [schoolName,setSchoolName]=useState("")
 
  const handlesumbit = async()=>{
    try {
        const formData ={
            schoolIndexNo:"20",
            shoolName:schoolAddress,
            address:schoolName
        }
        const response = await axiosPrivate.post("/school",formData)
        handleOpen()
        console.log(response)
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
      <Button onClick={handleOpen}>AddSchool</Button>
      <Dialog
        size="xs"
        open={open}
       
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Sign In
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your email and password to Sign In.
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Email
            </Typography>
            <Input label="Email" size="lg" onChange={(e)=>setSchoolName(e.target.value)} />
            <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input label="Password" size="lg"onChange={(e)=>setSchoolAddress(e.target.value)} />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handlesumbit} fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-4 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue-gray"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
export default AddSchool