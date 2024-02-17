import React, { useState } from "react";
import Datetime from "react-datetime";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faInfo, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";

const Classtimetable = () => {
  const axiosPrivate = useAxiosPrivate();
  const [day, setDay] = useState("");
  const [classType, setClassType] = useState();
  const [templateId, setTemplateId] = useState();

  const SubmitForm = async (e) => {
    const formdData = {
      day,
      classType,
      templateId,
    };

    console.log(formdData, "data");
    e.preventDefault();
    try {
      const response = await axiosPrivate.post(
        "/timetable/class/template",
        formdData
      );
      console.log(response, "res");
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="m-10">
      <div className="p-4 border-2 shadow-lg">
        <div className="Laptop:grid Laptop:grid-cols-4 ipad:grid ipad:grid-cols-2 Tablet:grid Tablet:grid-cols-2 mobile:grid mobile:grid-cols-1 gap-2 items-center space-x-1 w-full">
          <div className="flex space-x-1">
            <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
              ClassType:
            </label>

            <Select
              label="Choose"
              onFocus={false}
              onChange={(e) => {
                setClassType(e);
                setTemplateId(e);
              }}
            >
              <Option value="KG">KG</Option>
              <Option value="Hight School">High School</Option>
              <Option value="Higher Secondary">Higher Secondary</Option>
            </Select>
          </div>
          <div className="">
            <div className="flex  items-center space-x-1">
              <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
                Type:
              </label>

              <Input
                label="TemplateId"
                value={templateId}
                onChange={(e) => setTemplateId(e.target.value)}
              />
            </div>

            <FontAwesomeIcon
              icon={faInfoCircle}
              color="red"
              className="opacity-55"
            />
            <span className="opacity-70 text-xs font-semibold ml-1">
              Template Id Should be Unique
            </span>
          </div>
          <div>
            <Button
              type="submit"
              onClick={SubmitForm}
              className="mt-2 flex items-center w-28"
              color="blue"
            >
              <FontAwesomeIcon icon={faAdd} className="m-1 " />
              Add
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classtimetable;
