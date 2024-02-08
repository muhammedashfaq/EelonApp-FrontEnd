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
import { PlusCircle } from "lucide-react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";

const AddTeachersModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [email, setemail] = React.useState();
  const [studentData, setstudentData] = React.useState();
  const { classroomId } = useParams();

  const axiosPrivate = useAxiosPrivate();

  const searchTeacher = async () => {
    try {
      if (!email) return;
      const response = await axiosPrivate.get(
        `classroom/search/teacher/${email}`
      );
      setstudentData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addTeacher = async () => {
    try {
      const data = {
        teachers: [studentData._id],
      };
      const response = await axiosPrivate.put(
        `classroom/editteacher/${classroomId}`,
        data
      );
      handleOpen();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <PlusCircle
        size={36}
        strokeWidth={1}
        onClick={handleOpen}
        className="cursor-pointer"
      />

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem] p-5">
          <CardBody className="flex flex-col gap-4">
            <Typography className="-mb-2" variant="h6">
              Enter student email
            </Typography>
            <Input
              label="Email"
              size="lg"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            {/* <Typography className="-mb-2" variant="h6">
              Your Password
            </Typography>
            <Input label="Password" size="lg" />
            <div className="-ml-2.5 -mt-3">
              <Checkbox label="Remember Me" />
            </div> */}
            <Button variant="outlined" onClick={searchTeacher} fullWidth>
              Search Teacher
            </Button>
            {studentData && (
              <div>
                <div
                  style={{ border: "1px solid gray", borderRadius: "10px" }}
                  className="p-3 flex justify-between items-center"
                >
                  <p>{studentData?.email}</p>
                  <Checkbox />
                </div>
              </div>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={addTeacher} fullWidth>
              Add teacher
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default AddTeachersModal;
