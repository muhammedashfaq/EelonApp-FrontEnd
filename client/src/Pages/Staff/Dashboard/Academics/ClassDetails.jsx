import {
  Card,
  Typography,
  CardHeader,
  CardBody,
  Button,
  Dialog,
  Input,
  Select,
  Option,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Banner from "../../../../Components/Banner/Banner";
import Spinner from "../../../../Components/spinner/SpinningLoader";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import AddClassModal from "./AddClassModal";
import AddStudentModal from "./AddStudentModal";
import StudentListModal from "./StudentListModal";

const ClassDetails = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState();
  const [isLoading, setisLoading] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [ClassData, setClassData] = useState();
  const [AcademicYrs, setAcademicYrs] = useState();
  const [selectedAcademicYr, setselectedAcademicYr] = useState();

  const getAllClass = async () => {
    try {
      const response = await axiosPrivate.get("/classsection");
      setClassData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteClass = async (id) => {
    try {
      if (!id) return;

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        const response = await axiosPrivate.delete(`/classsection/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
      getAllClass();
    } catch (error) {
      console.error(error);
    }
  };

  const getAcademicYrdropdown = async () => {
    try {
      const response = await axiosPrivate.get(
        "classsection/academicyear/academicyear"
      );
      const sortedData = response.data?.academicYear.sort((a, b) =>
        a.localeCompare(b)
      );
      setAcademicYrs(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllClass();
    getAcademicYrdropdown();
  }, []);

  return (
    <div className="w-full">
      {isLoading && <Spinner />}
      <Banner />
      <div className=" m-20">
        <div className=" w-full h-auto  flex justify-around mb-2 border-2 p-1 rounded-lg shadow-md">
          <div className="w-full md:w-80 flex gap-1 ">
            <form>
              <Input
                label="Search class"
                onChange={(e) => setsearchQuery(e.target.value)}
                value={searchQuery}
                // icon={<MagnifyingGlassIco className="h-5 w-5" />}
              />
            </form>
            <IconButton variant="outlined">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </IconButton>
            <Button variant="text" style={{ textTransform: "none" }}>
              Reset
            </Button>
          </div>
          <div
            style={{
              display: "inline-block",
              position: "relative",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <select
              label="Select"
              value={selectedAcademicYr}
              onChange={(e) => setselectedAcademicYr(e.target.value)}
              style={{
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "8px",
                backgroundColor: "#fff",
                color: "#333",
                appearance: "none" /* hides default arrow */,
                width: "200px",
                cursor: "pointer",
              }}
            >
              {AcademicYrs &&
                AcademicYrs.map((data) => (
                  <option
                    key={data}
                    value={data}
                    style={{
                      backgroundColor: "#fff",
                      color: "#333",
                      padding: "10px",
                    }}
                  >
                    {data}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <AddClassModal AcademicYrs={AcademicYrs} />
          </div>
        </div>

        <div className="container xl">
          <Card className="h-96 w-full overflow-y-scroll">
            <table className="w-full min-w-max table-auto text-left ">
              <thead className=" ">
                <tr>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className=" text-blue-900 border-l  "
                    >
                      No.
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Class
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Section
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Student list
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Add students
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Action
                    </Typography>
                  </th>
                  {/* <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                      <Typography
                      variant="small"
                      color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        Issue date
                      </Typography>
                    </th> */}
                </tr>
              </thead>
              <tbody>
                {ClassData &&
                  ClassData.map((data, index) => {
                    const isLast = index === ClassData.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={data._id} className="even:bg-blue-gray-50/50">
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {index + 1}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data?.std}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data?.section}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            <StudentListModal
                              studentList={data?.students}
                              classId={data?.classId}
                            />
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {/* <div>
                              <IconButton
                                variant="text"
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  size="xl"
                                  className="cursor-pointer"
                                />
                              </IconButton>
                            </div> */}
                            <AddStudentModal
                              classObjId={data._id}
                              studentList={data?.students}
                            />
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            <div>
                              <IconButton
                                onClick={() => deleteClass(data?._id)}
                                variant="text"
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  size="xl"
                                  className="cursor-pointer"
                                />
                              </IconButton>
                            </div>
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
