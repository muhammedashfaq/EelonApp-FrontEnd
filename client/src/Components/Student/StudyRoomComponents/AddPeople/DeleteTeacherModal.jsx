import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { TrashIcon } from "lucide-react";
import { useParams } from "react-router-dom";

export default function DeleteTeacherModal({ userId, userName, getTeachers }) {
  const [open, setOpen] = React.useState(false);
  const { classroomId } = useParams();
  console.log(classroomId);

  const axiosPrivate = useAxiosPrivate();

  const handleOpen = () => setOpen(!open);

  const deleteTeacher = async () => {
    try {
      const delData = {
        data: {
          teachers: [userId],
        },
      };
      const response = await axiosPrivate.delete(
        `classroom/editteacher/${classroomId}`,
        delData
      );

      handleOpen();
      getTeachers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <IconButton onClick={handleOpen} variant="text" color="blue-gray">
        <TrashIcon />
      </IconButton>

      {/* <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button> */}
      <Dialog open={open} handler={handleOpen} size="xs" className="p-4">
        <DialogHeader>Delete teacher</DialogHeader>
        <DialogBody>Delete {userName}?</DialogBody>
        <DialogFooter className="gap-3">
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={deleteTeacher}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
