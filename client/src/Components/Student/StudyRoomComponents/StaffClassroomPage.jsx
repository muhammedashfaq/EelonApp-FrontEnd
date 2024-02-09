import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  
} from "@material-tailwind/react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ClassroomAnnoucementCard from "../DashboardComponents/ClassroomAnnoucementCard";
import ClassroomUpcomingEventsCard from "../DashboardComponents/ClassroomUpEvntCard";
import ClassroomBanner from "./ClassroomBanner";
import { useEffect, useState } from "react";
import Editor from "./Editor";
import AddPeople from "./AddPeople/AddPeople";
import ClassWorks from "./ClassWorks/ClassWorks";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import Strems from "./Strems";
import Grades from "./Grades";
import { faBullhorn, faL, faUserPen, faUsers } from "@fortawesome/free-solid-svg-icons";
import SpinningLoader from "../../spinner/SpinningLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StaffClassroomPage() {
  const [tabValue, settabValue] = useState("Stream");
  const [classRoomData, setclassRoomData] = useState();
  const [isLoading,setIsLoading] =useState(false)

  const { classroomId } = useParams();
  const axiosPrivate = useAxiosPrivate();
  // useEffect(() => {
  //   console.log(classroomId);
  // }, [classroomId]);

  const getClassRoom = async (req, res) => {
    try {
      if (!classroomId) return;
      setIsLoading(true)
      const response = await axiosPrivate.get(`classroom/${classroomId}`);
      setIsLoading(false)

      setclassRoomData(response.data);
    } catch (error) {
      setIsLoading(false)

      console.log(error);
    }
  };

  useEffect(() => {
    getClassRoom();
  }, [classroomId]);

  return (
    <>
    {
      isLoading&&(
        <SpinningLoader/>
      )
    }
      <div className="w-full">
        <div className="w-full ">
          <div className="">
            <Tabs value={tabValue}>
              <TabsHeader>
                <Tab value="Stream" onClick={() => settabValue("Stream")}>
                <FontAwesomeIcon icon={faBullhorn}/>Stream
                </Tab>
                <Tab value="Classwork" onClick={() => settabValue("Classwork")}>
                 <FontAwesomeIcon icon={faUserPen}/> Classwork
                </Tab>
                <Tab value="People" onClick={() => settabValue("People")}>
                <FontAwesomeIcon icon={faUsers}/> People
                </Tab>
                <Tab value="Grades" onClick={() => settabValue("Grades")}>
                  Grades
                </Tab>
                {/* <Tab value="People">People</Tab>
                <Tab value="Grades">Grades</Tab> */}
              </TabsHeader>
              {/* <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
            </TabPanel>
        ))}
      </TabsBody> */}
              <TabsBody
                animate={{
                  initial: { y: 250 },
                  mount: { y: 0 },
                  unmount: { y: 250 },
                }}
              >
                {tabValue === "Stream" ? (
                  <>             
                    <Strems classRoomData={classRoomData}/>
                  </>
                ) : tabValue === "Classwork" ? (
                  <>
                    <ClassWorks />
                  </>
                ) : tabValue === "People" ? (
                  <>
                    <AddPeople />
                  </>
                ) : tabValue === "Grades" ? (
                  <>
                  
                  <Grades/>
                  </>
                ) : (
                  ""
                )}
              </TabsBody>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
