import {
  faChevronDown,
  faEdit,
  faMagnifyingGlass,
  faTrashCan,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Chip,

  Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import AddQpatternModal from "./AddQpatternModal";
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
  "Remove"
];
const Qpattern = () => {
  const { auth } = useAuth();
  const userid = auth?.userId;
  const [acYr, setAcYr] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [classes, setClasses] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const [qpatterndata, setQpatterndata] = useState([]);

  const deletefile =async(id)=>{
    try {
      const response = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      })
        if (response.isConfirmed) {
           await axiosPrivate.delete(`lessonplanning/qpattern/${id}`)
          getDetails()
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            }
          });
          Toast.fire({
            icon: "success",
            title: "Removed successfully"
          });
        }
     
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  }
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
      const data = {
        teacherId: userid,
      };
      const response = await axiosPrivate.put(
        "/lessonplanning/qpattern/filter",
        data
      );
      console.log(response, "res");
      setQpatterndata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDetails();
  }, [userid]);
  return (
    <div className="mx-5 my-5 ">
      <Card className="h-full w-full ">
      
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row p-2">
              <AddQpatternModal
                acYr={acYr}
                subjects={subjects}
                classes={classes}
                getDetails={getDetails}
              />
            </div>
       
        <CardBody className=" px-0">
          <div className="table-container overflow-y-auto max-h-96">
            <table className="w-full min-w-max text-left table-fixed">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
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
                {qpatterndata &&
                  qpatterndata.map((item, index) => (
                    <>
                      <tr key={index} className={item.status== "Rejected" ? "bg-red-200":""}>
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
                        <td className="p-4 border-b border-blue-gray-50">
                          .pdf
                        </td>
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
                          {item.remarks && (
                            <Tooltip
                              content={
                                <div className="w-auto">
                                  <Typography
                                    color="white"
                                    className="font-medium "
                                  >
                                    Remarks From Admin
                                  </Typography>
                                  <hr />
                                  <Typography
                                    variant="small"
                                    color="white"
                                    className="font-normal opacity-80"
                                  >
                                    {item.remarks}
                                  </Typography>
                                </div>
                              }
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                className="h-5 w-5 cursor-pointer text-blue-gray-500"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                />
                              </svg>
                            </Tooltip>
                          )}
                        </td>
                        <td className="p-4 border-b border-blue-gray-50">

<FontAwesomeIcon icon={faTrashCan} color="red" onClick={()=>deletefile(item._id)} className="cursor-pointer   hover:scale-150  transition-all duration-300 rounded-md"/>
</td>

                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Qpattern;
