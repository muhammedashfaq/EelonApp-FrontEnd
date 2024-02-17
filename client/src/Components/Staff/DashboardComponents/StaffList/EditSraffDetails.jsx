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
import  { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import {useNavigate} from 'react-router-dom'
import { RouteObjects } from "../../../../Routes/RoutObjects";
const EditSraffDetails = ({fetchData}) => {
  const useDropdownState = (initialValue, fetchedValue) => {
    const [value, setValue] = useState(initialValue);
  
  
    useEffect(() => {
      if (fetchedValue !== undefined) {
        setValue(fetchedValue);
      }
    }, [fetchedValue]);
  
    return [value, setValue];
  };
  const navigate=useNavigate()
    const axiosPrivate = useAxiosPrivate();
  const genderState = useDropdownState("", fetchData?.gender);
  const maritalstatusState = useDropdownState(
    "",
    fetchData?.maritalstatusState
  );
  const religionState = useDropdownState("", fetchData?.religion);
  const jobTypeState = useDropdownState("", fetchData?.jobType);
  const jobRoleState = useDropdownState("", fetchData?.jobRole);
  const acTypeState = useDropdownState("", fetchData?.acType);
  const userTypeState = useDropdownState("", fetchData?.userType);
  const bloodGpState=useDropdownState("",fetchData?.bloodGp)

  const [formData, setFormData] = useState({
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
    bankIFSCCode: "",
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
  const handleSubmitForm = async (e) => {
    e.preventDefault()
    const allData = {
      ...formData,
      gender: genderState[0],
      maritalStatus: maritalstatusState[0],
      religion: religionState[0],
      jobType: jobTypeState[0],
      jobRole: jobRoleState[0],
      acType: acTypeState[0],
      userType: userTypeState[0],
      bloodGp:bloodGpState[0]
    };

    try {
      const response = await axiosPrivate(`users/staff/${fetchData._id}`,allData)
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
      navigate(RouteObjects.StaffList)
      console.log(response,"res");
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?error.response:"Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>'
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
                defaultValue={fetchData?.staffId}
                onChange={handleInputChange}
              />
              <Input
                name="name"
                className="bg-gray-50"
                variant="outlined"
                label="Name"
                placeholder="Enter Name"
                required
                defaultValue={fetchData?.name}
                onChange={handleInputChange}
              />
              <Select
                className="bg-gray-50"
                label="Gender*"
                value={genderState[0]}
                onChange={(e) => genderState[1](e)}
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>
              </Select>
              <Input
                name="DOB"
                className="bg-gray-50"
                type="date"
                variant="outlined"
                label="DOB"
                required
                defaultValue={fetchData?.DOB}
                onChange={handleInputChange}

              />
                       <Select
                variant="outlined"
                value={bloodGpState[0]}
                onChange={(e) => bloodGpState[0][1](e)}

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
                required
                defaultValue={fetchData?.mob}
                onChange={handleInputChange}
              />
              <Input
                name="mob2"
                className="bg-gray-50"
                variant="outlined"
                label="Contact Number"
                placeholder="Enter Alternate Number"
                onChange={handleInputChange}
                defaultValue={fetchData?.mob2}
              />
              <Input
                name="wamob"
                className="bg-gray-50"
                variant="outlined"
                label="Whatsapp Number"
                placeholder="Enter Number"
                required
                onChange={handleInputChange}
                defaultValue={fetchData?.wamob}
              />
              <Input
                name="contactEmail"
                className="bg-gray-50"
                variant="outlined"
                label="Email ID"
                placeholder="Enter Email Id"
                onChange={handleInputChange}
                defaultValue={fetchData?.contactEmail}
              />
              <Input
                name="DOJ"
                className="bg-gray-50"
                type="date"
                variant="outlined"
                label="DOJ"
                required
                defaultValue={fetchData?.DOJ}
              />
              <Input
                name="adharno"
                className="bg-gray-50"
                variant="outlined"
                label="Adhar Number"
                placeholder="Adhar NO"
                required
                onChange={handleInputChange}
                defaultValue={fetchData?.adharno}
              />
              <Input
                name="pan"
                className="bg-gray-50"
                variant="outlined"
                label="PAN Number"
                placeholder="PAN Number"
                defaultValue={fetchData?.pan}
                onChange={handleInputChange}
              />
              <Select
                className="bg-gray-50"
                label="Marital Status"
                value={maritalstatusState[0]}
                onChange={(e) => maritalstatusState[1](e)}
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
                required
                onChange={handleInputChange}
                defaultValue={fetchData?.nationality}
              />
              <Input
                name="state"
                className="bg-gray-50"
                variant="outlined"
                label="State"
                placeholder="Enter State"
                required
                onChange={handleInputChange}
                defaultValue={fetchData?.state}
              />

              <Input
                name="city"
                className="bg-gray-50"
                variant="outlined"
                label="City"
                placeholder="Enter City"
                required
                onChange={handleInputChange}
                defaultValue={fetchData?.city}
              />

              <Input
                name="pin"
                className="bg-gray-50"
                variant="outlined"
                label="PIN"
                placeholder="Enter PIN"
                required
                onChange={handleInputChange}
                defaultValue={fetchData?.pin}
              />

              <Select
                className="bg-gray-50"
                label="Religion"
                value={religionState[0]}
                onChange={(e) => religionState[1](e)}
              >
              <Option value="Hindu">Hindu</Option>
                <Option value="Muslim">Muslim</Option>
                <Option value="Christian">Christian</Option>
                <Option value="Other">Other</Option>
              </Select>
              <Select
                className="bg-gray-50"
                label="Job Type* "
                value={jobTypeState[0]}
                onChange={(e) => jobTypeState[0](e)}
              >
               <Option value="Teaching">Teaching</Option>
                <Option value="Non-Teaching">Non-Teaching</Option>
              </Select>
              <Select
                className="bg-gray-50"
                label="Job Role"
                value={jobRoleState[0]}
                onChange={(e) => jobRoleState[0](e)}
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
                required
                onChange={handleInputChange}
                defaultValue={fetchData?.address}
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
              <Select
                label="Account Type "
                value={acTypeState[0]}
                onChange={(e) => acTypeState[0](e)}
              >
             <Option value="Self">Self</Option>
                <Option value="Joint">Joint</Option>
                <Option value="Other">Other</Option>
              </Select>

              <Input
                name="bankAccountNumber"
                variant="outlined"
                label="Account Number"
                placeholder="Enter Number"
                required
                onChange={handleInputChange}
                defaultValue={fetchData?.bankAccountNumber}
              />
              <Input
                name="bankAccountName"
                variant="outlined"
                label="Account Name"
                placeholder="Enter Name"
                required
                onChange={handleInputChange}
                defaultValue={fetchData?.bankAccountName}
              />
              <Input
                name="bankName"
                variant="outlined"
                label="Bank Name"
                placeholder="Enter Name"
                required
                onChange={handleInputChange}
                defaultValue={fetchData?.bankName}
              />
              <Input
                name="bankBranchName"
                variant="outlined"
                label="Branch"
                placeholder="Enter Branch Name"
                required
                onChange={handleInputChange}
                defaultValue={fetchData?.bankBranchName}
              />
              <Input
                name="bankIFSECode"
                variant="outlined"
                label="IFSE Code"
                placeholder="Enter IFSE Code"
                required
                onChange={handleInputChange}
                defaultValue={fetchData?.bankIFSECode}
              />

              <Textarea
                name="bankMoredetails"
                variant="outlined"
                placeholder="Enter here More Details"
                onChange={handleInputChange}
                defaultValue={fetchData?.bankMoredetails}
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
                defaultValue={fetchData?.basicSalary}
              />
              <Input
                name="pf"
                variant="outlined"
                label="PF"
                placeholder="Enter Here"
                onChange={handleInputChange}
                defaultValue={fetchData?.pf}
              />
              <Input
                name="epfno"
                variant="outlined"
                label="EPF NO / UAN N0"
                placeholder="Enter Here"
                onChange={handleInputChange}
                defaultValue={fetchData?.epfno}
              />
              <Input
                name="esi"
                variant="outlined"
                label="ESI"
                placeholder="Enter Here"
                onChange={handleInputChange}
                defaultValue={fetchData?.esi}
              />
              <Input
                name="esiip"
                variant="outlined"
                label="ESI IP"
                placeholder="Enter Here"
                onChange={handleInputChange}
                defaultValue={fetchData?.esiip}
              />
              <Input
                name="otherAllowance"
                variant="outlined"
                label="Other Allowances"
                placeholder="Enter Here"
                onChange={handleInputChange}
                defaultValue={fetchData?.otherAllowance}
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

export default EditSraffDetails;
