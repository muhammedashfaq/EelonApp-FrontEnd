import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faBook, faEye, faEyeSlash, faUser, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { Link, useNavigate } from "react-router-dom";
import { RouteObjects } from "../../../Routes/RoutObjects";

const SuperAdminLogin = () => {
  const navigate= useNavigate()
  const axiosPrivate = useAxiosPrivate()
  const [eyeOpen, setEyeOpen] = useState(false);
  const [isValidate,setIsValidate]=useState(false)
  const [isLoading,setIsLoading]=useState()
  const [formData,setFormData]=useState({
    email:"",
    password:""
  })
  const handleInputChange =(e)=>{
    const {name,value}=e.target;

    setFormData((pre)=>({
      ...pre,
      [name]:value
    }))
  }


const handleSubmit = async()=>{
  try {
    setIsLoading(true)
    const response = await axiosPrivate.post("/auth/super-admin",formData)
    setIsLoading(false)
    navigate(RouteObjects.SuperAdminHome)
  } catch (error) {
    setIsLoading(false)
    console.log(error);
  }
}


useEffect(()=>{
const isValidate =
formData.email&&
formData.password;
setIsValidate(isValidate)
},[formData])
  return (
    <div>
      <>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <div className="bg-purple-900 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-800 bottom-0 leading-5 h-full w-full overflow-hidden"></div>
        <div className="relative min-h-screen sm:flex sm:flex-row justify-center bg-transparent rounded-3xl shadow-xl">
          <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
            <div className="self-start hidden lg:flex flex-col text-gray-300">
              <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
              <p className="pr-3 text-sm opacity-75">
                Lorem ipsum is placeholder text commonly used in the graphic,
                print, and publishing industries for previewing layouts and
                visual mockups
              </p>
            </div>
          </div>

          <div className="flex justify-center self-center  z-10">
            <div className="p-12 bg-white mx-auto rounded-3xl w-96 ">
              <div className="mb-7 flex justify-center ">
                <div>
                  <FontAwesomeIcon icon={faCircleUser} size="4x" />
                  <h3 className="font-semibold text-2xl text-gray-800">
                    Sign In{" "}
                  </h3>
                </div>
              </div>
              <div className="space-y-6">
                <div className="">
                  <Input
                  name="email"
                  onChange={handleInputChange}
                    // className=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-purple-400"
                    type="Text"
                    placeholder="Email ID"
                  />
                </div>
                <div className="">
                  <Input
                                    onChange={handleInputChange}

                  variant="Standard"
                icon={
                      eyeOpen ? (
                        <FontAwesomeIcon
                          icon={faEye}
                          onClick={() => setEyeOpen(false)}
                          className="cursor-pointer"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faEyeSlash}
                          onClick={() => setEyeOpen(true)}
                          className="cursor-pointer"
                        />
                      )
                    }
                    type={eyeOpen ? "text" : "password"}
                    size="lg"
                    name="password"
                    
                    placeholder="Enter Password"
                    // className="!border-t-blue-gray-200 focus:!border-t-gray-900 p-3 rounded-md bg-cyan-200"
                
                    // className=" w-full text-sm  px-4 py-3 bg-gray-200   rounded-lg "
                    
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm ml-auto">
                    <a
                      href="#"
                      className="text-purple-700 hover:text-purple-600"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
              
                  <Button
                  
                  onClick={handleSubmit}
                  loading={isLoading}
                  disabled={!isValidate}
                    type="submit"
                    className="w-full flex justify-center bg-purple-800  hover:bg-purple-700 text-gray-100 p-3  rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-500"
                  >
                    Sign in
                  </Button>
                </div>
                <div className="flex items-center justify-center space-x-2 my-5">
                  <span className="h-px w-16 bg-gray-100"></span>
                  <span className="text-gray-300 font-normal">or</span>
                  <span className="h-px w-16 bg-gray-100"></span>
                </div>
                <div className="flex justify-center gap-5 w-full ">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-500"
                  >
                    <svg
                      className="w-4 mr-2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="#EA4335"
                        d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z"
                      />
                      <path
                        fill="#34A853"
                        d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z"
                      />
                      <path
                        fill="#4A90E2"
                        d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z"
                      />
                    </svg>
                    <span>Google</span>
                  </button>
                </div>
              </div>
              <div className="mt-7 text-center text-gray-300 text-xs">
                <span>
                  Copyright © 2021-2023
                  <a
                    href="https://codepen.io/uidesignhub"
                    rel=""
                    target="_blank"
                    title="Codepen aji"
                    className="text-purple-500 hover:text-purple-600 "
                  >
                    AJI
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        <svg
          className="absolute bottom-0 left-0 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,0L40,42.7C80,85,160,171,240,197.3C320,224,400,192,480,154.7C560,117,640,75,720,74.7C800,75,880,117,960,154.7C1040,192,1120,224,1200,213.3C1280,203,1360,149,1400,122.7L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
      </>
    </div>
  );
};

export default SuperAdminLogin;
