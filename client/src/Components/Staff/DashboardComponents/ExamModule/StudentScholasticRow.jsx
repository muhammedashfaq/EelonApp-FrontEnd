import {
  Typography,
  Avatar,
  Input,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";

const StudentScholasticRow = ({ item, index, classes, handleData }) => {
  const [art_craft, setart_craft] = useState();
  const [mentalAttitudes, setmentalAttitudes] = useState();
  const [activitiesLs, setactivitiesLs] = useState();
  const [physicalExcs, setphysicalExcs] = useState();
  const [lifeSkills, setlifeSkills] = useState();

  const createData = () => {
    const jsonData = {
      id: index,
      art_craft,
      mentalAttitudes,
      activitiesLs,
      physicalExcs,
      lifeSkills,
      studentId: item?._id,
      rollNo: item?.rollNo,
      studentName: item?.studentName,
    };
    handleData(jsonData);
  };
  useEffect(() => {
    createData();
  }, [art_craft, mentalAttitudes, activitiesLs, physicalExcs, lifeSkills]);

  return (
    <tr key={index} className="even:bg-teal-50/50">
      <td className={`${classes} w-10 `}>
        <Typography className="text-center">{index + 1}</Typography>
      </td>
      <td className={`${classes} w-10 bg-blue-gray-50/50 `}>
        <Typography className="text-center">{item?.rollNo}</Typography>
      </td>
      <td className={classes}>
        <div className="flex items-center gap-3">
          <Avatar size="sm" />
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {item?.studentName}
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal opacity-70"
            >
              {item?.email}
            </Typography>
          </div>
        </div>
      </td>
      <td className={`${classes} bg-blue-gray-50/50 `}>
        <div className="flex flex-col">
          <Typography variant="small" color="blue-gray" className="font-normal">
            <div className="w-28">
              <select onChange={(e) => setart_craft(e.target.value)}>
                <option selected disabled value="">
                  Select grade
                </option>
                <option value="A">A Grade</option>
                <option value="B">B Grade</option>
                <option value="C">C Grade</option>
              </select>
            </div>
          </Typography>
        </div>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          <div className="w-28">
            <select onChange={(e) => setmentalAttitudes(e.target.value)}>
              <option selected disabled value="">
                Select grade
              </option>

              <option value="A">A Grade</option>
              <option value="B">B Grade</option>
              <option value="C">C Grade</option>
            </select>
          </div>
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50 `}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          <div className="w-28">
            <select onChange={(e) => setactivitiesLs(e.target.value)}>
              <option selected disabled value="">
                Select grade
              </option>

              <option value="A">A Grade</option>
              <option value="B">B Grade</option>
              <option value="C">C Grade</option>
            </select>
          </div>
        </Typography>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          <div className="w-28">
            <select onChange={(e) => setphysicalExcs(e.target.value)}>
              <option selected disabled value="">
                Select grade
              </option>

              <option value="A">A Grade</option>
              <option value="B">B Grade</option>
              <option value="C">C Grade</option>
            </select>
          </div>
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50 `}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          <div className="w-28">
            <select onChange={(e) => setlifeSkills(e.target.value)}>
              <option selected disabled value="">
                Select grade
              </option>

              <option value="A">A Grade</option>
              <option value="B">B Grade</option>
              <option value="C">C Grade</option>
            </select>
          </div>
        </Typography>
      </td>
    </tr>
  );
};

export default StudentScholasticRow;
