import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Input,
  Option,
  Select,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

export default function AddFeeStrcrtModal({ academicYrDD, stdDD }) {
  const [open, setOpen] = React.useState(false);

  const [selectedClass, setselectedClass] = useState();
  const [selectedAcademicYr, setselectedAcademicYr] = useState();
  const [term, setterm] = useState();
  const [amount, setamount] = useState();
  const [feeType, setfeeType] = useState();

  const axiosPrivate = useAxiosPrivate();

  const handleOpen = () => setOpen(!open);

  const addfeestructure = async () => {
    try {
      const reqData = {
        std: selectedClass,
        academicYear: selectedAcademicYr,
        term,
        amount,
        type: feeType,
      };
      const response = axiosPrivate.post("feestructure", reqData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <IconButton onClick={handleOpen}>
        <FontAwesomeIcon icon={faPlus} fade size="2x" />
      </IconButton>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Add fee structure</DialogHeader>
        <DialogBody className="flex justify-center">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-2">
            <div className="w-60">
              <Select
                label="Academic year"
                onChange={(e) => setselectedAcademicYr(e)}
              >
                <>
                  <Option disabled>Select academic year</Option>
                  {academicYrDD &&
                    academicYrDD.map((item) => (
                      <Option value={item}>{item}</Option>
                    ))}
                </>
              </Select>
            </div>
            <div className="w-60">
              <Select label="Class" onChange={(e) => setselectedClass(e)}>
                <Option disabled>Select class</Option>
                {stdDD &&
                  stdDD.map((item) => (
                    <>
                      <Option value={item}>{item}</Option>
                    </>
                  ))}
              </Select>
            </div>
            <div className="w-60">
              <Input label="Fee type" />
            </div>
            <div className="w-60">
              <Input label="Term" />
            </div>
            <div className="w-60">
              <Input label="Amount" />
            </div>
          </div>
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
          <Button variant="gradient" color="green" onClick={addfeestructure}>
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
