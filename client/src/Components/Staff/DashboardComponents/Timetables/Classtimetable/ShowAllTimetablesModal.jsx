import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";
import { Trash2Icon } from "lucide-react";

export default function ShowAllTimetablesModal() {
  const [open, setOpen] = useState(false);
  const [TimetableData, setTimetableData] = useState();
  const axiosPrivate = useAxiosPrivate();

  const handleOpen = () => setOpen(!open);

  const getAllTables = async () => {
    try {
      const response = await axiosPrivate.get("timetable/classwise");
      console.log(response.data);
      setTimetableData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTimetable = async (value) => {
    try {
      if (!value) return;
      const response = await axiosPrivate.delete(
        `timetable/classwise/${value}`
      );
      getAllTables();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllTables();
  }, []);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        style={{ textTransform: "none" }}
      >
        Show all timetables
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>All timetables</DialogHeader>
        <DialogBody className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
          {TimetableData &&
            TimetableData.map((data) => (
              <div className="w-52 bg-blue-gray-200 p-3 rounded-md shadow-2xl flex justify-between">
                {data?.classId}
                <Trash2Icon
                  className="cursor-pointer"
                  onClick={() => deleteTimetable(data?._id)}
                />
              </div>
            ))}
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
        </DialogFooter>
      </Dialog>
    </>
  );
}
