import {
  Badge,
  Button,
  Card,
  CardBody,
  Chip,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Option,
  Select,
  Switch,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import UpdateInOutModal from "./UpdateInOutModal";
const TABLE_HEAD = [
  "#No",
  "Name",
  "Occupant Type",
  "ClassSection",
  "ID/Admission Number",
  "Status",
];
const InandOut = () => {
  const [roomNo, setRoomNo] = useState("");
  const onChange = ({ target }) => setRoomNo(target.value);
  const contentToPrint = useRef();

  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  const [isValidate, setIsValidate] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [roomdata, setRoomData] = useState("");
  const [roomMembersData, setRoomMembersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const  OpenModal = ()=> setShowUpdateModal((current)=>!current) 
  const [inOutUser,setInOutUser]=useState("")
  const [label,setLabel]=useState("")

  const fetchRoomData = async () => {
    try {
      const roomNumber = Number(roomNo) || "";

      const response = await axiosPrivate.put("hostel/room/filter", {
        roomNo: roomNumber,
      });
      console.log(response, "room");
      setRoomMembersData(response.data[0].occupantsArray);
      setRoomData(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateinout =(id,label)=>{
    setInOutUser(id)
    OpenModal()
    setLabel(label)
    }

  

  return (
    <div className="m-10">
      <div className=" bg-dark-purple py-2 px-2 rounded-t-md flex  items-center space-x-3">
        <span className="text-white font-normal">Room Details :-</span>

        <span className="text-white font-normal">
          Room No: {roomdata?.roomNo}
        </span>
      </div>

      <div className=" flex space-x-10 mt-4">
        <div className="relative flex w-full max-w-[24rem]">
          <Input
            label="Room Number"
            placeholder="101"
            value={roomNo}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            onClick={fetchRoomData}
            size="sm"
            color={roomNo ? "gray" : "blue-gray"}
            disabled={!roomNo}
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>
      </div>

      <nav className="block w-full max-w-full  text-white shadow-none rounded-xl transition-all px-5 pt-3 ">
        <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center ">
          <div className="capitalize"></div>
          <div className="flex items-center">
            <a
              onClick={() => {
                handlePrint(null, () => contentToPrint.current);
              }}
              className="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect width="12" height="8" x="6" y="14" />
              </svg>
              Print
            </a>
          </div>
        </div>
      </nav>

      <div
        ref={contentToPrint}
        className=" flex flex-col bg-blue-gray-100 shadow-md rounded-xl dark:bg-gray-800"
      >
        <Card className="h-96">
          <div className="bg-dark-purple py-2 px-2 rounded-t-md">
            <span className="text-white font-normal">Application Fee</span>
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
                {roomMembersData?.map(({_id, occupantName, occupantType }, i) => {
                  const classes = "px-3 py-2 border-b border-blue-gray-50";

                  return (
                    <tr key={i}>
                      <td className={classes}>{i + 1}</td>
                      <td className={classes}>{occupantName}</td>
                      <td className={classes}>{occupantType}</td>
                      <td className={classes}>classsection</td>
                      <td className={classes}>id/admissionid</td>
                      <td className={classes}>
                        <div className=" flex justify-center items-center space-x-3">
                         <span className="cursor-pointer" onClick={()=>handleUpdateinout(_id ,"IN")}><Chip color="cyan" value="update" /></span>
                         <span className="cursor-pointer" onClick={()=>handleUpdateinout(_id,"OUT")}><Chip color="cyan" value="update" /></span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>

        {
  showUpdateModal && <UpdateInOutModal inOutUser={inOutUser} closeModal={OpenModal} setShowUpdateModal={setShowUpdateModal} labels={label} />
}

      </div>
    </div>
  );
};

export default InandOut;
