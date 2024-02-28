import {
  Button,
  IconButton,
  Option,
  Select,
  Typography,
  Spinner,
  Tooltip,
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
      feeType: FeeType,
      academicYear,
      std,
      amount: feeData?.amount,
    });
  }, [FeeType, academicYear, std, feeData]);

  useEffect(() => {
    getFeeStructure();
  }, [FeeType, academicYear, std]);

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
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 ">
          <div className="flex flex-col w-52 gap-2">
            <label htmlFor="academicYear" className="text-sm">
              Fee type
            </label>
            <FeeDropdown setFeeType={setFeeType} />
          </div>
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
          <div>
            {/* <Button
              variant="outlined"
              style={{ textTransform: "none" }}
              onClick={getFeeStructure}
            >
              Fetch fee structure
            </Button> */}
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
