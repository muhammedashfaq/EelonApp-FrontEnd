import {
  faBank,
  faInfoCircle,
  faKey,
  faPerson,
  faStaffSnake,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

const AddStaffDetails = () => {
    const axiosPrivate =useAxiosPrivate()
    const[gender,setgender]=useState("")
    const[maritalstatuse,setMaritalStatus]=useState()
    const [religion,setReligion]=useState("")
    const[jobType,setJobType]=useState("")
    const[jobRole,setJobRole]=useState("")
    const[acType,setAcType]=useState("")
    const[userType,setUserType]=useState("")
  const [formData, setFormData] = useState({
    staffId:"",
    staffName:"",
    DOB:"",
    mob:"",
    mob2:"",
    wamob:"",
    email:"",
    DOJ:"",
    adharno:"",
    pan:"",
    nationality:"",
    state:"",
    city:"",
    pib:"",
    address:"",
    bankAccountNumber:"",
    bankAccountName:"",
    bankName:"",
    bankBranchName:"",
    bankIFSECode:"",
    bankMoredetails:"",
    basicSalary:"",
    pf:"",
    epfno:"",
    esi:"",
    esiip:"",
    otherAllowance:"",
    loginpassword:""
  });

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    const inputValue =
      type === "number"
        ? parseFloat(value)
        : type === "checkbox"
        ? checked
        : value;

    setFormData((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };
  const handleSubmitForm = async () => {
    const allData={
        ...formData,
        gender,
        maritalstatuse,
        religion,
        jobType,
        jobRole,
        acType,
        userType
}

    try {
        const response= await axiosPrivate
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="m-10">
        <div className="shadow-2xl  rounded-xl p-2 w-full">
          <div className="px-6 pt-6 bg-green-100 mx-2 flex justify-between items-center">
            <Typography variant="lead" className="font-semibold text-2xl">
              Personal Details <FontAwesomeIcon icon={faUser} />
            </Typography>
           
          </div>
          <div className=" mt-6">
            <span className="ml-10  opacity-70 ">
              <FontAwesomeIcon icon={faInfoCircle} className="opacity-30" />{" "}
              Please complete all required fields.
            </span>
          </div>
          <form onSubmit={handleSubmitForm}>
            <div className="Laptop:grid Laptop:grid-cols-4 ipad:grid ipad:grid-cols-3 Tablet:grid Tablet:grid-cols-3 mobile:grid mobile:grid-cols-1 gap-4 p-8 ">
              <Input
                name="staffId"
                className="bg-gray-50"
                variant="outlined"
                label="Staff ID"
                placeholder="ID Number"
                onChange={handleInputChange}
              />
              <Input
              name="staffName"
                className="bg-gray-50"
                variant="outlined"
                label="Name"
                placeholder="Enter Name"
                required
                onChange={handleInputChange}
              />
              <Select className="bg-gray-50" label="Gender*"   onChange={(e)=>setgender(e)} >
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <Input
              name="DOB"
                className="bg-gray-50"
                type="date"
                variant="outlined"
                label="DOB"
                required
              />
              <Input
              name="mob"
                className="bg-gray-50"
                variant="outlined"
                label="Contact Number"
                placeholder="Enter Number"
                required
                onChange={handleInputChange}
              />
              <Input
              name="mob2"
                className="bg-gray-50"
                variant="outlined"
                label="Contact Number"
                placeholder="Enter Alternate Number"
                onChange={handleInputChange}
              />
              <Input
              name="wamob"
                className="bg-gray-50"
                variant="outlined"
                label="Whatsapp Number"
                placeholder="Enter Number"
                required
                onChange={handleInputChange}
              />
              <Input
                name="email"
                className="bg-gray-50"
                variant="outlined"
                label="Email ID"
                placeholder="Enter Email Id"
                onChange={handleInputChange}
              />
              <Input
              name="DOJ"
                className="bg-gray-50"
                type="date"
                variant="outlined"
                label="DOJ"
                required
              />
              <Input
              name="adharno"
                className="bg-gray-50"
                variant="outlined"
                label="Adhar Number"
                placeholder="Adhar NO"
                required
                onChange={handleInputChange}
              />
              <Input
              name="pan"
                className="bg-gray-50"
                variant="outlined"
                label="PAN Number"
                placeholder="PAN Number"
                onChange={handleInputChange}
              />
              <Select className="bg-gray-50" label="Marital Status" onChange={(e)=>setMaritalStatus(e)}>
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <Input
              name="nationality"
                className="bg-gray-50"
                variant="outlined"
                label="Nationality"
                placeholder="Nationality"
                required
                onChange={handleInputChange}
              />
              <Input
              name="state"
                className="bg-gray-50"
                variant="outlined"
                label="State"
                placeholder="Enter State"
                required
                onChange={handleInputChange}
              />

              <Input
              name="city"
                className="bg-gray-50"
                variant="outlined"
                label="City"
                placeholder="Enter City"
                required
                onChange={handleInputChange}
              />

              <Input
              name="pin"
                className="bg-gray-50"
                variant="outlined"
                label="PIN"
                placeholder="Enter PIN"
                required
                onChange={handleInputChange}
              />

              <Select className="bg-gray-50" label="Religion" onChange={(e)=>setReligion(e)}>
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>
              <Select className="bg-gray-50" label="Job Type* " onChange={(e)=>setJobType(e)}>
                <Option>Teaching</Option>
                <Option>Non-Teaching</Option>
              </Select>
              <Select className="bg-gray-50" label="Job Role" onChange={(e)=>setJobRole(e)}>
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>

              <Textarea
              name="address"
                className="bg-gray-50"
                variant="outlined"
                placeholder="Enter Address"
                required
                onChange={handleInputChange}
              />
            </div>
            <div className="px-6 pt-6 bg-green-100 mx-2 flex justify-between items-center">
              <Typography variant="lead" className="font-semibold text-2xl">
                Bank Details & Pay Roll <FontAwesomeIcon icon={faBank} />
              </Typography>
              <div className="w-96 m-2"></div>
              <hr />
            </div>
            <div className=" mt-6">
              <span className="ml-10  opacity-70 ">
                <FontAwesomeIcon icon={faInfoCircle} className="opacity-30" />{" "}
                Please complete all required fields.
              </span>
            </div>

            <div className="Laptop:grid Laptop:grid-cols-4 ipad:grid ipad:grid-cols-3 Tablet:grid Tablet:grid-cols-3 mobile:grid mobile:grid-cols-1 gap-4 p-8 ">
              <div className="flex w-full  items-center bg-gray-100 rounded-md p-2 border-b-2">
                <Typography className="text-lg font-semibold">
                  BANK Details :-
                </Typography>
              </div>
              <Select label="Account Type " onChange={(e)=>setAcType(e)}>
                <Option>Self</Option>
                <Option>Joint</Option>
                <Option>Other</Option>
              </Select>

              <Input
              name="bankAccountNumber"
                variant="outlined"
                label="Account Number"
                placeholder="Enter Number"
                required
                onChange={handleInputChange}
              />
              <Input
                name="bankAccountName"
                variant="outlined"
                label="Account Name"
                placeholder="Enter Name"
                required
                onChange={handleInputChange}
              />
              <Input
              name="bankName"
                variant="outlined"
                label="Bank Name"
                placeholder="Enter Name"
                required
                onChange={handleInputChange}
              />
              <Input
              name="bankBranchName"
                variant="outlined"
                label="Branch"
                placeholder="Enter Branch Name"
                required
                onChange={handleInputChange}
              />
              <Input
              name="bankIFSECode"
                variant="outlined"
                label="IFSE Code"
                placeholder="Enter IFSE Code"
                required
                onChange={handleInputChange}
              />

              <Textarea
                name="bankMoredetails"
                variant="outlined"
                placeholder="Enter here More Details"
                onChange={handleInputChange}
              />

              <div className="flex w-full  items-center  bg-gray-100 rounded-md p-2 border-b-2">
                <Typography className="text-lg font-semibold">
                  PAY ROLL Details :-
                </Typography>
              </div>

              <Input
              name="basicSalary"
                variant="outlined"
                label="Basic Salary"
                placeholder="Enter Here"
                required
                onChange={handleInputChange}
              />
              <Input
              name="pf"
                variant="outlined"
                label="PF"
                placeholder="Enter Here"
                onChange={handleInputChange}
              />
              <Input
              name="epfno"
                variant="outlined"
                label="EPF NO / UAN N0"
                placeholder="Enter Here"
                onChange={handleInputChange}
              />
              <Input
              name="esi"
                variant="outlined"
                label="ESI"
                placeholder="Enter Here"
                onChange={handleInputChange}
              />
              <Input
              name="esiip"
                variant="outlined"
                label="ESI IP"
                placeholder="Enter Here"
                onChange={handleInputChange}
              />
              <Input
              name="otherAllowance"
                variant="outlined"
                label="Other Allowances"
                placeholder="Enter Here"
                onChange={handleInputChange}
              />
            </div>

            <div className="px-6 pt-6 bg-green-100 mx-2 flex justify-between items-center">
              <Typography variant="lead" className="font-semibold text-2xl">
                Login Details <FontAwesomeIcon icon={faKey} />
              </Typography>
              <div className="w-96 m-2"></div>
              <hr />
            </div>
            <div className=" mt-6">
              <span className="ml-10  opacity-70 ">
                <FontAwesomeIcon icon={faInfoCircle} className="opacity-30" />{" "}
                Please complete all required fields.
              </span>
            </div>

            <div className="Laptop:grid Laptop:grid-cols-4 ipad:grid ipad:grid-cols-3 Tablet:grid Tablet:grid-cols-3 mobile:grid mobile:grid-cols-1 gap-4 p-8  ">
              <Select label="User Type " onChange={(e)=>setUserType(e)}>
                <Option>Self</Option>
                <Option>Joint</Option>
                <Option>Other</Option>
              </Select>

              <Input
              name="loginemail"
                variant="outlined"
                label="Email ID"
                placeholder="Enter Here"
                required
                onChange={handleInputChange}
              />
              <Input
              name="loginpassword"
                variant="outlined"
                label="Password"
                placeholder="Enter Here"
                required
                onChange={handleInputChange}
              />
            </div>

            <Button fullWidth color="blue" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddStaffDetails;
