// Import necessary libraries and components
import { useState } from "react";
import loginimage from "../assets/login-resized.jpg";
import {
  Card,
  Input,
  Button,
  Typography,
  Alert,
  CardHeader,
} from "@material-tailwind/react";
import { loginValidate } from "../Helper/Validations/validations";
import Spinner from "./spinner/SpinningLoader.jsx";
import { toast } from "react-hot-toast";
import logoImage from "../assets/EelonLogo.png";
import axios from "../api/axios.jsx";
import LoginUserSelectButton from "./LoginUserSelectButton.jsx";
import useAuth from "../Hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/userContext.jsx";
import { RouteObjects } from "../Routes/RoutObjects.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEye,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";

// Define the Login component
const Login = () => {
  // Retrieve necessary context and states
  const { setUserRoles } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setuserType] = useState("Student");
  const [eyeOpen, setEyeOpen] = useState(false);
  const [errorMsg, seterrorMsg] = useState();
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [FrntError, setFrntError] = useState({
    email: "",
    password: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    seterrorMsg("");
    const { name, value } = e.target;

    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));

    setFrntError((pre) => ({
      ...pre,
      [name]: "",
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const type = userType.toLowerCase();

      const error = loginValidate(formData.email);
      if (!Object.values(error).every((value) => value === "")) {
        setFrntError(error);
        return;
      } else {
        setIsLoading(true);
        const response = await axios.post(`/auth/${type}`, formData);
        setIsLoading(false);

        const accessToken = response?.data?.accessToken;
        const roles = response?.data?.roles;
        const email = response?.data?.email;
        const userId = response?.data?.userId;
        setUserRoles(roles);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("roles", roles);
        localStorage.setItem("email", email);
        localStorage.setItem("userId", userId);

        if (
          userType === "Student" ||
          userType === "Staff" ||
          userType === "Admin"
        ) {
          navigate(RouteObjects.root);
          location.reload();
        }
      }
    } catch (error) {
      setIsLoading(false);

      if (!error?.response) {
        toast.error("No server response");
      } else if (error.response.status === 404) {
        toast.error("Email not found");
      } else if (error.response?.status === 401) {
        seterrorMsg("Wrong password");
      } else {
        toast.error("Login error");
      }
    }
  };

  // Render the component
  return (
    <div className="h-full">
      {isLoading && <Spinner />}

      <div className="shadow-md p-0 flex justify-center">
        <img src={logoImage} className="w-25 h-20 p-2 cursor-pointer" />
      </div>
      <div className="h-full mt-10">
        <LoginUserSelectButton setuserType={setuserType} />
        {userType && (
          <div className="flex justify-center items-center">
            <Card
              color="transparent"
              className="p-6 rounded-lg shadow-xl inset-shadow "
            >
              <div className="flex justify-center w-full  ">
                <CardHeader className="bg-blue-500 p-4 text-white rounded-md mb-10 w-full flex justify-center items-center">
                  <Typography variant="h2" color="blue-gray">
                    {userType && `${userType} `}Sign In
                  </Typography>
                </CardHeader>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              >
                <div className="mb-1 flex flex-col gap-7">
                  <Input
                    icon={<FontAwesomeIcon icon={faEnvelope} />}
                    size="lg"
                    name="email"
                    variant="standard"
                    label={
                      FrntError && FrntError.email
                        ? FrntError.email
                        : "Enter Email"
                    }
                    placeholder="Enter Your Mail"
                    onChange={handleInputChange}
                    error={FrntError && FrntError.email}
                    className="border-t-blue-gray-200 focus:!border-t-gray-900 p-3 rounded-md bg-cyan-200"
                  />

                  <Input
                    icon={
                      eyeOpen ? (
                        <FontAwesomeIcon
                          icon={faLockOpen}
                          onClick={() => setEyeOpen(false)}
                          className="cursor-pointer"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faLock}
                          onClick={() => setEyeOpen(true)}
                          className="cursor-pointer"
                        />
                      )
                    }
                    type={eyeOpen ? "text" : "password"}
                    size="lg"
                    name="password"
                    variant="standard"
                    label={
                      FrntError && FrntError.password
                        ? FrntError.password
                        : "Enter Password"
                    }
                    placeholder="Enter Password"
                    onChange={handleInputChange}
                    error={FrntError && FrntError.password}
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 p-3 rounded-md bg-cyan-200"
                  />
                </div>

                <Button
                  className="mt-6 w-full bg-gradient-to-r from-blue-400 to-blue-500 hover:bg-blue-600 p-3 text-lg font-semibold text-white rounded-md"
                  fullWidth
                  type="submit"
                >
                  Sign In
                </Button>
              </form>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
