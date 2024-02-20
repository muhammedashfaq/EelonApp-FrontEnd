
import { faChevronDown, faEdit, faMagnifyingGlass, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    IconButton,
    Tooltip,
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import AddQpaperModal from "./AddQpaperModal";
   
  const TABS = [
    {
      label: "All",
      value: "all",
    },
    {
      label: "Monitored",
      value: "monitored",
    },
    {
      label: "Unmonitored",
      value: "unmonitored",
    },
  ];
   
  const TABLE_HEAD = ["#NO" ,"Subject", "Term","Document", "Status",  " Remarks"];
   
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

const QPaper = () => {
    const [acYr,setAcYr]=useState([])
    const [subjects,setSubjects]=useState([])
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

            const response2 =await axiosPrivate.get("classsection/subjects/dropdowns")
            setSubjects(response2.data.subjects)
            if(response2){
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

    <Card className="h-full w-full ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
        
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <AddQpaperModal acYr={acYr} classes={classes} subjects={subjects}/>
          </div>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className=" px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                        <FontAwesomeIcon icon={faChevronDown} strokeWidth={2} className="h-4 w-4" />
                        )}
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
                      {index+1}
                      </td> <td className={classes}>
                      English
                      </td>
                    <td className={classes}>
                     1st Mid Term
                    </td>
                    <td className={classes}>
                     .pdf
                    </td>
                    <td className={classes}>
                    <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={online ? "Approved" : "Rejected"}
                          color={online ? "green" : "blue-gray"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      Approved by Admin
                    </td>
                  </tr>
                );
            },
            )}
          </tbody>
        </table>
      </CardBody>
  
    </Card>
            </div>  )
}

export default QPaper