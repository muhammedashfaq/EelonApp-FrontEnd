import React from "react";
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

const Strems = () => {
  return (
    <div>
      <div>
        <ClassroomBanner />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2  mt-4">
      <div className="  p-10 ">
          
          
          <AddannounceModal/>
        

        <div className=" h-96 overflow-y-scroll " >
              <div className="   grid grid-cols-2 gap-3 p-4  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-1">
            <Popover>
              <PopoverHandler>
                <Card className=" bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl ">
                  <X className="cursor-pointer hover:bg-blue-gray-100 rounded-md bg-red-300" />
                  <CardBody className="">
                    <div className="justify-between items-center bg-gray-200">
                        <div className="flex justify-center items-center">xbfkjb</div>
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
      <div className="  p-10 ">
        <Button variant="outlined" color="blue" className="flex items-center ">
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
