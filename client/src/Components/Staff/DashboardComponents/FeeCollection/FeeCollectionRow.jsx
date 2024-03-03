import {
  Button,
  IconButton,
  Option,
  Select,
  Typography,
  Spinner,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { FeeType as FeeDropdown } from "../../../DropDowns/DropDowns";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faMinus } from "@fortawesome/free-solid-svg-icons";

const FeeCollectionRow = ({ acYr, removeDiv, item, handleData, index }) => {
  const axiosPrivate = useAxiosPrivate();
  const [FeeType, setFeeType] = useState();
  const [academicYear, setacademicYear] = useState();
  const [std, setstd] = useState();
  const [feeData, setfeeData] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [installmentType, setinstallmentType] = useState("termWise");
  const [feeInterval, setfeeInterval] = useState("Term I");
  const [amount, setamount] = useState();

  const getFeeStructure = async () => {
    if (!FeeType || !academicYear || !std) return;
    setisLoading(true);
    try {
      const reqData = {
        feeType: FeeType,
        academicYear,
        std,
      };
      const response = await axiosPrivate.put(
        "accounts/feestructure/filter",
        reqData
      );
      console.log(response);
      setfeeData(response.data[0]);
      setisLoading(false);
    } catch (error) {
      console.error(error);
      setisLoading(false);
    }
  };

  useEffect(() => {
    handleData({
      id: item.id,
      divType: item?.divType,
      feeType: FeeType,
      academicYear,
      std,
      amount: feeData?.amount || amount,
    });
  }, [FeeType, academicYear, std, feeData, amount]);

  useEffect(() => {
    getFeeStructure();
  }, [FeeType, academicYear, std]);
  // console.log(feeData?.amount);

  return (
    <>
      <div className="flex justify-evenly m-5 gap-0">
        <div className="flex flex-col justify-center">
          <Typography
            variant="h6"
            color="gray"
            className="bg-blue-gray-200 px-3 py-2"
            style={{ borderRadius: "10px" }}
          >
            {index}
          </Typography>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 ">
          {item.divType === "otherFee" && (
            <div className="flex flex-col w-52 gap-2">
              <label htmlFor="academicYear" className="text-sm">
                Fee type
              </label>
              <FeeDropdown setFeeType={setFeeType} />
            </div>
          )}
          <div className="flex  flex-col w-52 gap-2 ">
            <label htmlFor="academicYear" className="text-sm">
              Academic Year
            </label>
            <Select
              label="Select Academic Year"
              onChange={(e) => setacademicYear(e)}
            >
              {acYr &&
                acYr.map((item, i) => (
                  <Option key={i} value={item}>
                    {item}
                  </Option>
                ))}
            </Select>
          </div>
          <div className="flex  flex-col w-52 gap-2 ">
            <label htmlFor="std" className="text-sm">
              Class
            </label>
            <Select label="Select class" onChange={(e) => setstd(e)}>
              <Option value="LKG">LKG</Option>
              <Option value="UKG">UKG</Option>
              <Option value="1">1</Option>
              <Option value="2">2</Option>
              <Option value="3">3</Option>
              <Option value="4">4</Option>
              <Option value="5">5</Option>
              <Option value="6">6</Option>
              <Option value="7">7</Option>
              <Option value="8">8</Option>
              <Option value="9">9</Option>
              <Option value="10">10</Option>
              <Option value="11">11</Option>
              <Option value="12">12</Option>
            </Select>
          </div>
          {item.divType === "academicFee" && (
            <>
              <div className="flex gap-3">
                <div className="w-52 flex flex-col gap-2">
                  <label htmlFor="std" className="text-sm">
                    Installment type
                  </label>

                  <Select
                    label="Select installment type"
                    onChange={(e) => setinstallmentType(e)}
                  >
                    <Option value="termWise">Term wise</Option>
                    <Option value="monthWise">Month wise</Option>
                    <Option value="singlePay">Single payment</Option>
                  </Select>
                </div>
              </div>
              {installmentType === "termWise" ? (
                <div className="w-52">
                  <Select
                    value={feeInterval}
                    onChange={(e) => setfeeInterval(e)}
                  >
                    <Option value="Term I">Term I</Option>
                    <Option value="Term II">Term II</Option>
                    <Option value="Term III">Term III</Option>
                  </Select>
                </div>
              ) : installmentType === "monthWise" ? (
                <div className="w-52">
                  <Select label="Month" onChange={(e) => setfeeInterval(e)}>
                    <Option value="January">January</Option>
                    <Option value="Febraury">Febraury</Option>
                    <Option value="March">March</Option>
                    <Option value="April">April</Option>
                    <Option value="May">May</Option>
                    <Option value="June">June</Option>
                    <Option value="July">July</Option>
                    <Option value="August">August</Option>
                    <Option value="September">September</Option>
                    <Option value="October">October</Option>
                    <Option value="November">November</Option>
                    <Option value="December">December</Option>
                  </Select>
                </div>
              ) : (
                <Typography variant="h6" color="gray">
                  Single payment
                </Typography>
              )}
            </>
          )}
          <div>
            {/* <Button
              variant="outlined"
              style={{ textTransform: "none" }}
              onClick={getFeeStructure}
            >
              Fetch fee structure
            </Button> */}
          </div>
          <div>
            <div>
              <Input
                label="Amount"
                placeholder="Enter amount"
                onChange={(e) => setamount(Number(e.target.value))}
                type="number"
              />
            </div>
            <div className="flex items-center">
              <Typography color="gray" variant="h6">
                Amount: {feeData?.amount}
              </Typography>
              <div className="ml-3">
                {isLoading ? (
                  <Spinner className="h-5 w-5" />
                ) : (
                  <Tooltip content="Re-fetch fee">
                    <IconButton variant="text" onClick={getFeeStructure}>
                      <FontAwesomeIcon
                        icon={faArrowsRotate}
                        size="xl"
                        style={{ color: "GrayText" }}
                      />
                    </IconButton>
                  </Tooltip>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Tooltip content="Remove field">
            <IconButton variant="outlined" onClick={() => removeDiv(item.id)}>
              <FontAwesomeIcon icon={faMinus} />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default FeeCollectionRow;
