import { useEffect, useState } from "react";
import loginimage from "../assets/login.jpg";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { loginValidate } from "../Helper/Validations/validations";
import { logintouserhome } from "../Helper/api/api";
import { toast } from "react-hot-toast";
import logoImage from '../assets/Logo.png'
import axios from '../api/axios.jsx'
const Login = () => {
  const [user, setUser] = useState("");
  const [errors, setError] = useState([]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post("/auth", formData);
      console.log(response);
      const error = loginValidate(formData.email, formData.password);
      setError(error);
      if (Object.values(error).every((value) => value === "")) {
        if (response.data.success) {
          toast.success(response.data.message);
          localStorage.setItem("token", response.data.data);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="shadow-md p-0 flex justify-center ">
      
        <img src={logoImage} className="w-40 h-40 "/>
      </div>
      <div className="h-full flex justify-center items-center mt-32 ">
        <div className="flex h-auto xl:w-2/3  ">
          <div className="">
            <img className="hidden lg:block rounded-l-lg" src={loginimage} />
          </div>
          <div className="bg-cyan-600 p-8 rounded-r-lg">
            <Card color="transparent" shadow={false} className="">
              <div className=" flex justify-center ">
                <Typography variant="h2" color="blue-gray" className="">
                  {user}Sign In
                </Typography>
              </div>

              <form
                onSubmit={handleSubmit}
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
              >
                <div className="mb-1 flex flex-col gap-7">
                  <div className="relative inline-block">
                    <select
                      onChange={(e) => setUser(e.target.value)}
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value="">Select User</option>
                      <option value="Students">Students</option>
                      <option value="Staff">Staff</option>
                      <option value="Master">Master</option>
                    </select>
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

                  <Input
                    size="lg"
                    name="email"
                    placeholder="Enter Your Mail"
                    onChange={handleInputChange}
                    className=" border-t-blue-gray-200 focus:!border-t-gray-900 p-3 rounded-md"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />

                  <Input
                    type="password"
                    size="lg"
                    name="password"
                    placeholder="Enter Password"
                    onChange={handleInputChange}
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 p-3 rounded-md"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
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
    </div>
  );
};

export default Login;
