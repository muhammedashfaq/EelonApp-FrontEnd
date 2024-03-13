import {
  faBank,
  faInfoCircle,
  faKey,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import  { useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import { RouteObjects } from "../../../../Routes/RoutObjects";
import { useNavigate } from "react-router-dom";
import { addStaffValidation } from "../../../../Helper/Validations/validations";

const AddStaffDetails = () => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [gender, setgender] = useState("");
  const [maritalStatus, setMaritalStatus] = useState();
  const [religion, setReligion] = useState("");
  const [jobType, setJobType] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [accType, setAccType] = useState("");
  const [userType, setUserType] = useState("");
  const [bloodGp, setbloodGp] = useState("");
  const [DOB,setDOB]=useState("")
  const [DOJ,setDOJ]=useState("")
  const [frntentErors, setFrntentErors] = useState({
    staffId: "",
    name: "",
    DOB: "",
    mob: "",
    mob2: "",
    wamob: "",
    contactEmail: "",
    DOJ: "",
    aadharNo: "",
    pan: "",
    nationality: "",
    state: "",
    city: "",
    pib: "",
    address: "",
    bankAccountNumber: "",
    bankAccountName: "",
    bankName: "",
    bankBranchName: "",
    bankIFSCcode: "",
    otherBankdetails: "",
    basicSalary: "",
    pf: "",
    epfno: "",
    esi: null,
    esiip: null,
    otherAllowance: "",
    password: "",
    email: "",
    gender:"",
    maritalStatus:"",
    religion:"",
    jobType:"",
    jobRole:"",
    accType:"",
    userType:"",
    bloodGp:""
  })
  const [formData, setFormData] = useState({
    staffId: "",
    name: "",
    mob: "",
    mob2: "",
    wamob: "",
    contactEmail: "",
    aadharNo: "",
    pan: "",
    nationality: "",
    state: "",
    city: "",
    address: "",
    bankAccountNumber: "",
    bankAccountName: "",
    bankName: "",
    bankBranchName: "",
    bankIFSCcode: "",
    otherBankdetails: "",
    basicSalary: "",
    pf: "",
    epfno: "",
    esi: null,
    esiip: null,
    otherAllowance: "",
    password: "",
    email: "",
    
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
  const allData = {
    ...formData,
    gender,
    DOB,
    DOJ,
    maritalStatus,
    religion,
    jobType,
    jobRole,
    accType,
    userType,
    bloodGp
  };
  const handleSubmitForm = async (e) => {
    
    try {
      e.preventDefault();
      const addstudentErrors = addStaffValidation(allData);
      
      if (!Object.values(addstudentErrors).some((error) => error === "")) {
        console.log(addstudentErrors);
        // There are validation errors
        setFrntentErors(addstudentErrors)
        return;
      } else {
        console.log(addstudentErrors,"error out");

        const response = await axiosPrivate.post("users/staff", allData);
        console.log(response,"res")
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success",
        });
        navigate(RouteObjects.StaffList);
        
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response ? error.response : "Something went wrong!",
      });
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
            <span className="ml-10  opacity-70">
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
                name="name"
                className="bg-gray-50"
                variant="outlined"
                label="Name"
                placeholder="Enter Name"
                
                onChange={handleInputChange}
              />
              <Select
                className="bg-gray-50"
                label="Gender*"
                onChange={(e) => setgender(e)}
              >
                <Option value="Male">Male</Option>
                <Option value="Male">Female</Option>
                <Option value="Male">Other</Option>
              </Select>
              <Input
                name="DOB"
                className="bg-gray-50"
                type="date"
                variant="outlined"
                label="DOB"
                
                onChange={(e) => setDOB(e.target.value)}

              />

              <Select
                variant="outlined"
                value={bloodGp}
                onChange={(e) => setbloodGp(e)}
                label="Bloog Group"
              >
                <Option value="A+ve">A+ve</Option>
                <Option value="A-ve">A-ve</Option>
                <Option value="B+ve">B+ve</Option>
                <Option value="B-ve">B-ve</Option>
                <Option value="AB+ve">AB+ve</Option>
                <Option value="AB-ve">AB-ve</Option>
                <Option value="O+ve">O+ve</Option>
                <Option value="O-ve">O-ve</Option>
                <Option value="Unknown">Unknown</Option>
              </Select>
              <Input
                name="mob"
                className="bg-gray-50"
                variant="outlined"
                label="Contact Number"
                placeholder="Enter Number"
                
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
                
                onChange={handleInputChange}
              />
              <Input
                name="contactEmail"
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
                onChange={(e) => setDOJ(e.target.value)}

              />
              <Input
                name="aadharno"
                className="bg-gray-50"
                variant="outlined"
                label="Adhar Number"
                placeholder="Adhar NO"
                
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
              <Select
                className="bg-gray-50"
                label="Marital Status"
                onChange={(e) => setMaritalStatus(e)}
              >
                <Option value="Married">Married</Option>
                <Option value="Single">Single</Option>
                <Option value="Other">Other</Option>
              </Select>
              <Input
                name="nationality"
                className="bg-gray-50"
                variant="outlined"
                label="Nationality"
                placeholder="Nationality"
                
                onChange={handleInputChange}
              />
              <Input
                name="state"
                className="bg-gray-50"
                variant="outlined"
                label="State"
                placeholder="Enter State"
                
                onChange={handleInputChange}
              />

              <Input
                name="city"
                className="bg-gray-50"
                variant="outlined"
                label="City"
                placeholder="Enter City"
                
                onChange={handleInputChange}
              />

              <Input
                name="pin"
                className="bg-gray-50"
                variant="outlined"
                label="PIN"
                placeholder="Enter PIN"
                
                onChange={handleInputChange}
              />

              <Select
                className="bg-gray-50"
                label="Religion"
                onChange={(e) => setReligion(e)}
              >
                <Option value="Hindu">Hindu</Option>
                <Option value="Muslim">Muslim</Option>
                <Option value="Christian">Christian</Option>
                <Option value="Other">Other</Option>
              </Select>
              <Select
                className="bg-gray-50"
                label="Job Type* "
                onChange={(e) => setJobType(e)}
              >
                <Option value="Teaching">Teaching</Option>
                <Option value="Non-Teaching">Non-Teaching</Option>
              </Select>
              <Select
                className="bg-gray-50"
                label="Job Role"
                onChange={(e) => setJobRole(e)}
              >
                <Option value="Teacher">Teacher</Option>
                <Option value="Guest Teacher">Guest Teacher</Option>
                <Option value="Accountant">Accountant</Option>
                <Option value="Clerk">Clerk</Option>
                <Option value="Other">Other</Option>
              </Select>

              <Textarea
                name="address"
                className="bg-gray-50"
                variant="outlined"
                placeholder="Enter Address"
                
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
                Please complete all  fields.
              </span>
            </div>

            <div className="Laptop:grid Laptop:grid-cols-4 ipad:grid ipad:grid-cols-3 Tablet:grid Tablet:grid-cols-3 mobile:grid mobile:grid-cols-1 gap-4 p-8 ">
              <div className="flex w-full  items-center bg-gray-100 rounded-md p-2 border-b-2">
                <Typography className="text-lg font-semibold">
                  BANK Details :-
                </Typography>
              </div>
              <Select name="accType" label="Account Type " onChange={(e) => setAccType(e)}>
                <Option value="Self">Self</Option>
                <Option value="Joint">Joint</Option>
                <Option value="Other">Other</Option>
              </Select>

              <Input
                name="bankAccountNumber"
                variant="outlined"
                label="Account Number"
                placeholder="Enter Number"
                
                onChange={handleInputChange}
              />
              <Input
                name="bankAccountName"
                variant="outlined"
                label="Account Name"
                placeholder="Enter Name"
                
                onChange={handleInputChange}
              />
              <Input
                name="bankName"
                variant="outlined"
                label="Bank Name"
                placeholder="Enter Name"
                
                onChange={handleInputChange}
              />
              <Input
                name="bankBranchName"
                variant="outlined"
                label="Branch"
                placeholder="Enter Branch Name"
                
                onChange={handleInputChange}
              />
              <Input
                name="bankIFSCcode"
                variant="outlined"
                label="IFSC Code"
                placeholder="Enter IFSC Code"
                
                onChange={handleInputChange}
              />

              <Textarea
                name="otherBankdetails"
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
                Please complete all  fields.
              </span>
            </div>

            <div className="Laptop:grid Laptop:grid-cols-4 ipad:grid ipad:grid-cols-3 Tablet:grid Tablet:grid-cols-3 mobile:grid mobile:grid-cols-1 gap-4 p-8  ">
              <Select label="User Type " onChange={(e) => setUserType(e)}>
                <Option value="Teacher">Teacher</Option>
                <Option value="Guest Teacher">Guest Teacher</Option>
                <Option value="Accountant">Accountant</Option>
                <Option value="Clerk">Clerk</Option>
                <Option value="Other">Other</Option>
              </Select>

              <Input
                name="email"
                variant="outlined"
                label="Email ID"
                placeholder="Enter Here"
                
                onChange={handleInputChange}
              />
              <Input
                name="password"
                variant="outlined"
                label="Password"
                placeholder="Enter Here"
                
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
