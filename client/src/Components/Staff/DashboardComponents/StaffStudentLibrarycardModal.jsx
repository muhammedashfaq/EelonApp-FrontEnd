import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import useAuth from "../../../Hooks/useAuth";

export default function StaffStudentLibrarycardModal({ studentData }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button variant="text" onClick={handleOpen}>
        View card
      </Button>

      <Dialog open={open} handler={handleOpen} size="lg">
        <DialogHeader className="ml-10 mt-4">Library card</DialogHeader>
        <DialogBody>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Card className=" max-w-[50rem] flex-row bg-blue-gray-200">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <img
                  src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="w-full">
                <Typography
                  variant="h7"
                  color="blue-gray"
                  className="font-sm font-semibold"
                >
                  Library card Id: {studentData?.libCardNo}
                </Typography>
                <hr className="m-2" />

                <Typography
                  variant="h7"
                  color="blue-gray"
                  className="font-sm font-semibold"
                >
                  Name: {studentData?.email}
                </Typography>
                <hr className="m-2" />

                <Typography
                  variant="h7"
                  color="blue-gray"
                  className="font-sm font-semibold"
                >
                  Class: {studentData?.std}
                </Typography>
                <hr className="m-2" />
                <Typography
                  variant="h7"
                  color="blue-gray"
                  className="font-sm font-semibold"
                >
                  Section: {studentData?.section}
                </Typography>
                <hr className="m-2" />
                <Typography
                  variant="h7"
                  color="blue-gray"
                  className="font-sm font-semibold"
                >
                  Issued By:
                </Typography>
                <hr className="m-2" />
                <Typography
                  variant="h7"
                  color="blue-gray"
                  className="font-sm font-semibold"
                >
                  Issued Date:
                </Typography>
                <hr className="m-2" />
              </CardBody>
            </Card>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="outlined"
            color="black"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
