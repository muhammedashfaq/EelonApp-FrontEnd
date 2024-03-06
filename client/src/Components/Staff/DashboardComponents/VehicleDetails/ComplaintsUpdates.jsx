import { faEdit, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "#No",
  "RG No",
  "Date Of Upload",
  "Complaint",
  "Update",
  "Action",
];

const ComplaintsUpdates = () => {
  return (
    <div className="m-10">
    <Card className="h-96">
      <div className="bg-dark-purple py-2 px-2 rounded-t-md">
        <span className="text-white font-normal">Complaints</span>
      </div>
      <CardBody className="overflow-y-auto px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-2 py-3"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {["1"]?.map((index) => {
              const classes = "px-3 py-2 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>{index + 1}</td>
                  <td className={classes}>{index + 1}</td>
                  <td className={classes}>{index + 1}</td>
                  <td className={classes}>{index + 1}</td>
                  <td className={classes}>{index + 1}</td>

                  <td className={classes}>

                  <Menu>
                            <MenuHandler>
                              <FontAwesomeIcon
                                icon={faEllipsis}
                                className="cursor-pointer"
                              />
                            </MenuHandler>
                            <MenuList>
                              <MenuItem >
                                Active
                              </MenuItem>
                              <MenuItem
                              >
                                Under Maintnance
                              </MenuItem>
                              <MenuItem
                                  
                              >
                                Not Availiable
                              </MenuItem>
                            </MenuList>
                          </Menu>
                         </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
    </Card>
  </div>  )
}

export default ComplaintsUpdates



