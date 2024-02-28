import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  IconButton,
  Input,
  Option,
  Select,
} from "@material-tailwind/react";
import React, { useState } from "react";

const AdditionalFeeAddRow = ({
  academicYrDD,
  setaddnlFeeType,
  setaddnlAmount,
  setselectedAddnlAccYr,
}) => {
  const [selectedAcademicYr, setselectedAcademicYr] = useState();
  const [feeType, setfeeType] = useState();
  const [amount, setamount] = useState();
  const [othersType, setothersType] = useState();

  //   const addfeestructure = async () => {
  //     if (!amount || !feeType) return;
  //     try {
  //       const reqData = {
  //         academicYear: selectedAcademicYr,
  //         amount: Number(amount),
  //         feeType: feeType,
  //         othersType: "Additional fee",
  //       };
  //       // console.log(reqData);
  //       const response = await axiosPrivate.post(
  //         "accounts/feestructure",
  //         reqData
  //       );
  //       getFeeStructures();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  return (
    <>
      <div
        className="p-2 flex justify-evenly gap-3"
        // style={{ border: "1px solid black" }}
      >
        <div className="w-60">
          <Select
            label="Academic Year"
            onChange={(e) => setselectedAddnlAccYr(e)}
          >
            {/* <Option disabled>Select academic year</Option> */}
            {academicYrDD &&
              academicYrDD.map((item) => <Option value={item}>{item}</Option>)}
          </Select>
        </div>

        <div className="w-52">
          <Input
            label="Fee name"
            onChange={(e) => setaddnlFeeType(e.target.value)}
          />
        </div>
        <div className="w-52">
          <Input
            label="Amount"
            type="number"
            onChange={(e) => setaddnlAmount(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};

export default AdditionalFeeAddRow;
