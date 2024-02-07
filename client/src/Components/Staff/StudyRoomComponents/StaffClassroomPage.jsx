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
import Strems from "./Strems";

export default function StaffClassroomPage() {
  const [tabValue, settabValue] = useState("Stream");

  return (
    <>
      <div className="w-full">
        <div className="w-full p-5">
          <div className="m-5">
            <Tabs value={tabValue}>
              <TabsHeader>
                <Tab value="Stream" onClick={() => settabValue("Stream")}>
                  Stream
                </Tab>
                <Tab value="Classwork" onClick={() => settabValue("Classwork")}>
                  Classwork
                </Tab>
                <Tab value="People" onClick={() => settabValue("People")}>
                  People
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
                    <Strems/>
                  </>
                ) : tabValue === "Classwork" ? (
                  <>
                  <ClassWorks/>
                  </>
                ) : tabValue === "People" ? (
                  <>
                  <AddPeople/>
                  </>
                ) : tabValue === "Grades" ? (
                  <></>
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
