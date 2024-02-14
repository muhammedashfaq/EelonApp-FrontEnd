import { Button, Option, Select, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

const OptionGroup = ({ clss, Name, setselectClass }) => {
  return (
    <div className="flex items-center space-x-10">
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
      <Typography className="text-2xl text-white font-body font-semibold ">
        Monthly {Name} Attendance Details <FontAwesomeIcon icon={faCalendarDays} />
      </Typography>
    </div>
  );
};

export default OptionGroup;
