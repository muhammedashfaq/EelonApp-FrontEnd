import { Button, Option, Select, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { FeeType as FeeDropdown } from "../../../DropDowns/DropDowns";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

const FeeCollectionRow = ({ acYr }) => {
  const axiosPrivate = useAxiosPrivate();
  const [FeeType, setFeeType] = useState();
  const [academicYear, setacademicYear] = useState();
  const [std, setstd] = useState();
  const [feeData, setfeeData] = useState();

  const getFeeStructure = async () => {
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 m-5">
        <div className="flex justify-center w-52 gap-2">
          <label htmlFor="academicYear" className="text-sm">
            Fee type
          </label>
          <FeeDropdown setFeeType={setFeeType} />
        </div>
        <div className="flex  justify-center w-52 gap-2 ">
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
        <div className="flex  justify-center w-52 gap-2 ">
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
          <Button
            variant="outlined"
            style={{ textTransform: "none" }}
            onClick={getFeeStructure}
          >
            Fetch fee structure
          </Button>
        </div>
        <div className="flex items-center">
          <Typography color="gray" variant="h6">
            Amount: {feeData?.amount}
          </Typography>
        </div>
      </div>
    </>
  );
};

export default FeeCollectionRow;
