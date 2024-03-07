import { Card, CardHeader, Typography, Button, CardBody } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../Routes/RoutObjects";
import AddClassRoomModal from "./AddClassRoomModal";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import useAuth from "../../../Hooks/useAuth";
import ClassRoomCard from "./ClassRoomCard";

const HomeClassRoom = () => {
  const [classRooms, setClassrooms] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const [userId, setUserId] = useState();
  const { auth } = useAuth();

  useEffect(() => {
    setUserId(auth?.userId);
  }, [auth?.userId]);

  const getClassRooms = async () => {
    try {
      const response = await axiosPrivate.get(
        `classroom/getstaffclassrooms/${userId}`
      );
      console.log(response,"rrrrrrrrrrr");
      setClassrooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClassRooms();
  }, []);

  return (
    <>
    <div>
      <div className=" grid grid-cols-4 gap-4  mobile:grid-cols-1 Tablet:grid-cols-3 Laptop:grid-cols-4 ipad:grid-cols-3">
      
        
              <AddClassRoomModal userId={userId} getClassRooms={getClassRooms} />
            
        {classRooms.map((classroom) => (
          <div key={classroom._id} className="col-span-1">
            <Link to={`${RouteObjects.StudyRoomHome2}/${classroom._id}`}>
              <ClassRoomCard classroom={classroom} />
            </Link>
          </div>
        ))}
      </div>
    </div>
            </>
  );
};

export default HomeClassRoom;
