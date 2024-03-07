import {
  Button,
  IconButton,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import axios from "../../../api/axios";
import { useEffect, useState } from "react";
import IssueLibCardModal from "./IssueLibCardModal";
import StaffStudentLibrarycardModal from "./StaffStudentLibrarycardModal";
import Banner from "../../Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const StaffLibraryCardPage = () => {
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState();
  const [studentData, setstudentData] = useState();

  const getStudents = async (e) => {
    e.preventDefault();
    try {
      if (!searchQuery) return;
      const response = await axios.get(`users/student/search/${searchQuery}`);
      console.log(response);
      setsearchData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getAllStudents = async () => {
    try {
      const response = await axios.get(`users/student`);
      setstudentData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const unIssueCard = async (studentId) => {
    try {
      if (!studentId) return;
      Swal.fire({
        title: "Revoke library card?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm",
      }).then((result) => {
        if (result.isConfirmed) {
          axios.put(`users/student/issuelibrarycard/${studentId}`, {
            libCardNo: null,
            libCardStatus: false,
          });
          Swal.fire({
            title: "Success!",
            text: "Library card has been revoked",
            icon: "success",
          });
        }
      });

      // const response = await axios.put(
      //   `users/student/issuelibrarycard/${studentId}`,
      //   { libCardNo: null, libCardStatus: false }
      // );
      // console.log(response, "reres");
      getStudents();
      handleClose();
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, [studentData, searchData]);

  return (
    <>
      <div className="  m-10 ">
        <div>
          <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
            <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
              <div className="flex flex-col justify-evenly gap-8 mb-4 md:flex-row md:items-center">
                <div>
                  <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Search student
                  </h5>
                  <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
                    Search student by email, library id...etc
                  </p>
                </div>
                <div className="flex w-full gap-1 shrink-0 md:w-max">
                  <div className="w-full md:w-72">
                    <div className="relative h-10 w-full min-w-[200px]">
                      <div className="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500"></div>
                      <form
                        style={{ padding: 0, margin: 0 }}
                        onSubmit={getStudents}
                      >
                        <input
                          className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                          placeholder=" "
                          onChange={(e) => setsearchQuery(e.target.value)}
                        />
                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                          Search
                        </label>
                      </form>
                    </div>
                  </div>
                  <IconButton variant="outlined" onClick={getStudents}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      ></path>
                    </svg>
                  </IconButton>
                  <Button
                    variant="text"
                    style={{ textTransform: "none" }}
                    onClick={() => {
                      setsearchData();
                    }}
                  >
                    Reset
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-6 px-0 ">
              <table className="w-full text-left table-auto min-w-max">
                <thead>
                  <tr>
                    <th className="p-2 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        #NO
                      </p>
                    </th>
                    <th className="p-2 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Student id
                      </p>
                    </th>
                    <th className="p-2 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Student name
                      </p>
                    </th>
                    <th className="p-2 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Card status
                      </p>
                    </th>
                    <th className="p-2 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Card No.
                      </p>
                    </th>
                    <th className="p-2 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        className
                      </p>
                    </th>
                    <th className="p-2 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Section
                      </p>
                    </th>
                    <th className="p-2 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Libary card
                      </p>
                    </th>
                    <th className="p-2 border-y border-blue-gray-100 bg-blue-gray-50/50">
                      <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                        Actions
                      </p>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {searchData
                    ? searchData.map((data, i) => (
                        <>
                          <tr>
                            <td className="p-4 border-b border-blue-gray-50">
                              <Typography
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {i + 1}
                              </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.email}
                              </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.name}
                              </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.libCardStatus === true
                                  ? "Issued"
                                  : "Not issued"}
                              </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.libCardNo}
                              </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.className}
                              </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.section}
                              </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.libCardStatus ? (
                                  <StaffStudentLibrarycardModal
                                    studentData={data}
                                  />
                                ) : (
                                  <span>Card not issued</span>
                                )}
                              </Typography>
                            </td>
                            <td className="p-4 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                <IssueLibCardModal
                                  libCardNo={data?.libCardNo}
                                  libCardStatus={data?.libCardStatus}
                                  getStudents={getStudents}
                                  studentId={data?._id}
                                />
                              </Typography>
                            </td>
                          </tr>
                        </>
                      ))
                    : studentData &&
                      studentData.map((data, i) => (
                        <>
                          <tr>
                            <td className="p-2 border-b border-blue-gray-50">
                              <Typography
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {i + 1}
                              </Typography>
                            </td>
                            <td className="p-1 border-b border-blue-gray-50">
                              <Typography
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.email}
                              </Typography>
                            </td>
                            <td className="p-1 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName="  text-blue-900 border-l  "
                              >
                                {data?.studentName}
                              </Typography>
                            </td>
                            <td className="p-1 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.libCardStatus === true
                                  ? "Issued"
                                  : "Not issued"}
                              </Typography>
                            </td>
                            <td className="p-1 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.libCardNo}
                              </Typography>
                            </td>
                            <td className="p-1 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.className}
                              </Typography>
                            </td>
                            <td className="p-1 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.section}
                              </Typography>
                            </td>
                            <td className="p-1 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.libCardStatus ? (
                                  <StaffStudentLibrarycardModal
                                    studentData={data}
                                  />
                                ) : (
                                  <span>Card not issued</span>
                                )}
                              </Typography>
                            </td>
                            <td className="p-1 border-b border-blue-gray-50">
                              <Typography
                                variant="h8"
                                color="blue-gray"
                                classNameName=" text-blue-900 border-l  "
                              >
                                {data?.libCardStatus ? (
                                  <Tooltip
                                    content="Re-call Library Card"
                                    animate={{
                                      mount: { scale: 1, y: 0 },
                                      unmount: { scale: 0, y: 25 },
                                    }}
                                  >
                                    <FontAwesomeIcon
                                      className="cursor-pointer"
                                      icon={faMinusSquare}
                                      size="xl"
                                      color="red"
                                      onClick={() =>
                                        unIssueCard(
                                          data?._id,
                                          data?.studentName
                                        )
                                      }
                                    />
                                  </Tooltip>
                                ) : (
                                  <IssueLibCardModal
                                    libCardNo={data?.libCardNo}
                                    libCardStatus={data?.libCardStatus}
                                    getStudents={getStudents}
                                    studentId={data?._id}
                                  />
                                )}
                              </Typography>
                            </td>
                          </tr>
                        </>
                      ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaffLibraryCardPage;
