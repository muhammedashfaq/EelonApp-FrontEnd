import {
  Card,
  CardHeader,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../Routes/RoutObjects";
import AddClassRoomModal from "./AddClassRoomModal";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const HomeClassRoom = () => {
  const [classRooms, setClassrooms] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const getClassRooms = async () => {
    try {
      const response = await axiosPrivate.get("/classroom");
      setClassrooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClassRooms();
  }, []);
  return (
    <div>
      <div className=" grid grid-cols-4 gap-4 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card
          color="gray"
          variant="gradient"
          className="w-full max-w-[20rem] p-8"
        >
          <CardHeader
            variant="gradient"
            color="gray"
            className="mb-4 grid h-28 place-items-center"
          >
            <Button
              size="lg"
              color="white"
              className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
              ripple={false}
              fullWidth={true}
            >
              <AddClassRoomModal />
            </Button>
          </CardHeader>
        </Card>
        {classRooms.map((classroom) => (
          <div key={classroom.id} className="col-span-1">
            <Link to={RouteObjects.StudyRoomHome2}>

            <Card
              color="gray"
              variant="gradient"
              className="w-full max-w-[20rem] p-8 hover:shadow-2xl hover:scale-90 duration-200 transition-all hover:cursor-pointer"
              >
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 mb-8 rounded-none border-b border-white/20 pb-8 text-center"
                >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal uppercase hover:underline"
                >
                  Class Name
                </Typography>
                <Typography
                  variant="h1"
                  color="white"
                  className="mt-6 flex justify-center gap-1 text-1xl font-normal hover:underline hover:scale-150 duration-300"
                  >
                  {classroom.className} {classroom.section}
                </Typography>
              </CardHeader>
            </Card>
        </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeClassRoom;
