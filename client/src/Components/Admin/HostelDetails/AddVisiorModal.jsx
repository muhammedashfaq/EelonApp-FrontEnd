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
  IconButton,
  Textarea,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const AddVisiorModal = () => {
  const axiosPrivate = useAxiosPrivate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [date, setDate] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [visitingIndividual, setVisitIndividual] = useState("");
  const [reason, setReason] = useState("");
  const [visitorAddress, setvisitorAddress] = useState("");

  const formData = {
    schoolId: String,
    occupantId: String,
    occupantType: String,
    occupantName: String,
    roomNo: Number,
    roomId: String,
    date: String,
    time: String,
    visitorName: String,
    visitorPhNo: String,
  };
  const submitVisitorDetails = async () => {
    try {
      const response = await axiosPrivate.post("/hostel/visitors");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button onClick={handleOpen} variant="gradient" color="teal">
        Update
      </Button>
      <Dialog open={open} className="relative">
        <div className="bg-dark-purple rounded-md absolute right-3 top-3 z-50">
          <IconButton variant="text" onClick={handleOpen} size="sm">
            <FontAwesomeIcon
              icon={faClose}
              size="xl"
              className=""
              color="white"
            />
          </IconButton>
        </div>
        <div className="mt-4">
          <Card>
            <CardBody className="">
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter Visitor Details
              </Typography>
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <div className="w-1/2 pr-2">
                    <Typography className=" " variant="h6">
                      Visitor Name
                    </Typography>

                    <Input
                      placeholder="Enter Here"
                      onChange={(e) => setVisitorName(e.target.value)}
                    />
                  </div>
                  <div className="w-1/2 pr-2">
                    <Typography className=" " variant="h6">
                      Visiting Individual
                    </Typography>

                    <Input
                      placeholder="Enter Here"
                      onChange={(e) => setVisitIndividual(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="w-1/2 pr-2">
                    <Typography className=" " variant="h6">
                      Date
                    </Typography>

                    <Input
                      placeholder="Enter Here"
                      type="date"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className="w-1/2 pr-2">
                    <Typography className=" " variant="h6">
                      Reason
                    </Typography>

                    <Input
                      placeholder="Enter Here"
                      onChange={(e) => setReason(e.target.value)}
                    />
                  </div>
                </div>

                <Typography className="-mb-2" variant="h6">
                  Address/ContactNumber
                </Typography>

                <Textarea
                  label="Description"
                  placeholder="Enter Here"
                  size="lg"
                  name="content"
                  onChange={(e) => setvisitorAddress(e.target.value)}
                />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                // disabled={!isvalidate} loading={isLoading}
                type="submit"
                variant="gradient"
                fullWidth
                //   onClick={handleFormSubmition}
              >
                Add To List
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};
export default AddVisiorModal;
