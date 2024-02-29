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

  const deletAnnouncement = async (id) => {
    try {
      const response = await axiosPrivate.delete(
        `/classroom/announcement/${classroomId}`,
        { data: { deleteId: id } }
      );
      getAnnouncements();
      response.data.success
        ? toast.success(response.data.message)
        : toast.error(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
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
  }, [classroomId]);
  return (
    <div>
      <div>
        <ClassroomBanner classRoomData={classRoomData} />
      </div>
      <div className="grid grid-cols-2 gap-3 Laptop:grid-cols-2 ipad:grid-cols-1 mobile:grid-cols-1 Tablet:grid-cols-1  mt-4">
        <div className="  p-10 ">
          <AddannounceModal />

          <div className=" h-96 overflow-y-scroll ">
            <div className="   grid grid-cols-2 gap-3 p-4 Tablet:grid-cols-3 ipad:grid-cols-2 mobile:grid-cols-1 Laptop:grid-cols-2">
              {announcement &&
                announcement?.map((item, i) => (
                  <Popover key={i}>
                    <PopoverHandler>
                      <Card className=" bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl ">
                        <X
                          className="cursor-pointer hover:bg-blue-gray-100 rounded-md bg-red-300"
                          onClick={() => deletAnnouncement(item._id)}
                        />
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
          <Button
            variant="outlined"
            color="blue"
            className="flex items-center "
          >
            {/* <Plus size={32} strokeWidth={2} absoluteStrokeWidth mr-2/> */}
            Create Announcement
          </Button>

          <div className="h-96 overflow-y-scroll">
            <div className="   grid grid-cols-2 gap-3 p-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 ">
              <Popover>
                <PopoverHandler>
                  <Card className=" bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl ">
                    <X className="cursor-pointer hover:bg-blue-gray-100 rounded-md ml-1 mt-2 bg-red-300" />
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
