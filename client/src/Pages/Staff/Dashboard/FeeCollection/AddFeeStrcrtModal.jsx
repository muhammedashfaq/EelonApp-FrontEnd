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
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import AcademicFeeAdditionRow from "./AcademicFeeAdditionRow";
import { v4 as uuidv4 } from "uuid";
import AdditionalFeeAddRow from "./AdditionalFeeAddRow";

export default function AddFeeStrcrtModal({
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

  const [dataArray, setDataArray] = useState([]);
  const [addnlFeeArr, setaddnlFeeArr] = useState([]);

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

  const handleData = (data) => {
    const { id } = data;
    const existingIndex = dataArray.findIndex((item) => item.id === id);

    if (existingIndex !== -1) {
      setDataArray((prevDataArray) => {
        const newDataArray = [...prevDataArray];
        newDataArray[existingIndex] = data;
        return newDataArray;
      });
    } else {
      setDataArray((prevDataArray) => [...prevDataArray, data]);
    }
  };

  const addDiv = () => {
    const newId = uuidv4();
    const newObj = { id: newId };
    setDataArray([...dataArray, newObj]);
  };
  const removeDiv = (idToRemove) => {
    if (!idToRemove) return;
    const updatedDivs = dataArray.filter((item) => item.id !== idToRemove);
    setDataArray(updatedDivs);
  };

  const addAddtnlRow = () => {
    const newId = uuidv4();
    const newObj = { id: newId };
    setaddnlFeeArr([...addnlFeeArr, newObj]);
  };
  const removeAddtnlRow = (idToRemove) => {
    if (!idToRemove) return;
    const updatedDivs = dataArray.filter((item) => item.id !== idToRemove);
    setaddnlFeeArr(updatedDivs);
  };

  // useEffect(() => {
  //   console.log(selectedAcademicYr);
  // }, [selectedAcademicYr]);

  // useEffect(() => {
  //   console.log(dataArray);
  // }, [dataArray]);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <FontAwesomeIcon icon={faPlus} fade size="2x" />
      </IconButton>
      <Dialog open={open} size="lg" handler={handleOpen} className="p-5">
        <DialogHeader>Add fee structure</DialogHeader>
        <Tabs value="Academic fees">
          <TabsHeader
            className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
            indicatorProps={{
              className:
                "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
            }}
          >
            <Tab
              value={"Academic fees"}
              onClick={() => setActiveTab("Academic fees")}
              id="custom-animation"
              className={activeTab === "Academic fees" ? "text-gray-900" : ""}
            >
              Academic fee
            </Tab>
            <Tab
              value={"Other fees"}
              onClick={() => setActiveTab("Other fees")}
              className={activeTab === "Other fees" ? "text-gray-900" : ""}
            >
              Other fees
            </Tab>
            <Tab
              value={"Additional fees"}
              onClick={() => setActiveTab("Other fees")}
              className={activeTab === "Other fees" ? "text-gray-900" : ""}
            >
              Additional fees
            </Tab>
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            <TabPanel value="Academic fees">
              <DialogBody className="flex justify-center">
                <div>
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
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
                      <Select
                        label="Class"
                        onChange={(e) => setselectedClass(e)}
                      >
                        {/* <Option disabled>Select class</Option> */}
                        {stdDD &&
                          stdDD.map((item) => (
                            <Option value={item}>{item}</Option>
                          ))}
                      </Select>
                    </div>

                    <div className="w-60">
                      <Select label="Term" onChange={(e) => setterm(e)}>
                        <Option value="Ist midterm">Ist midterm</Option>
                        <Option value="Quarterly midterm">
                          Quarterly midterm
                        </Option>
                        <Option value="IInd midterm">IInd midterm</Option>
                        <Option value="Half midterm">Half midterm</Option>
                        <Option value="IIIrd midterm">IIIrd midterm</Option>
                        <Option value="Annual midterm">Annual midterm</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="my-5 flex justify-evenly">
                    <div className="w-52">
                      <Select label="Select installment">
                        <Option value="termWise">Term wise</Option>
                        <Option value="monthWise">Month wise</Option>
                        <Option value="singlePay">Single payment</Option>
                      </Select>
                    </div>
                    <IconButton variant="outlined" onClick={addDiv}>
                      <FontAwesomeIcon icon={faPlus} size="2xl" />
                    </IconButton>
                  </div>
                  <hr className="my-3 text-black" />
                  {dataArray &&
                    dataArray.map((item, i) => (
                      <AcademicFeeAdditionRow
                        i={i + 1}
                        key={item?.id}
                        item={item}
                        removeDiv={removeDiv}
                      />
                    ))}
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
                    handleClose();
                  }}
                >
                  <span>Add</span>
                </Button>
              </DialogFooter>
            </TabPanel>
            <TabPanel value="Other fees">
              <DialogBody className="flex justify-center">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                  <div className="w-60">
                    <Select
                      label="Academic Year"
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
                        stdDD.map((item) => (
                          <Option value={item}>{item}</Option>
                        ))}
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
                      disabled={feeType !== "Others"}
                      onChange={(e) => setothersType(e.target.value)}
                    />
                  </div>

                  <div className="w-60">
                    <Select label="Term" onChange={(e) => setterm(e)}>
                      <Option value="Ist midterm">Ist midterm</Option>
                      <Option value="Quarterly midterm">
                        Quarterly midterm
                      </Option>
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
            </TabPanel>
            <TabPanel value="Additional fees">
              <DialogBody>
                <div className="flex flex-row-reverse mb-5">
                  <IconButton variant="outlined" onClick={addAddtnlRow}>
                    <FontAwesomeIcon icon={faPlus} size="xl" />
                  </IconButton>
                </div>
                <div>
                  {addnlFeeArr &&
                    addnlFeeArr.map((item, i) => (
                      <AdditionalFeeAddRow
                        item={item}
                        key={item?.id}
                        i={i + 1}
                        removeAddtnlRow={removeAddtnlRow}
                      />
                    ))}
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
            </TabPanel>
          </TabsBody>
        </Tabs>
      </Dialog>
    </>
  );
}
