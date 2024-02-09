import React, { useEffect, useState } from "react";
import ClassroomBanner from "./ClassroomBanner";
import {
  Button,
  Card,
  CardBody,
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from "@material-tailwind/react";
import { Plus, X } from "lucide-react";
import AddannounceModal from "./AddannounceModal";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import toast from "react-hot-toast";

const Strems = ({ classRoomData }) => {
  const [announcement, setAnnouncement] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const { classroomId } = useParams();


  const getAnnouncements = async () => {
    try {
      const response = await axiosPrivate.get(
        `/classroom/announcement/${classroomId}`
      );
      setAnnouncement(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAnnouncements();
  }, [classroomId, announcement]);
  return (
    <div>
      <div>
        <ClassroomBanner classRoomData={classRoomData} />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2  mt-4">
        <div className="  p-10 ">
        announcement
          <div className=" h-96 overflow-y-scroll ">
            <div className="   grid grid-cols-2 gap-3 p-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
              {announcement &&
                announcement?.map((item, i) => (
                  <Popover key={i}>
                    <PopoverHandler>
                      <Card className=" bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl ">
                      
                        <CardBody className="">
                          <div className="justify-between items-center bg-gray-200">
                            <div className="flex justify-center items-center">
                              {item?.topic}
                            </div>
                            <Typography className="text-gray-700 overflow-hidden h-11">
                              {item?.content}
                            </Typography>
                          </div>
                        </CardBody>
                      </Card>
                    </PopoverHandler>
                    <PopoverContent>
                      <Typography>{item?.content}</Typography>
                    </PopoverContent>
                  </Popover>
                ))}
            </div>
          </div>
        </div>

        <div className="  p-10 ">
        Events
          <div className="h-96 overflow-y-scroll">
            <div className="   grid grid-cols-2 gap-3 p-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 ">
              <Popover>
                <PopoverHandler>
                  <Card className=" bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl ">
                    <CardBody className="">
                      <div className="flex justify-between items-center bg-gray-200 p-6">
                        <Typography className="text-gray-700 overflow-hidden h-11">
                          The place is close to Barceloneta Beach and bus stop
                          just 2 min by walk and near to &quot;Naviglio&quot;
                          where you can enjoy the main night life in Barcelona.
                        </Typography>
                      </div>
                    </CardBody>
                  </Card>
                </PopoverHandler>
                <PopoverContent>
                  <Typography>
                    The place is close to Barceloneta Beach and bus stop just 2
                    min by walk and near to &quot;Naviglio&quot; where you can
                    enjoy the main night life in Barcelona.
                  </Typography>
                </PopoverContent>
              </Popover>
            </div>
            {/* <ClassroomAnnoucementCard /> */}
            {/* <ClassroomUpcomingEventsCard /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Strems;
