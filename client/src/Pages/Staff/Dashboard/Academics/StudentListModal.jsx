import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

export default function StudentListModal({ studentList }) {
  const [open, setOpen] = React.useState(false);

  const axiosPrivate = useAxiosPrivate();

  const handleOpen = () => setOpen(!open);

  const getStudentsInClass = async () => {
    try {
      const reqData = {
        studentArray: studentList,
      };
      const response = await axiosPrivate.get(
        `classroom/getstudentdata`,
        reqData
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStudentsInClass();
  }, []);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        style={{ textTransform: "none" }}
      >
        List students
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          The key to more success is to have a lot of pillows. Put it this way,
          it took me twenty five years to get these plants, twenty five years of
          blood sweat and tears, and I&apos;m never giving up, I&apos;m just
          getting started. I&apos;m up to something. Fan luv.
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
