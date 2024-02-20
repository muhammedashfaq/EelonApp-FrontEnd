import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import AprovalTable from "./AprovalTable";
import AprovalFilter from "./AprovalFilter";

const AprovalPage = () => {
  const [activeTab, setActiveTab] = React.useState("1");
  const data = [
    {
      label: "Syllubus ",
      value: "1",
    },
    {
      label: "Question Pattern",
      value: "2",
    },
    {
      label: "Question Bank",
      value: "3",
    },
    {
      label: "Question Papper",
      value: "4",
    },
  ];

  const [acYr, setAcYr] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);

  const axiosPrivate = useAxiosPrivate();

  const getAcYrndubjects = async () => {
    try {
      const response = await axiosPrivate.get(
        "classsection/academicyear/academicyear"
      );
      if (response) {
        const sortedData = response.data?.academicYear.sort((a, b) =>
          a.localeCompare(b)
        );
        setAcYr(sortedData);

        const response2 = await axiosPrivate.get(
          "classsection/subjects/dropdowns"
        );
        setSubjects(response2.data.subjects);
        if (response2) {
          const response3 = await axiosPrivate.get(
            "classsection/dropdowns/std"
          );
          const sortedData2 = response3.data?.sort((a, b) =>
            a.localeCompare(b)
          );
          setClasses(sortedData2);
        }
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  useEffect(() => {
    getAcYrndubjects();
  }, []);
  return (
    <div className="m-10 space-y-10">
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900" : ""}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {value === "1" ? (
                <>
                  <div className="border-1 h-screen">
                    <div className="flex justify-center p-3 ">
                      <h1 className="text-2xl font-extrabold underline">
                        Class Syllabus Aproval
                      </h1>
                    </div>
                    <AprovalFilter 
                      acYr={acYr}
                      classes={classes}
                      subjects={subjects}
                    />
                    <AprovalTable />
                  </div>
                </>
              ) : value === "2" ? (
                <>
                  <div className="border-2 h-screen">
                    <div className="flex justify-center p-3 ">
                      <h1 className="text-2xl font-extrabold underline">
                        Qustion Pattern Aproval
                      </h1>
                    </div>

                    <AprovalFilter
                      acYr={acYr}
                      classes={classes}
                      subjects={subjects}
                    />
                    <AprovalTable />
                  </div>
                </>
              ) : value === "3" ? (
                <>
                  <div className="border-2 h-screen">
                    <div className="flex justify-center p-3 ">
                      <h1 className="text-2xl font-extrabold underline">
                        Qustion Bank Aproval
                      </h1>
                    </div>
                    <AprovalFilter
                      acYr={acYr}
                      classes={classes}
                      subjects={subjects}
                    />
                    <AprovalTable />
                  </div>
                </>
              ) : value === "4" ? (
                <>
                  <div className="border-2 h-screen" >
                    <div className="flex justify-center p-3 ">
                      <h1 className="text-2xl font-extrabold underline">
                        Qustion Papper Aproval
                      </h1>
                    </div>
                    <AprovalFilter
                      acYr={acYr}
                      classes={classes}
                      subjects={subjects}
                    />
                    <AprovalTable />
                  </div>
                </>
              ) : (
                ""
              )}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
};

export default AprovalPage;
