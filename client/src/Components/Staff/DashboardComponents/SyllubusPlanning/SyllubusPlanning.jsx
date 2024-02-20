import {
  faChevronDown,
  faEdit,
  faMagnifyingGlass,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Chip,
} from "@material-tailwind/react";
import AddSyllubusModal from "./AddSyllubusModal";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
const TABLE_HEAD = [
  "#NO",
  "Ac-Year",
  "Subject",
  "Term",
  "Document",
  "calss",
  "Status",
  " Remarks",
];
const SyllubusPlanning = () => {
  const [syllabusdata, setSyllabusdata] = useState([]);
  const [acYr, setAcYr] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);
  const { auth } = useAuth();

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

  const getDetails = async () => {
    try {
      const response = await axiosPrivate.put(
        "/lessonplanning/syllabus/filter",
        { teacherId: auth?.userId }
      );
      setSyllabusdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, [ auth.userId]);
  return (
    <div className="m-10">
      <Card className="h-full w-full ">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-8 flex items-center justify-between gap-8">
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <AddSyllubusModal
                acYr={acYr}
                subjects={subjects}
                classes={classes}
                getDetails={getDetails}
              />
            </div>
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="h-5 w-5"
                  />
                }
              />
            </div>
          </div>
        </CardHeader>
        <CardBody className=" px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {syllabusdata &&
                syllabusdata.map((item, index) => (
                  <>
                    <tr key={index}>
                      <td className="p-4 border-b border-blue-gray-50">
                        {index + 1}
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        {item?.year}
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        {item?.subject}
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        {item?.termName}
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">.pdf</td>
                      <td className="p-4 border-b border-blue-gray-50">
                        {item?.std}
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        <div className="w-max">
                          {/* Assuming 'online' is a property in your data */}
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={item.status}
                            color={
                              item.status === "Rejected"
                                ? "red"
                                : item.status === "Approved"
                                ? "green"
                                : item.status === "Pending"
                                ? "blue-gray"
                                : ""
                            }
                          />
                        </div>
                      </td>
                      <td className="p-4 border-b border-blue-gray-50">
                        Approved by Admin
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};
export default SyllubusPlanning;
