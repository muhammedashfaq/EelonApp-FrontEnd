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
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { RouteObjects } from "../../../../Routes/RoutObjects";
import { addStaffValidation } from "../../../../Helper/Validations/validations";
const useDropdownState = (initialValue, fetchedValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (fetchedValue !== undefined) {
      setValue(fetchedValue);
    }
  }, [fetchedValue]);

  return [value, setValue];
};
const EditSraffDetails = () => {
  const { id } = useParams();
  const [isLoading,setIsLoading]=useState(false)
  const [fetchData, setFetchData] = useState();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const genderState = useDropdownState("", fetchData?.gender);
  const maritalstatusState = useDropdownState(
    "",
    fetchData?.maritalStatus
  );
  const religionState = useDropdownState("", fetchData?.religion);
  const jobTypeState = useDropdownState("", fetchData?.jobType);
  const jobRoleState = useDropdownState("", fetchData?.jobRole);
  const acTypeState = useDropdownState("", fetchData?.accType);
  const userTypeState = useDropdownState("", fetchData?.userType);
  const bloodGpState = useDropdownState("", fetchData?.bloodGp);
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
    gender: "",
    maritalStatus: "",
    religion: "",
    jobType: "",
    jobRole: "",
    accType: "",
    userType: "",
    bloodGp: "",
  });
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
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const allData = {
      ...formData,
      gender: genderState[0],
      maritalStatus: maritalstatusState[0],
      religion: religionState[0],
      jobType: jobTypeState[0],
      jobRole: jobRoleState[0],
      acType: acTypeState[0],
      userType: userTypeState[0],
      bloodGp: bloodGpState[0],
      
    };

    try {
      const errs = addStaffValidation(allData);

      if (!Object.values(errs).every((error) => error === "")) {
        console.log(errs);
        setFrntentErors(errs);
        return;
      } else {
        setIsLoading(true)
        const response = await axiosPrivate.put(
          `users/staff/${fetchData._id}`,
          allData
        );
        setIsLoading(false)
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
          title: "Added successfully",
        });
        navigate(RouteObjects.StaffList);
      }
    } catch (error) {
      setIsLoading(false)
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response ? error.response : "Something went wrong!",
      });
    }
  };

  const getData = async () => {
    try {
      const response = await axiosPrivate.get(`users/staff/${id}`);
      setFetchData(response.data);
      setFormData(response.data);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
     getData();
  }, []); 
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
                defaultValue={fetchData?.name}
                onChange={handleInputChange}
              />
              <Select
                name="gender"
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
                defaultValue={fetchData?.DOB}
                onChange={handleInputChange}

                // onChange={(e)=>setDob(e.target.value)}
              />
              <Select
                name="bloodGp"
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
                defaultValue={fetchData?.mob}
                onChange={handleInputChange}
              />
              <Input
                name="mob2"
                className="bg-gray-50"
                variant="outlined"
                label="Contact Number"
                placeholder="Enter Alternate Number"
                defaultValue={fetchData?.mob2}
                onChange={handleInputChange}
              />
              <Input
                name="wamob"
                className="bg-gray-50"
                variant="outlined"
                label="Whatsapp Number"
                placeholder="Enter Number"
                defaultValue={fetchData?.wamob}
                onChange={handleInputChange}
              />
              <Input
                name="contactEmail"
                className="bg-gray-50"
                variant="outlined"
                label="Email ID"
                placeholder="Enter Email Id"
                defaultValue={fetchData?.contactEmail}
                onChange={handleInputChange}
              />
              <Input
                name="DOJ"
                className="bg-gray-50"
                type="date"
                variant="outlined"
                label="DOJ"
                defaultValue={fetchData?.DOJ}
                onChange={handleInputChange}

                // onChange={(e)=>setDoj(e.target.value)}

              />
              <Input
                name="aadharNo"
                className="bg-gray-50"
                variant="outlined"
                label="Adhar Number"
                placeholder="Adhar NO"
                onChange={handleInputChange}
                defaultValue={fetchData?.aadharNo}
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
                name="maritalStatus"
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
                onChange={handleInputChange}
                defaultValue={fetchData?.nationality}
              />
              <Input
                name="state"
                className="bg-gray-50"
                variant="outlined"
                label="State"
                placeholder="Enter State"
                onChange={handleInputChange}
                defaultValue={fetchData?.state}
              />

              <Input
                name="city"
                className="bg-gray-50"
                variant="outlined"
                label="City"
                placeholder="Enter City"
                onChange={handleInputChange}
                defaultValue={fetchData?.city}
              />

              <Input
                name="pin"
                className="bg-gray-50"
                variant="outlined"
                label="PIN"
                placeholder="Enter PIN"
                onChange={handleInputChange}
                defaultValue={fetchData?.pin}
              />

              <Select
                name="religion"
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
                label="Job Type "
                value={jobTypeState[0]}
                onChange={(e) => jobTypeState[0](e)}
              >
                <Option value="Teaching">Teaching</Option>
                <Option value="Non-Teaching">Non-Teaching</Option>
              </Select>
              <Select
                name="jobRole"
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
                Please complete all fields.
              </span>
            </div>

            <div className="Laptop:grid Laptop:grid-cols-4 ipad:grid ipad:grid-cols-3 Tablet:grid Tablet:grid-cols-3 mobile:grid mobile:grid-cols-1 gap-4 p-8 ">
              <div className="flex w-full  items-center bg-gray-100 rounded-md p-2 border-b-2">
                <Typography className="text-lg font-semibold">
                  BANK Details :-
                </Typography>
              </div>
              <Select
                name="accType"
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
                onChange={handleInputChange}
                defaultValue={fetchData?.bankAccountNumber}
              />
              <Input
                name="bankAccountName"
                variant="outlined"
                label="Account Name"
                placeholder="Enter Name"
                onChange={handleInputChange}
                defaultValue={fetchData?.bankAccountName}
              />
              <Input
                name="bankName"
                variant="outlined"
                label="Bank Name"
                placeholder="Enter Name"
                onChange={handleInputChange}
                defaultValue={fetchData?.bankName}
              />
              <Input
                name="bankBranchName"
                variant="outlined"
                label="Branch"
                placeholder="Enter Branch Name"
                onChange={handleInputChange}
                defaultValue={fetchData?.bankBranchName}
              />
              <Input
                name="bankIFSEcode"
                variant="outlined"
                label="IFSE Code"
                placeholder="Enter IFSE Code"
                onChange={handleInputChange}
                defaultValue={fetchData?.bankIFSEcode}
              />

              <Textarea
                name="otherBankdetails"
                variant="outlined"
                placeholder="Enter here More Details"
                onChange={handleInputChange}
                defaultValue={fetchData?.otherBankdetails}
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

            <Button fullWidth color="blue" type="submit" loading={isLoading}>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditSraffDetails;


