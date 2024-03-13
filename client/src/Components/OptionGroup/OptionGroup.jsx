import { Button, Option, Select, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import ClassSectionDropdowns from "../DropDowns/ClassSectionDropdowns";

const OptionGroup = ({  Name, setselectClass }) => {
  return (
    <div className="flex items-center space-x-10 p-2">
      <div className="w-max m-1 flex space-x-2 ">
 
        <ClassSectionDropdowns setClassSection={setselectClass}  label={"Class Section"}/>
      </div>
      <Typography className="text-2xl text-white font-body font-semibold ">
        Monthly {Name} Attendance Details <FontAwesomeIcon icon={faCalendarDays} />
      </Typography>
    </div>
  );
};

export default OptionGroup;
