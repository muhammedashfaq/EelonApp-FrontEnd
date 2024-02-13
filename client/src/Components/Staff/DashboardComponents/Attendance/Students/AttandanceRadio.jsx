// AttandanceRadio.js
import { faBook, faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Radio,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";

const AttandanceRadio = ({
  isPresent,
  setisPresent,
  index,
  handleChange,
  studentId,
}) => {
  const AttandanceType = ["PR", "AP", "OD", "LE"];
  useEffect(() => {
    handleChange();
  }, []);
  return (
    <Card className="max-w-[24rem]">
      <List className="flex-row">
        <Tooltip
          content="Present"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <ListItem className="p-0">
            <label
              htmlFor={`horizontal-list-react-1`}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  icon={<FontAwesomeIcon icon={faCheck} color="green" />}
                  name={`horizontal-list-${index}`}
                  id={`horizontal-list-react-1-${index}`}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  onChange={(e) => {
                    setisPresent("Pr");
                  }}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium text-blue-gray-400"
              >
                Pr
              </Typography>
            </label>
          </ListItem>
        </Tooltip>
        <Tooltip
          content="Absent"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <ListItem className="p-0">
            <label
              htmlFor={`horizontal-list-react-2`}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  icon={<FontAwesomeIcon icon={faCheck} color="green" />}
                  name={`horizontal-list-${index}`}
                  id={`horizontal-list-react-2-${index}`}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  onChange={(e) => {
                    setisPresent("Ab");
                  }}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium text-blue-gray-400"
              >
                Ab
              </Typography>
            </label>
          </ListItem>
        </Tooltip>
        <Tooltip
          content="On duty"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <ListItem className="p-0">
            <label
              htmlFor={`horizontal-list-react-3`}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  icon={<FontAwesomeIcon icon={faCheck} color="green" />}
                  name={`horizontal-list-${index}`}
                  id={`horizontal-list-react-3-${index}`}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  onChange={(e) => {
                    setisPresent("OD");
                  }}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium text-blue-gray-400"
              >
                OD
              </Typography>
            </label>
          </ListItem>
        </Tooltip>
        <Tooltip
          content="Late entry with reason"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <ListItem className="p-0">
            <label
              htmlFor={`horizontal-list-react-4`}
              className="flex w-full cursor-pointer items-center px-3 py-2"
            >
              <ListItemPrefix className="mr-3">
                <Radio
                  icon={<FontAwesomeIcon icon={faCheck} color="green" />}
                  name={`horizontal-list-${index}`}
                  id={`horizontal-list-react-4-${index}`}
                  ripple={false}
                  className="hover:before:opacity-0"
                  containerProps={{
                    className: "p-0",
                  }}
                  onChange={(e) => {
                    setisPresent("LE");
                  }}
                />
              </ListItemPrefix>
              <Typography
                color="blue-gray"
                className="font-medium text-blue-gray-400"
              >
                LE
              </Typography>
            </label>
          </ListItem>
        </Tooltip>
      </List>
    </Card>
  );
};

export default AttandanceRadio;
