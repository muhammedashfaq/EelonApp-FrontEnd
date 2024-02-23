import { faBook, faEdit } from "@fortawesome/free-solid-svg-icons";
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
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { RouteObjects } from "../../../../Routes/RoutObjects";
import HallTicket from "./HallTicket";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
 

 
const TABLE_HEAD = ["#NO", "Name", "RollNo", "Email", "HT"];
 

 


const HTClasswise = () => {
    const axiosPrivate =useAxiosPrivate()
    const {id,term,year}=useParams()
    const [fetchedData,setFetchedData]=useState([])
    const getClasswiseStudents =async()=>{
        try {
               
            const response = await axiosPrivate.put("users/student/filter",{classId:id} )

            console.log(response,"res")
            setFetchedData(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getClasswiseStudents()
    },[])
    return (
        <Card className="h-full w-full">
    
          <CardBody className="overflow-scroll px-0">
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
                {fetchedData&&fetchedData.map(
                  (item, index) => {
                    const classes ="p-4 border-b border-blue-gray-50";
     
                    return (
                      <tr key={item}>
                        <td className={classes}>
                          {index+1}
                        </td>
                        <td className={classes}>
                          {item?.studentName}
                        </td>
                
                        <td className={classes}>
                        {item?.rollNo}
                        </td>
                
                        <td className={classes}>
                        {item?.email}
                        </td>
                
                      
                
                        
                        <td className={classes}>
                    
                          <Tooltip content="View">
                            <IconButton variant="text">
                              <HallTicket data={item} term={term} year={year}/>
                            </IconButton>
                          </Tooltip>
                          
                        </td>
                       
                      </tr>
                    );
                  },
                )}
              </tbody>
            </table>
          </CardBody>
    
        </Card>
      );
    }

export default HTClasswise