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
import { faBullhorn, faL, faUserPen, faUsers } from "@fortawesome/free-solid-svg-icons";
import SpinningLoader from "../../spinner/SpinningLoader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GradeBook from "./GradeBook/GradeBook";
import Syllabus from "./SyllabusPlanningStudyRoom/Syllabus";

export default function StaffClassroomPage() {
  const [tabValue, settabValue] = useState("Stream");
  const [classRoomData, setclassRoomData] = useState();
  const [isLoading,setIsLoading] =useState(false)

  const { classroomId } = useParams();
  const axiosPrivate = useAxiosPrivate();
  console.log(classRoomData)
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
            <Tabs value={tabValue}>
              <TabsHeader>
                <Tab value="Stream" onClick={() => settabValue("Stream")}>
                <FontAwesomeIcon icon={faBullhorn}/>Stream
                </Tab>
                <Tab value="Classwork" onClick={() => settabValue("Classwork")}>
                 <FontAwesomeIcon icon={faUserPen}/> Classwork
                </Tab>
                <Tab value="Syllabus" onClick={() => settabValue("Syllabus")}>
                <FontAwesomeIcon icon={faUsers}/> Syllabus
                </Tab>
                <Tab value="GradeBooks" onClick={() => settabValue("GradeBooks")}>
                <FontAwesomeIcon icon={faUsers}/> GradeBooks
                </Tab>
                <Tab value="People" onClick={() => settabValue("People")}>
                <FontAwesomeIcon icon={faUsers}/> People
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
                ) :tabValue === "Syllabus" ? (
                  <>
                    <Syllabus classRoomData={classRoomData}/>
                  </>
                ) : tabValue === "GradeBooks" ? (
                  <>
                    <GradeBook />
                  </>
                ) : tabValue === "People" ? (
                  <>
                    <AddPeople />
                  </>
                ) : (
                  ""
                )}
              </TabsBody>
            </Tabs>
    </>
  );
}
