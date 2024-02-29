import { faEdit, faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardBody, CardHeader } from "@material-tailwind/react";
import React from "react";
import notFoundImg from "../../assets/placeholderImg.jpg";

import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { Oval } from "react-loader-spinner";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

const MotherImageCard = ({ userData, getData }) => {
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const [isLoading, setIsLoading] = useState(false);

  const [motherImage, setMotherImage] = useState(notFoundImg);


  const handleImage = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
    console.log(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setMotherImage(reader.result);
    };
  };
  const submitImage = async (e) => {
    try {
      e.preventDefault();
      if (!motherImage) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Choose Any Image 📷",
        });
        return;
      }
      setIsLoading(true);

      console.log(userData?._id,"id");
      const response = await axiosPrivate.post(`images/student/mother/${userData?._id}`,
      { Image:motherImage }
    )
    setIsLoading(false);
    getData()

      console.log(response,"res")

      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };

  const deleteImage = async () => {
    if (!userData?.MothersPhoto) return;
    try {
      setIsLoading(true);
         const response = await axiosPrivate.delete(
          `images/student/mother/${userData?._id}`,{data:{public_id: userData?.MothersPhoto?.public_id}}
        );
      setIsLoading(false);
      getData()
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Deleted successfully",
      });    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  };

  return (
    <div>
      {" "}
      <Card className="w-auto flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          {isLoading ? (
            <>
              <div className="flex justify-center items-center h-full">
                <Oval type="Oval" color="#00BFFF" height={40} width={40} />
              </div>
            </>
          ) : (
            <img
              src={userData?.MothersPhoto?.url || motherImage}
              alt="card-image"
              className=" w-auto h-auto object-cover m-1 rounded-lg"
            />
          )}

          {(auth.roles == 5151 || auth.roles == 2000) && (
            <div className="space-x-2 flex justify-center my-1 items-center">
              <Button color="teal">
                <label
                  htmlFor="imageUploadMother"
                  className=" cursor-pointer text-white"
                >
                  <FontAwesomeIcon icon={faEdit} size="2xl" />
                </label>
                <input
                  type="file"
                  id="imageUploadMother"
                  name="profileimage"
                  className="hidden"
                  onChange={handleImage}
                />
              </Button>

              <Button color="lime" onClick={submitImage}>
                <FontAwesomeIcon icon={faUpload} size="2xl" />
              </Button>
              <Button
                color="red"
                className=""
                onClick={deleteImage}
                disabled={userData?.MothersPhoto ? false : true}
              >
                <FontAwesomeIcon icon={faTrash} size="2xl" />
              </Button>
            </div>
          )}
        </CardHeader>

        <CardBody>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Mother Details</h3>
            <p>
              <span className="font-semibold">Name:</span>{" "}
              {userData?.MothersName}
            </p>
            <p>
              <span className="font-semibold">Name In Tamil:</span>{" "}
              {userData?.MothersNameTamil}
            </p>
            <p>
              <span className="font-semibold">Occupation:</span>{" "}
              {userData?.MothersJob}
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default MotherImageCard;
