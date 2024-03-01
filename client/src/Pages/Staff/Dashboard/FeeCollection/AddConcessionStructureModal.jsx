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
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Tooltip,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import AcademicFeeAdditionRow from "./AcademicFeeAdditionRow";
import { v4 as uuidv4 } from "uuid";
import AdditionalFeeAddRow from "./AdditionalFeeAddRow";

export default function AddConcessionStructureModal({
  academicYrDD,
  stdDD,
  getFeeStructures,
}) {
  const [open, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("Academic fees");

  const [selectedClass, setselectedClass] = useState();
  const [selectedAcademicYr, setselectedAcademicYr] = useState();
  const [term, setterm] = useState();
  const [amount, setamount] = useState();
  const [feeType, setfeeType] = useState();
  const [othersType, setothersType] = useState();
  const [installmentType, setinstallmentType] = useState("termWise");

  const [reductionType, setreductionType] = useState("amount");
  const [reductionAmount, setreductionAmount] = useState();
  const [reductionPercentage, setreductionPercentage] = useState();
  const [concessionName, setconcessionName] = useState();

  const [dataArray, setDataArray] = useState([]);

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

  useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  useEffect(() => {
    setDataArray([]);
  }, [installmentType]);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <FontAwesomeIcon icon={faPlus} fade size="2x" />
      </IconButton>
      <Dialog open={open} size="sm" handler={handleOpen} className="p-5">
        <DialogHeader>Concession fee structure</DialogHeader>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2">
            <div className="w-52">
              <Input
                label="Concession name"
                onChange={(e) => setconcessionName(e.target.value)}
              />
            </div>
            <div className="w-52">
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
            <div className="w-52">
              <Select label="Select type" onChange={(e) => setreductionType(e)}>
                <Option value="amount">Amount</Option>
                <Option value="Percentage">Percentage</Option>
              </Select>
            </div>
            <div className="w-52">
              {reductionType === "amount" ? (
                <Input
                  label="Enter amount"
                  type="number"
                  onChange={(e) => setreductionAmount(e.target.value)}
                />
              ) : (
                <Input
                  label="Enter percentage"
                  type="number"
                  onChange={(e) => setreductionPercentage(e.target.value)}
                />
              )}
            </div>
          </div>
        </div>
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
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
