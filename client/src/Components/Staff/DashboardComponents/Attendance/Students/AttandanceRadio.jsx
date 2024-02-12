// AttandanceRadio.js
import { faBook, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Radio, Card, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const AttandanceRadio = ({ checkedValue, setCheckedValue }) => {
    const AttandanceType = ["PR", "AP", "OD", "LE"];
   
  const handleRadioChange = (value) => {
    setCheckedValue(value);
  };

  return (
    <Card className="max-w-[24rem]">
      <List className="flex-row">
      {AttandanceType.map((type, i) => (
          <ListItem key={i} className="p-0">
            <label
              htmlFor={`horizontal-list-react-${i}`}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  icon={
                    <FontAwesomeIcon
                      icon={checkedValue === type ?   faTimes:faCheck}
                      color="green"
                    />
                  }
                  name="horizontal-list"
                  id={`horizontal-list-react-${i}`}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  defaultChecked={checkedValue === type}
                  onChange={() => handleRadioChange(type)}
                />
              </ListItemPrefix>
              <Typography color="blue-gray" className="font-medium text-blue-gray-400">
                {type}
              </Typography>
            </label>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default AttandanceRadio;
