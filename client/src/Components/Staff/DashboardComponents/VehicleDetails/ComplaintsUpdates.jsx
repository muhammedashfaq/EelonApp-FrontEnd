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
  Input,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import UpdateproofModal from "./UpdateproofModal";

const TABLE_HEAD = [
  "#No",
  "Title",
  "Description",
  "Status",
  "Status Update",
  "Proof Update"
];
const ComplaintsUpdates = () => {
  const [detail,setDetails]=useState("")
  const [rgNo,setrgNo]=useState("")
const axiosPrivate =useAxiosPrivate()



const changeStatus = async(status)=>{
  try {
    const response = await axiosPrivate.put("",status)
  } catch (error) {
    console.log(error)
  }
}
  const findBusDetails = async()=>{
    try {
        const response = await axiosPrivate.put("transportation/bus/filter",{rgNo:rgNo})
        setDetails(response.data[0])
        console.log(response,'res');
    } catch (error) {
        console.log(error)
    }
}
  return (
    <div className="m-10">
    <Card className="h-96">
      <div className="bg-dark-purple py-2 px-2 rounded-t-md">
        <span className="text-white font-normal">Complaints {detail?.rgNo}</span>
      </div>
      <div  className=" flex  space-x-1 p-4 w-1/3">
          <Input label="Enter Vehicle Number" placeholder="Type Here" onChange={(e)=>setrgNo(e.target.value)}/>
          <Button onClick={findBusDetails}>check</Button>
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
              {
              detail?.complaints?.map(({_id,title,description,status},index) => {
                const classes = "px-3 py-2 border-b border-blue-gray-50 w-10";

                return (
                  <tr key={index}>
                    <td className={classes}>{index + 1}</td>
                    <td className={classes}>{title}</td>
                    <td className={classes}>{description}</td>
                    <td className={classes}>{status}</td>

                    <td className={classes}>  <Menu>
                              <MenuHandler>
                                <FontAwesomeIcon
                                  icon={faEllipsis}
                                  className="cursor-pointer"
                                />
                              </MenuHandler>
                              <MenuList>
                                <MenuItem onClick={() => changeStatus(_id,"Resolved")}>
                                Resolved
                                </MenuItem>
                                <MenuItem
                                  onClick={() => changeStatus(_id,"Proceccing")}
                                >
                                   Proceccing
                                </MenuItem>
                                <MenuItem
                                  onClick={() => changeStatus(_id,"Not Resolved")}
                                >
                                  Not Resolved
                                </MenuItem>
                              </MenuList>
                            </Menu></td>
                    <td className={classes}><UpdateproofModal/></td>

                   

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



