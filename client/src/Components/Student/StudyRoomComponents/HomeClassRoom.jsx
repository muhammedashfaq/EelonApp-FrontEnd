import { Card, CardHeader, Typography, Button } from "@material-tailwind/react";
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
        `classroom/getstudentclassrooms/${userId}`
      );
      setClassrooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClassRooms();
  }, []);
  useEffect(() => {
    getClassRooms();
  }, [userId,classRooms]);

  return (
    <>
    <div>
      <div className=" grid grid-cols-4 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      
     
        {classRooms.map((classroom) => (
          <div key={classroom._id} className="col-span-1">
            <Link to={`${RouteObjects.StudyRoom}/${classroom._id}`}>
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
