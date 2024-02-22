import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import GenerateModal from "./GenerateModal";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import HallTicket from "./HallTicket";

const TABLE_HEAD = ["Member", "Function", "Status", "Employed", ""];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
];

const GenerateHT = () => {
    const [acYr,setAcYr]=useState([])
    const[classes,setClasses]=useState([])

    const axiosPrivate=useAxiosPrivate()
  
  const getAcYrndubjects =async()=>{
    try {
        
        const response= await axiosPrivate.get("classsection/academicyear/academicyear")
        if(response){
            const sortedData = response.data?.academicYear.sort((a, b) =>
            a.localeCompare(b)
          );
            setAcYr(sortedData)

            if(response){
                const response3 =await axiosPrivate.get("classsection/dropdowns/std")
                const sortedData2 = response3.data?.sort((a, b) =>
                a.localeCompare(b))
                setClasses(sortedData2)
            }
        }


    } catch (error) {
        console.log(error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
    }
  }
    useEffect(()=>{
getAcYrndubjects()

  },[])
  return (

    <div className="m-10">
        <GenerateModal acYr={acYr} classes={classes}/>
    <Card className="h-full w-full">
      <CardBody className=" px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
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
            {TABLE_ROWS.map(
              ({ img, name, email, job, org, online, date }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                  
                  return (
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={name} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                            >
                            {name}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                            >
                            {email}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                          >
                          {job}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                          >
                          {org}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "online" : "offline"}
                          color={online ? "green" : "blue-gray"}
                          />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <FontAwesomeIcon icon={faEdit} className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>

    <HallTicket/>
                </div>
  );
};

export default GenerateHT;
