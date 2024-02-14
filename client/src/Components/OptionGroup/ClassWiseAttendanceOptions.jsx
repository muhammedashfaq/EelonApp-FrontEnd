import {
  Button,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const ClassWiseAttendanceOptions = ({
  clss,
  Name,
  setselectClass,
  date,
  setDate,
  getClasswiseAttendance,
  setclasswiseAttendance,
}) => {
  return (
    <div className="flex items-center justify-between space-x-10">
      <div className="w-max m-1 flex space-x-2 ">
        <Select
          label="Select Class&Section"
          className="bg-gray-100"
          onChange={(e) => setselectClass(e)}
        >
          {clss.map((value, i) => (
            <Option key={i} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </div>
      <div style={{ width: "50px" }}>
        <Input
          type="date"
          color="white"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>
      <Button
        onClick={getClasswiseAttendance}
        variant="outlined"
        style={{ textTransform: "none" }}
      >
        Get attendance
      </Button>
      <Button
        variant="text"
        style={{ textTransform: "none" }}
        onClick={() => setclasswiseAttendance()}
      >
        Clear
      </Button>
      {/* <div>
        <Typography className="text-2xl text-white font-body font-semibold ">
          Classwise Attendance Details <FontAwesomeIcon icon={faCalendarDays} />
        </Typography>
      </div> */}
    </div>
  );
};

export default ClassWiseAttendanceOptions;
