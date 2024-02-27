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
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

export default function AddFeeStrcrtModal({
  academicYrDD,
  stdDD,
  getFeeStructures,
}) {
  const [open, setOpen] = React.useState(false);

  const [selectedClass, setselectedClass] = useState();
  const [selectedAcademicYr, setselectedAcademicYr] = useState();
  const [term, setterm] = useState();
  const [amount, setamount] = useState();
  const [feeType, setfeeType] = useState();
  const [othersType, setothersType] = useState();

  const axiosPrivate = useAxiosPrivate();

  const handleOpen = () => setOpen(!open);
  const handleClose = () => {
    setOpen(false);
    setfeeType("");
  };

  const addfeestructure = async () => {
    if (!amount || !selectedClass || !feeType) return;
    try {
      const reqData = {
        std: selectedClass,
        academicYear: selectedAcademicYr,
        term,
        amount: Number(amount),
        feeType: feeType,
        othersType,
      };
      // console.log(reqData);
      const response = await axiosPrivate.post(
        "accounts/feestructure",
        reqData
      );
      getFeeStructures();
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   console.log(selectedAcademicYr);
  // }, [selectedAcademicYr]);

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
                {/* <Option disabled>Select academic year</Option> */}
                {academicYrDD &&
                  academicYrDD.map((item) => (
                    <Option value={item}>{item}</Option>
                  ))}
              </Select>
            </div>
            <div className="w-60">
              <Select label="Class" onChange={(e) => setselectedClass(e)}>
                {/* <Option disabled>Select class</Option> */}
                {stdDD &&
                  stdDD.map((item) => <Option value={item}>{item}</Option>)}
              </Select>
            </div>
            <div className="w-60">
              <Select label="Fee type" onChange={(e) => setfeeType(e)}>
                <Option value="Admission fee">Admission fee</Option>
                <Option value="Academic fee">Academic fee</Option>
                <Option value="Competition fee">Competition fee</Option>
                <Option value="Events fee">Events fee</Option>
                <Option value="Annual day fee">Annual day fee</Option>
                <Option value="Tour fee">Tour fee</Option>
                <Option value="Fines">Fines</Option>
                <Option value="Others">Others</Option>
              </Select>
            </div>
            <div className="w-60">
              <Input
                label="Other fees"
                type="text"
                disabled={feeType !== "others"}
                onChange={(e) => setothersType(e.target.value)}
              />
            </div>

            <div className="w-60">
              <Select label="Term" onChange={(e) => setterm(e)}>
                <Option value="Ist midterm">Ist midterm</Option>
                <Option value="Quarterly midterm">Quarterly midterm</Option>
                <Option value="IInd midterm">IInd midterm</Option>
                <Option value="Half midterm">Half midterm</Option>
                <Option value="IIIrd midterm">IIIrd midterm</Option>
                <Option value="Annual midterm">Annual midterm</Option>
              </Select>
            </div>
            <div className="w-60">
              <Input
                label="Amount"
                type="text"
                onChange={(e) => setamount(e.target.value)}
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              addfeestructure();
              handleClose();
            }}
          >
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
