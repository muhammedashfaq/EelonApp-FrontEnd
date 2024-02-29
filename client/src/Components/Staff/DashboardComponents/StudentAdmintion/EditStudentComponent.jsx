import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import axios from "../../../../api/axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../../spinner/SpinningLoader";
import { RouteObjects } from "../../../../Routes/RoutObjects";
import Swal from "sweetalert2";
import { addStudentsValidation } from "../../../../Helper/Validations/validations";

const useDropdownState = (initialValue, fetchedValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (fetchedValue !== undefined) {
      setValue(fetchedValue);
    }
  }, [fetchedValue]);

  return [value, setValue];
};
const EditStudentComponent = ({ acYr, name }) => {
  const [fetData, setFetchData] = useState("");
  const classSectionState = useDropdownState("", fetData?.classSection);
  const bloodGpState = useDropdownState("", fetData?.bloodGp);
  const motherTongueState = useDropdownState("", fetData?.motherTongue);
  const religionState = useDropdownState("", fetData?.religion);
  const communityState = useDropdownState("", fetData?.community);
  const classOfJoinState = useDropdownState("", fetData?.classOfJoin);
  const mediumOfInstructionState = useDropdownState(
    "",
    fetData?.mediumOfInstruction
  );
  const concessionStudentState = useDropdownState(
    "",
    fetData?.concessionStudent
  );
  const academicYearState = useDropdownState("", fetData?.academicYear);
  const studentCategoryState = useDropdownState("", fetData?.studentCategory);
  const studentGpState = useDropdownState("", fetData?.studentGp);
  const genderState = useDropdownState("", fetData?.gender);
  const [DOB, setDOB] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [frntentErors, setFrntentErors] = useState({
    admnNo: "",
    studentName: "",
    nameTamil: "",
    studentPhoto: "",
    AadharNo: "",
    ContactNo: "",
    AltCnctNo: "",
    address: "",
    weight: "",
    height: "",
    email: "",
    password: "",
    nationality: "",
    mediumOfInstruction: "",
    academicYear: "",
    studentGp: "",
    caste: "",
    subCaste: "",
    state: "",
    city: "",
    pincode: "",
    dateOfJoin: "",
    classOfJoin: "",
    EMSno: "",
    FathersName: "",
    FathersNameTamil: "",
    FathersJob: "",
    MothersName: "",
    MothersNameTamil: "",
    MothersJob: "",
    guardianName: "",
    guardianNameTamil: "",
    guardiansJob: "",
    annualIncome: "",
    gender:"",
    classSection:"",
    bloodGp:"",
    motherTongue:"",
    religion:"",
    community:"",
    concessionStudent:"",
    studentCategory:"",
    board:"",
    DOB:"",

  });
  const [formData, setFormdata] = useState({
    admnNo: "",
    studentName: "",
    nameTamil: "",
    studentPhoto: "",
    AadharNo: "",
    ContactNo: "",
    AltCnctNo: "",
    address: "",
    weight: "",
    height: "",
    email: "",
    password: "",
    nationality: "",
    mediumOfInstruction: "",
    academicYear: "",
    studentGp: "",
    caste: "",
    subCaste: "",
    state: "",
    city: "",
    pincode: "",
    dateOfJoin: "",
    classOfJoin: "",
    EMSno: "",
    FathersName: "",
    FathersNameTamil: "",
    FathersJob: "",
    MothersName: "",
    MothersNameTamil: "",
    MothersJob: "",
    guardianName: "",
    guardianNameTamil: "",
    guardiansJob: "",
    annualIncome: "",
  });
  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;

    const inputValue =
      type === "number"
        ? parseFloat(value)
        : type === "checkbox"
        ? checked
        : value;

    setFormdata((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const reqData = { 
      ...formData,
      gender: genderState[0],
      bloodGp: bloodGpState[0],
      motherTongue: motherTongueState[0],
      religion: religionState[0],
      community: communityState[0],
      classOfJoin: classOfJoinState[0],
      mediumOfInstruction: mediumOfInstructionState[0],
      concessionStudent: concessionStudentState[0],
      studentCategory: studentCategoryState[0],
      studentGp: studentGpState[0],
      classId: classSectionState[0],
      academicYear:fetData?.academicYear,
      DOB,
    };
    try {
      console.log(reqData, "dfgkhfs");
      const addstudentErrors = addStudentsValidation(reqData);
      if (!Object.values(addstudentErrors).some((error) => error === "")) {
        // There are validation errors
        console.log(addstudentErrors,"inside");

        setFrntentErors(addstudentErrors)
        return;
      } else {
        
        console.log(addstudentErrors,"after");
        setIsLoading(true);
        
        
        const response = await axios.put(`/users/student/${id}`, reqData);
        
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
        console.log(response, "respo");
        navigate(`${RouteObjects.StudentsList}/${1}`);
        setIsLoading(false);
      }
      } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };

  const getData = async () => {
    try {
      setIsLoading(true);

      const response = await axios.get(`/users/student/${id}`);
      setIsLoading(false);

      setFetchData(response.data);
      setFormdata(response.data);
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" w-screen">
      {isLoading && <Spinner />}

      <div className="flex justify-center">
        <div className=" border-2 rounded-lg shadow-lg  mt-2 ">
          <div className="bg-blue-900 rounded-t-lg flex justify-center items-center h-10 text-white ">
            <h1 className="text-2xl">
              Edit{" "}
              <span className="font-semibold m-1 ">{name ? name : ""}</span>
              Details{" "}
            </h1>
          </div>
          <form onSubmit={handleSubmitForm}>
            <div className="px-6 pt-6">
              <Typography variant="lead">Personal Details</Typography>
              <hr />
            </div>

            <div className=" flex flex-wrap gap-6 p-8 lg:grid lg:grid-cols-4 ">
              <Input
                name="studentName"
                type="text"
                variant="outlined"
                label="Student Name*"
                defaultValue={fetData?.studentName}
                onChange={handleInputChange}
              />
              <Input
                name="nameTamil"
                type="text"
                variant="outlined"
                label="Name In Tamil"
                placeholder="Name In Tamil"
                defaultValue={fetData?.nameTamil}
                onChange={handleInputChange}
              />
              <Select
                variant="outlined"
                value={genderState[0]}
                onChange={(e) => genderState[1](e)}
                label="Gender"
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Others">Others</Option>
              </Select>

              <Input
                type="date"
                variant="outlined"
                label="DOB"
                placeholder="DOB"
                onChange={(e) => setDOB(e.target.value)}
                defaultValue={fetData?.DOB}
              />
              <Input
                name="AadharNo"
                type="number"
                variant="outlined"
                label="Adhar Number"
                placeholder="Adhar Number"
                onChange={handleInputChange}
                defaultValue={fetData?.AadharNo}
              />
              <Select
                variant="outlined"
                value={bloodGpState[0]}
                onChange={(e) => bloodGpState[1](e)}
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
                name="ContactNo"
                type="number"
                variant="outlined"
                label="Contact Number"
                placeholder="Contact Number"
                defaultValue={fetData?.ContactNo}
                onChange={handleInputChange}
              />
              <Input
                name="AltCnctNo"
                type="number"
                variant="outlined"
                label="Alternate Number"
                placeholder="Alternate Number"
                defaultValue={fetData?.AltCnctNo}
                onChange={handleInputChange}
              />
              <Input
                variant="outlined"
                name="city"
                label="City"
                placeholder="City"
                onChange={handleInputChange}
                defaultValue={fetData?.city}
              />
              <Input
                variant="outlined"
                name="state"
                label="State"
                placeholder="state"
                onChange={handleInputChange}
                value={fetData?.state}
              />

              <Input
                name="nationality"
                type="text"
                variant="outlined"
                label="Nationality"
                placeholder="outlined"
                defaultValue={fetData.nationality}
                onChange={handleInputChange}
              />
              <Input
                variant="outlined"
                name="pincode"
                label="Pin"
                placeholder="Pin"
                defaultValue={fetData.pincode}
                onChange={handleInputChange}
              />

              <Select
                variant="outlined"
                value={motherTongueState[0]}
                onChange={(e) => motherTongueState[1](e)}
                label="Mother Tongue"
              >
                <Option value="Tamil">Tamil</Option>
                <Option value="Hindi">Hindi</Option>
                <Option value="Malayalam">Malayalam</Option>
              </Select>

              <Select
                variant="outlined"
                value={religionState[0]}
                onChange={(e) => religionState[1](e)}
                label="Religion"
              >
                <Option value="Hindu">Hindu</Option>
                <Option value="Muslim">Muslim</Option>
                <Option value="Christian">Christian</Option>
                <Option value="Other">Other</Option>
              </Select>
              <Input
                name="caste"
                type="text"
                variant="outlined"
                label="Caste"
                placeholder="Caste"
                defaultValue={fetData?.caste}
                onChange={handleInputChange}
              />
              <Input
                name="subCaste"
                type="text"
                variant="outlined"
                label="SubCaste"
                placeholder="SubCaste"
                defaultValue={fetData?.subCaste}
                onChange={handleInputChange}
              />
              <Select
                variant="outlined"
                value={communityState[0]}
                onChange={(e) => communityState[1](e)}
                label="Community"
              >
                <Option value="BC">BC</Option>
                <Option value="OBC">OBC</Option>
                <Option value="SC">SC</Option>
                <Option value="ST">ST</Option>
                <Option value="Other">Other</Option>
              </Select>

              <Input
                name="weight"
                type="number"
                variant="outlined"
                label="Weight"
                placeholder="Weight"
                defaultValue={fetData?.weight}
                onChange={handleInputChange}
              />
              <Input
                name="height"
                type="number"
                variant="outlined"
                label="Height"
                placeholder="Height"
                defaultValue={fetData?.height}
                onChange={handleInputChange}
              />

              <Textarea
                variant="outlined"
                name="address"
                label="Address"
                defaultValue={fetData?.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="px-6 pt-6">
              <Typography variant="lead">Guardian Details</Typography>
              <hr />
            </div>
            <div className=" flex flex-wrap gap-6 p-8 lg:grid lg:grid-cols-4 ">
              <Input
                name="FathersName"
                type="text"
                variant="outlined"
                label="Father's Name"
                placeholder="Father's Name"
                defaultValue={fetData?.FathersName}
                onChange={handleInputChange}
              />
              <Input
                name="FathersNameTamil"
                type="text"
                variant="outlined"
                label="Father's Name in Tamil"
                placeholder="Father's Name in Tamil"
                defaultValue={fetData?.FathersNameTamil}
                onChange={handleInputChange}
              />

              <Input
                name="FathersJob"
                type="text"
                variant="outlined"
                label="Father's Occupation"
                placeholder="Father's Occupation"
                defaultValue={fetData?.FathersJob}
                onChange={handleInputChange}
              />
              <Input
                name="MothersName"
                type="text"
                variant="outlined"
                label="Mother's Name"
                placeholder="Mother's Name"
                defaultValue={fetData?.MothersName}
                onChange={handleInputChange}
              />
              <Input
                name="MothersNameTamil"
                type="text"
                variant="outlined"
                label="Mother's Name in Tamil"
                placeholder="Mother's Name in Tamil"
                defaultValue={fetData?.MothersNameTamil}
                onChange={handleInputChange}
              />
              <Input
                name="MothersJob"
                type="text"
                variant="outlined"
                label="Mother's Occupation"
                placeholder="Mother's Occupation"
                defaultValue={fetData?.MothersJob}
                onChange={handleInputChange}
              />

              <Input
                name="guardianName"
                type="text"
                variant="outlined"
                label="Guardian's Name"
                placeholder="Guardian's Name"
                defaultValue={fetData?.guardianName}
                onChange={handleInputChange}
              />
              <Input
                name="guardianNameTamil"
                type="text"
                variant="outlined"
                label="Guardian's Name in Tamil"
                placeholder="Guardian's Name in Tamil"
                defaultValue={fetData?.guardianNameTamil}
                onChange={handleInputChange}
              />
              <Input
                name="guardiansJob"
                type="text"
                variant="outlined"
                label="Guardian's Occupation"
                placeholder="Guardian's Occupation"
                defaultValue={fetData?.guardianName}
                onChange={handleInputChange}
              />

              <Input
                name="annualIncome"
                type="number"
                variant="outlined"
                label="Annual Income"
                placeholder="Annual Income"
                defaultValue={fetData?.annualIncome}
                onChange={handleInputChange}
              />
            </div>

            <div className="px-6 pt-6">
              <Typography variant="lead">Admission Details</Typography>
              <hr />
            </div>

            <div className=" flex flex-wrap gap-6 p-8 lg:grid lg:grid-cols-4 ">
              <Input
                name="admnNo"
                type="number"
                variant="outlined"
                label="Admission Number*"
                placeholder="Admission Number*"
                defaultValue={fetData?.admnNo}
                onChange={handleInputChange}
              />
              <Input
               
                variant="outlined"
                label="Academic Year"
                placeholder="Admission Number*"
                value={fetData?.academicYear}
              />

              <Input
                name="email"
                type="email"
                variant="outlined"
                label="Email"
                placeholder="Enter Your Email"
                defaultValue={fetData?.email}
                onChange={handleInputChange}
              />
              <Input
                name="password"
                type="password"
                variant="outlined"
                label="Password"
                placeholder="********"
                defaultValue={fetData?.password}
                onChange={handleInputChange}
              />
              <Select
                variant="outlined"
                value={classOfJoinState[0]}
                onChange={(e) => classOfJoinState[1](e)}
                label="Class Of Joining"
              >
                <Option value="01">First std</Option>
                <Option value="02">Second std</Option>
                <Option value="03">Third std</Option>
                <Option value="04">Fourth std</Option>
                <Option value="05">Fifth std</Option>
                <Option value="06">Sixth std</Option>
                <Option value="07">Seventh std</Option>
                <Option value="08">Eighth std</Option>
                <Option value="09">Nineth std</Option>
                <Option value="10">Tenth std</Option>
                <Option value="11">Plus one</Option>
                <Option value="12">Plus two</Option>
              </Select>

              <Input
                name="EMSno"
                type="number"
                variant="outlined"
                label="EMIS Number"
                placeholder="EMIS Number"
                defaultValue={fetData?.EMSno}
                onChange={handleInputChange}
              />

              <Select
                variant="outlined"
                value={mediumOfInstructionState[0]}
                onChange={(e) => mediumOfInstructionState[1](e)}
                label="Medium of Instruction"
              >
                <Option value="Tamil">Tamil</Option>
                <Option value="English">English</Option>
              </Select>

              <Select
                variant="outlined"
                value={concessionStudentState[0]}
                onChange={(e) => concessionStudentState[1](e)}
                label="Concession Student"
              >
                <Option value={true}>Yes</Option>
                <Option value={false}>No</Option>
              </Select>

              <Select
                variant="outlined"
                label="Category"
                placeholder="Student Category"
                value={studentCategoryState[0]}
                onChange={(e) => studentCategoryState[1](e)}
              >
                <Option value="daySchool">Day School</Option>
                <Option value="daySchool">Hostel</Option>
              </Select>

              <Select
                variant="outlined"
                label="Student Group"
                placeholder="Student Group"
                value={studentGpState[0]}
                onChange={(e) => studentGpState[1](e)}
              >
                <Option value="Blue">Blue</Option>
                <Option value="Red">Red</Option>
                <Option value="Yellow">Yellow</Option>
                <Option value="Green">Green</Option>
              </Select>
            </div>
            <div className=" flex justify-center w-full">
              <Button type="submit" className="m-2 w-80 font-bold" color="blue">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditStudentComponent;
