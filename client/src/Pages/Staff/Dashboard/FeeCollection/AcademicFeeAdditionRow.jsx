import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  IconButton,
  Input,
  Option,
  Select,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import React, { useState, useEffect } from "react";

const AcademicFeeAdditionRow = ({
  item,
  removeDiv,
  i,
  handleData,
  installmentType,
}) => {
  const [feeInterval, setfeeInterval] = useState("Term I");
  const [feeIntervalType, setfeeIntervalType] = useState();
  const [amount, setamount] = useState();

  useEffect(() => {
    setfeeIntervalType(installmentType);
  }, [installmentType]);

  useEffect(() => {
    const jsonData = {
      id: item.id,
      index: i,
      feeInterval,
      feeIntervalType,
      amount: Number(amount),
    };
    handleData(jsonData);
  }, [feeInterval, amount, feeIntervalType]);

  return (
    <>
      <div
        className="p-2 flex justify-evenly gap-3"
        // style={{ border: "1px solid black" }}
      >
        <div
          className="px-3 py-2 bg-blue-gray-100"
          style={{ borderRadius: "10px" }}
        >
          {i}
        </div>
        {feeIntervalType === "termWise" ? (
          <div className="w-52">
            <select
              value={feeInterval}
              onChange={(e) => setfeeInterval(e.target.value)}
            >
              <option value="Term I">Term I</option>
              <option value="Term II">Term II</option>
              <option value="Term III">Term III</option>
            </select>
          </div>
        ) : feeIntervalType === "monthWise" ? (
          <div className="w-52">
            <select
              label="Month"
              onChange={(e) => setfeeInterval(e.target.value)}
            >
              <option value="January">January</option>
              <option value="Febraury">Febraury</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
          </div>
        ) : (
          <Typography variant="h6" color="gray">
            Single payment
          </Typography>
        )}
        <div className="w-52">
          <Input
            label="Amount"
            type="number"
            onChange={(e) => setamount(e.target.value)}
          />
        </div>
        <Tooltip content="Remove field">
          <IconButton variant="outlined" onClick={() => removeDiv(item?.id)}>
            <FontAwesomeIcon icon={faMinus} size="2x" />
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
};

export default AcademicFeeAdditionRow;
