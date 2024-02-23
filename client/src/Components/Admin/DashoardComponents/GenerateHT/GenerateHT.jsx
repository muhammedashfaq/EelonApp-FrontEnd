import { faEdit, faTrashCan } from "@fortawesome/free-solid-svg-icons";
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
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../../Routes/RoutObjects";

const TABLE_HEAD = ["#NO", "Class", "Term Name", "view" ,"Action"];

const GenerateHT = () => {
  const [acYr, setAcYr] = useState([]);
  const [classes, setClasses] = useState([]);
  const [htData, setHTdata] = useState([]);

  const axiosPrivate = useAxiosPrivate();


  const deleteItem= async (id)=>{
    try {

     const result= await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
        if (result.isConfirmed) {
          const response = await axiosPrivate.delete(`marks/halltickets/${id}`)
          if(response.data){

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            getGeneratedHT()
          }else{
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            });
          }
          
        }
        
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
    
  }
  const getGeneratedHT = async () => {
    try {
      const response = await axiosPrivate.get("marks/halltickets");
      setHTdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGeneratedHT();
  });

  const getAcYrndubjects = async () => {
    try {
      const response = await axiosPrivate.get(
        "classsection/academicyear/academicyear"
      );
      if (response) {
        const sortedData = response.data?.academicYear.sort((a, b) =>
          a.localeCompare(b)
        );
        setAcYr(sortedData);

        if (response) {
          const response3 = await axiosPrivate.get("classsection/dropdowns");
          const sortedData2 = response3.data?.sort((a, b) =>
            a.localeCompare(b)
          );
          setClasses(sortedData2);
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
  };
  useEffect(() => {
    getAcYrndubjects();
  }, []);
  return (
    <div className="m-10">
      <Card className="h-full w-full">


        <div  className="flex items-center bg-dark-purple rounded-md" >
    <span className="mr-auto">

      <GenerateModal acYr={acYr} classes={classes}  />
    </span>
       <span className="mr-auto">

        <h1 className="font-normal font-semibold text-white text-2xl uppercase">Class Section Details of HallTicket</h1>
       </span>
        </div>
        <CardBody className=" h-96 overflow-y-auto px-0">
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
              {htData.length === 0 ? (
                <tr className="flex justify-center items-center">
                  No Data Availiable
                </tr>
              ):(
                <>

                {htData &&
                  htData.map((item, index) => {
                  const classes = "p-2 border-b border-blue-gray-50 ";

                  return (
                    <tr key={index}>
                      <td className={classes}>{index + 1}</td>
                      <td className={classes}>{item.classSection}</td>
                      <td className={classes}>{item.term}</td>

                      <td className={classes}>
                        <div className="w-max">

                        <Link to={`${RouteObjects.HTClasswise}/${item.classSection}/${item.term}/${item.academicYear}`}  >
                        <Chip className="cursor-pointer" size="sm" color="green" value="Generate" />
                        </Link>
                        
                        </div>
                      </td>
                      <td className={classes}>
                            <IconButton variant="text" onClick={()=>deleteItem(item._id)}>
                                <FontAwesomeIcon icon={faTrashCan} color="red" size="xl"/>
                            </IconButton>

                        </td>
                    </tr>
                  );
                })}

                </>
                )}
                
            </tbody>
          </table>
        </CardBody>
      </Card>

    </div>
  );
};

export default GenerateHT;
