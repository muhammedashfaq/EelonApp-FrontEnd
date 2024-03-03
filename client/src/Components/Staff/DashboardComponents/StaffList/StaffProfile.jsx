import {
  faAdd,
  faBook,
  faEdit,
  faGraduationCap,
  faPlusCircle,
  faTrash,
  faTrashCan,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Chip, IconButton, Tooltip } from "@material-tailwind/react";
import notFoundImg from "../../../../assets/placeholderImg.jpg";

import React, { useState } from "react";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import AddStaffExperianceDocuModal from "./AddStaffExperianceDocuModal";
import AddStaffEducationalModal from "./AddStaffEducationalModal";
import StaffUploadImgModal from "./StaffUploadImgModal";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import SpinningLoader from "../../../spinner/SpinningLoader";
import useAuth from "../../../../Hooks/useAuth";
import StaffStatus from "./StaffStatus";

const StaffProfile = ({ userData, getData }) => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [image, setImage] = useState();
  const [isLoading, setisLoading] = useState(false);

  const changeStatus =async(status)=>{
    try {
      console.log(status)
      // const response = await axiosPrivate.post("",status)
    } catch (error) {
      console.log(error);
    }
  }
  const deteteJobRole = async (public_id, arrId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        setisLoading(true);
        await axiosPrivate.delete(
          `certificates/staff/experience/${userData._id}`,
          { data: { public_id: public_id, arrId: arrId } }
        );
        setisLoading(false);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
      getData();
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };
  const deteteEducation = async (public_id, arrId) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        setisLoading(true);
        await axiosPrivate.delete(
          `certificates/staff/education/${userData._id}`,
          { data: { public_id: public_id, arrId: arrId } }
        );
        setisLoading(false);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
      getData();
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };
  return (
    <div class="container mx-auto my-5 p-5">
      {isLoading && <SpinningLoader />}
      <div class="md:flex no-wrap md:-mx-2 ">
        <div class="w-full md:w-3/12 md:mx-2">
          <div className="image overflow-hidden">
            <img
              className="h-auto w-full mx-auto"
              src={userData?.profilePic?.url || image || notFoundImg}
              alt=""
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="m-3">
            <StaffUploadImgModal userId={userData?._id} getData={getData} />
          </div>
          {/* <div className=" flex mobile:flex-wrap Tablet:flex-wrap ipad:flex-wrap gap-2 justify-end my-1 items-center">
            <Button color="teal">
              <label
                htmlFor="imageUploadfather"
                className=" cursor-pointer text-white"
              >
                <FontAwesomeIcon icon={faEdit} size="1x" />
              </label>
              <input
                type="file"
                id="imageUploadfather"
                name="profileimage"
                className="hidden"
              />
            </Button>

            <Button color="lime">
              <FontAwesomeIcon
                icon={faUpload}
                size="1x"
              />
            </Button>
            <Button
              color="red"
              className=""
              disabled={userData?.studentProfilePic ? false : true}
            >
              <FontAwesomeIcon icon={faTrash} size="1x" />
            </Button>
          </div> */}
          <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
            {userData?.name}
          </h1>
          <h3 className="text-gray-600 font-lg text-semibold leading-6">
            {userData?.jobRole}
          </h3>

          <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
            <li className="flex items-center py-3">
              <span>Status</span>
              <span className="ml-auto">
                {auth?.roles == 2000 ? (
                  <StaffStatus changeStatus={changeStatus} />
                ) : ( 
                  <span>
                    <Chip
                      value="Active"
                      className="bg-green-500 py-1 px-2 rounded text-white text-sm"
                    />
                  </span>
                )}
              </span>
            </li>
            <li className="flex items-center py-3">
              <span>since</span>
              <span className="ml-auto">{userData?.DOJ}</span>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-9/12 mx-2 h-64">
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
              <FontAwesomeIcon icon={faUser} />
              <span className="tracking-wide">About</span>
            </div>
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Full Name</div>
                  <div className="px-4 py-2">{userData?.name}</div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Gender</div>
                  <div className="px-4 py-2">{userData?.gender}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Contact No.</div>
                  <div className="px-4 py-2">
                    {userData?.mob} <span className="font-bold">&</span>{" "}
                    {userData?.mob}
                  </div>
                </div>

                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">
                    Permanant Address
                  </div>
                  <div className="px-4 py-2">{userData?.address}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Email.</div>
                  <div className="px-4 py-2">
                    <a className="text-blue-800" href="mailto:jane@example.com">
                      {userData?.email}
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Birthday</div>
                  <div className="px-4 py-2">{userData?.DOB}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Nationality</div>
                  <div className="px-4 py-2">{userData?.nationality}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">State</div>
                  <div className="px-4 py-2">{userData?.state}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">City</div>
                  <div className="px-4 py-2">{userData?.city}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="my-4"></div>

          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="grid grid-cols-2">
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-4">
                  <FontAwesomeIcon icon={faBook} />
                  <div className="flex space-x-5 w-full">
                    <span className="tracking-wide">Experience</span>
                    <AddStaffExperianceDocuModal
                      userData={userData}
                      getData={getData}
                    />
                  </div>
                </div>

                <ul className="list-inside space-y-2  mx-2">
                  {userData?.workExperienceArray.length === 0 ? (
                    <div className="flex justify-center items-center h-32 bg-gray-100 text-gray-500">
                      <p className="text-lg">
                        No job details have been uploaded as of yet.
                      </p>
                    </div>
                  ) : (
                    <>
                      {userData &&
                        userData.workExperienceArray?.map(
                          (
                            { _id, jobRole, jobRoleIn, expFrom, expTo, pdf },
                            i
                          ) => (
                            <li key={i}>
                              <div className="flex justify-between border-b-2  px-7">
                                <div>
                                  <div className="text-teal-600">
                                    <a href={pdf?.url} target="_blank">
                                      {jobRole} at {jobRoleIn}
                                    </a>
                                  </div>
                                  <div className="text-gray-500 text-xs">
                                    {expFrom} - {expTo ? expTo : "Now"}
                                  </div>
                                </div>
                                <div
                                  className="flex justify-center"
                                  onClick={() =>
                                    deteteJobRole(pdf.public_id, _id)
                                  }
                                >
                                  <IconButton variant="text">
                                    <FontAwesomeIcon icon={faTrashCan} />
                                  </IconButton>
                                </div>
                              </div>
                            </li>
                          )
                        )}
                    </>
                  )}
                </ul>
              </div>
              <div>
                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-4">
                  <span>
                    <FontAwesomeIcon icon={faGraduationCap} />
                  </span>

                  <div className="flex space-x-5 w-full">
                    <span className="tracking-wide">Education</span>

                    <AddStaffEducationalModal
                      userData={userData}
                      getData={getData}
                    />
                  </div>
                </div>

                <ul className="list-inside space-y-2">
                  {userData?.educationArray.length === 0 ? (
                    <div className="flex justify-center items-center h-32 bg-gray-100 text-gray-500">
                      <p className="text-lg">
                        No job details have been uploaded as of yet.
                      </p>
                    </div>
                  ) : (
                    <>
                      {userData &&
                        userData.educationArray?.map(
                          (
                            { _id, qualification, uni, expFrom, expTo, pdf },
                            i
                          ) => (
                            <li key={i}>
                              <div className="flex justify-between border-b-2  px-7">
                                <div>
                                  <div className="text-teal-600">
                                    <a href={pdf?.url} target="_blank">
                                      {qualification} from {uni}
                                    </a>
                                  </div>
                                  <div className="text-gray-500 text-xs">
                                    {expFrom} - {expTo ? expTo : "Now"}
                                  </div>
                                </div>
                                <div
                                  className="flex justify-center"
                                  onClick={() =>
                                    deteteEducation(pdf.public_id, _id)
                                  }
                                >
                                  <IconButton variant="text">
                                    <FontAwesomeIcon icon={faTrashCan} />
                                  </IconButton>
                                </div>
                              </div>
                            </li>
                          )
                        )}
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffProfile;
