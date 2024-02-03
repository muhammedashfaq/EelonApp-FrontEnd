import { useState } from "react";
import loginimage from "../assets/login-resized.jpg";
import {
  Card,
  Input,
  Button,
  Typography,
  Alert,
} from "@material-tailwind/react";
import { loginValidate } from "../Helper/Validations/validations";
// import { logintouserhome } from "../Helper/api/api";
import Spinner from "./spinner/Spinner.jsx";
import { toast } from "react-hot-toast";
import logoImage from "../assets/EelonLogo.png";
import axios from "../api/axios.jsx";
// import { LoginUserTab } from "./LoginUserSelectTab.jsx";
import LoginUserSelectButton from "./LoginUserSelectButton.jsx";
import useAuth from "../Hooks/useAuth.jsx";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/userContext.jsx";
import { RouteObjects } from "../Routes/RoutObjects.jsx";

const Login = () => {
  const { setUserRoles } = useUserContext();
  const [isLoading, setIsLoading] = useState(false);
  const [userType, setuserType] = useState();
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
        setUserRoles(roles);
        // setAuth({ accessToken, roles });
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("roles", roles);
        if (userType === "Student") {
          navigate(RouteObjects.root);
        } else if (userType === "Staff") {
          navigate(RouteObjects.root);
        } else if (userType === "Admin") {
          navigate(RouteObjects.root);
        }
        location.reload();
      }
    } catch (error) {
      setIsLoading(false);

      console.log(error);
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

  return (
    <div>
      {isLoading && <Spinner />}

      <div className="shadow-md p-0 flex justify-center ">
        <img src={logoImage} className="w-25 h-20 p-2 cursor-pointer" />
      </div>
      <div className="h-full mt-20">
        <LoginUserSelectButton setuserType={setuserType} />
        {userType && (
          <div className="flex justify-center items-center">
            <div className="flex h-auto xl:w-2/3  ">
              <div className="">
                <img
                  className="hidden lg:block rounded-l-lg"
                  src={loginimage}
                />
              </div>
              <div className="bg-cyan-600 p-8 rounded-r-lg">
                <div>
                  {FrntError.email && (
                    <Alert color="red" variant="ghost">
                      {FrntError.email}
                    </Alert>
                  )}
                </div>
                <Card color="transparent" shadow={false} className="">
                  <div className=" flex justify-center ">
                    <Typography variant="h2" color="blue-gray" className="">
                      {userType && `${userType} `}Sign In
                    </Typography>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                  >
                    <div className="mb-1 flex flex-col gap-7">
                      <div className="relative inline-block">
                        {/* <select
                      onChange={(e) => setUser(e.target.value)}
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value="">Select User</option>
                      <option value="Students">Students</option>
                      <option value="Staff">Staff</option>
                      <option value="Master">Master</option>
                    </select> */}
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>

                      {FrntError.email ? (

                        <Input error/>
                        ):(
                          <Input
    
                            size="lg"
                            name="email"
                            placeholder="Enter Your Mail"
                            onChange={handleInputChange}
                            className=" border-t-blue-gray-200 focus:!border-t-gray-900 p-3 rounded-md bg-cyan-200"
                            labelProps={{
                              className: "before:content-none after:content-none",
                            }}
                          />

                        )
                      }
                { FrntError.password ?(

                  <Input error />
                ):(

                  <Input
                  type="password"
                  size="lg"
                  name="password"
                  placeholder="Enter Password"
                  onChange={handleInputChange}
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-3 rounded-md  bg-cyan-200"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  />
                  )
                }
                </div>

                    <Button
                      className="mt-6 w-full bg-red-400 hover:bg-red-500  p-2 font-semibold text-white rounded-md"
                      fullWidth
                      type="submit"
                    >
                      sign up
                    </Button>
                  </form>
                </Card>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
