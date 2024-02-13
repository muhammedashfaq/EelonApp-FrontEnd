import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  DialogBody,
  Dialog,
  DialogHeader,
  Avatar,
  IconButton,
  DialogFooter,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEnvelope,
  faEye,
  faLock,
  faLockOpen,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import Swal from 'sweetalert2'
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
const ImageCard = ({ userData }) => {
  console.log(userData, "image cardf");
  const [showModal, setShowModal] = useState(false);
  const [Image, setImage] = useState(
    "https://img.freepik.com/premium-photo/man-is-smiling-holding-laptop-with-smile-his-face_973047-1028.jpg"
  );
  const [errorImage,setErrorImage]=useState("")
  const[profileImage,setProfileImage]=useState("")
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);
  const { auth } = useAuth();
  const ImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
      setProfileImage(imageUrl)
    }
  };

  const submitimage = async(e) => {
    try {
      e.preventDefault()
      if(!profileImage){
   
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Choose Any Image 📷",
        });
        return
      }
      console.log('image');
        const response = null;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Card className="w-96 h-full max-h-[30rem] cursor-pointer ">
        <CardHeader
          shadow={false}
          floated={false}
          className="h-96"
          onClick={handleOpen}
        >
          <img
            src={Image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        {(auth.roles == 5151 || auth.roles == 2000) && (
          <div className="space-x-2 flex justify-center my-1 items-center">
            <Button color="teal">
              <label
                htmlFor="imageUpload"
                className=" cursor-pointer text-white"
              >
                <FontAwesomeIcon icon={faEdit} size="2xl" />
              </label>
              <input
                type="file"
                id="imageUpload"
                name="profileimage"
                className="hidden"
                onChange={ImageChange}
              />
            </Button>

            <Button color="lime" className="" onClick={submitimage}>
              <FontAwesomeIcon icon={faUpload} size="2xl" />
            </Button>
          </div>
        )}

        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {userData?.studentName}
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            {userData?.email}
          </Typography>
          {userData?.ContactNo}
        </CardBody>
      </Card>

      <Dialog size="lg" open={open} handler={handleOpen}>
        <DialogHeader className="justify-between">
          <div className="flex items-center gap-3">
            <Avatar
              size="sm"
              variant="circular"
              alt="tania andrew"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <div className="-mt-px flex flex-col">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-medium"
              >
                Tania Andrew
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-xs font-normal"
              >
                @emmaroberts
              </Typography>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <IconButton
              variant="text"
              size="sm"
              color={isFavorite ? "red" : "blue-gray"}
              onClick={handleIsFavorite}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </IconButton>
            <Button color="gray" size="sm">
              Free Download
            </Button>
          </div>
        </DialogHeader>
        <DialogBody>
          <img
            alt="nature"
            className="h-[48rem] w-full rounded-lg object-cover object-center"
            src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
          />
        </DialogBody>
        <DialogFooter className="justify-between">
          <div className="flex items-center gap-16">
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Views
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                44,082,044
              </Typography>
            </div>
            <div>
              <Typography variant="small" color="gray" className="font-normal">
                Downloads
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                553,031
              </Typography>
            </div>
          </div>
          <Button
            size="sm"
            variant="outlined"
            color="blue-gray"
            className="mr-5 flex items-center"
          >
            Share
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default ImageCard;
