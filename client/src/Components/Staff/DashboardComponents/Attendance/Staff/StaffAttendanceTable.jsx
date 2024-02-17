import { Button, Card, Typography } from "@material-tailwind/react";
import StaffRow from "./StaffRow";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { RouteObjects } from "../../../../../Routes/RoutObjects";
 
const TABLE_HEAD = ["#NO","Name", "Attendance", "Remarks","Aprove", ""];
 
const StaffAttendanceTable = () => {
 const navigate=useNavigate()
  const [staffData,setStaffData]=useState([])
  const [attendanceArray, setAttendanceArray] = useState([]);

  const axiosPrivate =useAxiosPrivate()
  const { id } = useParams();
  const { date } = useParams();



  const addAttendanceToCollection = async () => {
    try {
      const response = await axiosPrivate.post(
        `attendance/staff/addattendance/${id}`,
        attendanceArray
      );
      Swal.fire({
        title: "Attendance added!",
        text: `Attendance on ${date} is added`,
        icon: "success",
      });
      navigate(RouteObjects.StaffAttandance)
    } catch (error) {
      console.log(error);
    }
  };




  const createAttendanceArray = (value) => {
    const index = value.index;
    const existingIndex = attendanceArray.findIndex(
      (item) => item.index === index
    );

    if (existingIndex !== -1) {
      const newArray = [...attendanceArray];
      newArray[existingIndex] = value;
      setAttendanceArray(newArray);
    } else {
      setAttendanceArray([...attendanceArray, value]);
    }
  };
  const getstaffData =async()=>{
    try {
      const response= await axiosPrivate.get("users/staff")
      setStaffData(response.data)
      console.log(response,"res");
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?error.response:"Something went wrong!",
      });
    }
  }
  useEffect(()=>{
 getstaffData()
  },[])
    return (
      <>
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
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
              {staffData&&staffData.map((data,index)=>(

                 <StaffRow key={data?._id}
                 StaffName={data?.name}
                 index={index}
                 StaffId={data._id}
                 createAttendanceArray={createAttendanceArray}/> 
              ))}
            </tbody>
          </table>
        </Card>
         <div style={{ textAlign: "center" }} className="p-5">
         <Button onClick={addAttendanceToCollection}>Save</Button>
       </div>
                 </>
      );
    }
export default StaffAttendanceTable