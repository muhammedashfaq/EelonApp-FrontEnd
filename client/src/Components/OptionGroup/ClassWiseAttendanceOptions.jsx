import {
  Button,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faDownload, faGear } from "@fortawesome/free-solid-svg-icons";

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
    <div className="flex items-center space-x-2">
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
        <Input
          type="date"
          color="white"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>
      <div>

      <Button
      color="green"
        onClick={getClasswiseAttendance}
      >
Get
        
      </Button>
     
    
       </div>
      <div>
      <Button
      color="amber"
      
        onClick={() => setclasswiseAttendance()}
      >
Reset
      </Button>
        
        
        </div>
      {/* <div>
        <Typography className="text-2xl text-white font-body font-semibold ">
          Classwise Attendance Details <FontAwesomeIcon icon={faCalendarDays} />
        </Typography>
      </div> */}
    </div>
  );
};

export default ClassWiseAttendanceOptions;
