import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  IconButton,
  Input,
  Option,
  Select,
} from "@material-tailwind/react";
import React from "react";

const AcademicFeeAdditionRow = ({ item, removeDiv, i }) => {
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
        <div className="w-52">
          <Select label="Term">
            <Option value="Ist midterm">Ist midterm</Option>
            <Option value="Quarterly midterm">Quarterly midterm</Option>
            <Option value="IInd midterm">IInd midterm</Option>
            <Option value="Half midterm">Half midterm</Option>
            <Option value="IIIrd midterm">IIIrd midterm</Option>
            <Option value="Annual midterm">Annual midterm</Option>
          </Select>
        </div>
        <div className="w-52">
          <Input label="Amount" />
        </div>
        <IconButton variant="outlined" onClick={() => removeDiv(item?.id)}>
          <FontAwesomeIcon icon={faMinus} size="2x" />
        </IconButton>
      </div>
    </>
  );
};

export default AcademicFeeAdditionRow;
