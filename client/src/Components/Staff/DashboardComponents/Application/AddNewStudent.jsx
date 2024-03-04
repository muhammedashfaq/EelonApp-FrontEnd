import {
  Alert,
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../../../spinner/SpinningLoader";
import { RouteObjects } from "../../../../Routes/RoutObjects";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import { addStudentsValidation } from "../../../../Helper/Validations/validations";

const AddNewStudent = ({ AcademicYrs }) => {
  const [applicantData, setApplicantData] = useState([]);

  const { id } = useParams();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const [bloodGp, setbloodGp] = useState();
  const [motherTongue, setmotherTongue] = useState();
  const [religion, setreligion] = useState();
  const [community, setcommunity] = useState();
  const [concessionStudent, setconcessionStudent] = useState(false);
  const [studentCategory, setstudentCategory] = useState();
  const [studentGp, setstudentGp] = useState();
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
    gender: "",
    classSection: "",
    bloodGp: "",
    motherTongue: "",
    religion: "",
    community: "",
    concessionStudent: "",
    studentCategory: "",
    board: "",
    DOB: "",
  });
  const [formData, setFormdata] = useState({
    nameTamil: "",
    AadharNo: "",
    AltCnctNo: "",
    weight: "",
    height: "",
    email: "",
    password: "",
    nationality: "",
    studentGp: "",
    caste: "",
    subCaste: "",
    state: "",
    city: "",
    pincode: "",
    dateOfJoin: "",
    EMSno: "",
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
    console.log(event, "data");
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

  const reqData = {
    ...formData,
    admnId: id,
    gender: applicantData?.gender,
    bloodGp,
    motherTongue,
    religion,
    community,
    classOfJoin: applicantData.classApplied,
    concessionStudent,
    studentCategory,
    studentGp,
    studentName: applicantData.studentName,
    group: applicantData?.group,
    mediumOfInstruction: applicantData?.mediumOfInstruction,
    board: applicantData?.board,
    academicYear: applicantData?.academicYear,
    address: applicantData?.address,
    admnNo: applicantData?.admnNo,
    ContactNo: applicantData?.ContactNo,
    FathersName: applicantData?.FathersName,
    DOB: applicantData?.DOB,
  };

  const handleSubmitForm = async (event) => {
    try {
      event.preventDefault();
      const addstudentErrors = addStudentsValidation(reqData);
      console.log(addstudentErrors);
      if (!Object.values(addstudentErrors).every((error) => error === "")) {
        setFrntentErors(addstudentErrors);
        return;
      } else {
        setIsLoading(true);
        const response = await axiosPrivate.post("/users/student", reqData);
        console.log(response, "resaddd");
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
        setIsLoading(false);
        navigate(`${RouteObjects.StudentsList}/${1}`);
      }
    } catch (error) {
      setIsLoading(false);

      console.log(error);
    }
  };
  const getAplicant = async () => {
    try {
      const response = await axiosPrivate.get(`/admission/${id}`);
      console.log(response, "ressspo");
      setApplicantData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAplicant();
  }, []);
  return (
    <div className=" w-screen">
      {isLoading && <Spinner />}

      <div className="flex justify-center">
        <div className=" border-2 rounded-lg shadow-lg  mt-2 ">
          <div className="bg-blue-900 rounded-t-lg flex justify-center items-center h-10 text-white ">
            <h1 className="text-2xl">Add student </h1>
          </div>
          <form onSubmit={handleSubmitForm}>
            <div className="px-6 pt-6 bg-green-100 mx-2 flex justify-between items-center">
              <Typography variant="lead" className="font-semibold text-2xl">
                Personal Details
              </Typography>
              <div className="w-96 m-2"></div>
              <hr />
            </div>
            <div className=" mt-6">
              <span className="ml-10 text-sm text-red-600">
                <FontAwesomeIcon icon={faInfoCircle} />
                Please complete all required fields.
              </span>
            </div>
            <div className=" gap-4 p-8 Laptop:grid Laptop:grid-cols-4 Tablet:grid Tablet:grid-cols-3 ipad:grid ipad:grid-cols-3 mobile:grid mobile:grid-cols-2">
              <Input
                className="bg-brown-50"
                name="studentName"
                type="text"
                variant="outlined"
                value={applicantData.studentName}
                label={
                  frntentErors && frntentErors.studentName
                    ? frntentErors.studentName
                    : "Student Name"
                }
                placeholder=" Name*"
                onChange={handleInputChange}
                error={frntentErors && frntentErors.studentName ? true : false}
              />
              <Input
                className="bg-brown-50"
                name="nameTamil"
                type="text"
                variant="outlined"
                label="Name In Tamil"
                placeholder="Name In Tamil"
                onChange={handleInputChange}
              />
              <Input
                className="bg-brown-50"
                value={applicantData.gender}
                variant="outlined"
                label="Gender"
              />

              <Input
                className="bg-brown-50"
                label="DOB"
                value={applicantData?.DOB}
              />
              <Input
                className="bg-brown-50"
                name="AadharNo"
                type="number"
                variant="outlined"
                label={
                  frntentErors && frntentErors.AadharNo
                    ? frntentErors.AadharNo
                    : "Adhar Number"
                }
                placeholder="Adhar Number"
                error={frntentErors && frntentErors.AadharNo ? true : false}
                onChange={handleInputChange}
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
                className="bg-brown-50"
                variant="outlined"
                label="Contact Number"
                value={applicantData?.ContactNo}
              />
              <Input
                className="bg-brown-50"
                name="AltCnctNo"
                type="tel"
                variant="outlined"
                label={
                  frntentErors && frntentErors.ContactNo
                    ? frntentErors.ContactNo
                    : "Alternate Number"
                }
                placeholder="Alternate Number"
                error={frntentErors && frntentErors.ContactNo ? true : false}
                onChange={handleInputChange}
              />
              <Input
                className="bg-brown-50"
                variant="outlined"
                name="city"
                label="City"
                placeholder="City"
                onChange={handleInputChange}
              />
              <Input
                className="bg-brown-50"
                variant="outlined"
                name="state"
                label="State"
                placeholder="state"
                onChange={handleInputChange}
              />

              <Input
                className="bg-brown-50"
                name="nationality"
                type="text"
                variant="outlined"
                label="Nationality"
                placeholder="outlined"
                onChange={handleInputChange}
              />
              <Input
                className="bg-brown-50"
                variant="outlined"
                name="pincode"
                label="Pin"
                placeholder="Pin"
                onChange={handleInputChange}
              />

              <Select
                variant="outlined"
                value={motherTongue}
                onChange={(e) => setmotherTongue(e)}
                label="Mother Tongue"
              >
                <Option value="Tamil">Tamil</Option>
                <Option value="Hindi">Hindi</Option>
                <Option value="Malayalam">Malayalam</Option>
              </Select>

              <Select
                variant="outlined"
                value={religion}
                onChange={(e) => setreligion(e)}
                label="Religion"
              >
                <Option value="Hindu">Hindu</Option>
                <Option value="Muslim">Muslim</Option>
                <Option value="Christian">Christian</Option>
                <Option value="Other">Other</Option>
              </Select>
              <Input
                className="bg-brown-50"
                name="caste"
                type="text"
                variant="outlined"
                label="Caste"
                placeholder="Caste"
                onChange={handleInputChange}
              />
              <Input
                className="bg-brown-50"
                name="subCaste"
                type="text"
                variant="outlined"
                label="SubCaste"
                placeholder="SubCaste"
                onChange={handleInputChange}
              />
              <Select
                variant="outlined"
                value={community}
                onChange={(e) => setcommunity(e)}
                label="Community"
              >
                <Option value="BC">BC</Option>
                <Option value="OBC">OBC</Option>
                <Option value="SC">SC</Option>
                <Option value="ST">ST</Option>
                <Option value="Other">Other</Option>
              </Select>

              <Input
                className="bg-brown-50"
                name="weight"
                type="number"
                variant="outlined"
                label="Weight"
                placeholder="Weight"
                onChange={handleInputChange}
              />
              <Input
                className="bg-brown-50"
                name="height"
                type="number"
                variant="outlined"
                label="Height"
                placeholder="Height"
                onChange={handleInputChange}
              />

              <Textarea
                variant="outlined"
                name="address"
                label="Address"
                defaultValue={applicantData?.address}
              />
            </div>
            <div className="px-6 pt-6 bg-green-100 mx-2">
              <Typography variant="lead" className="font-semibold text-2xl">
                Guardian Details
              </Typography>
              <hr />
            </div>
            <div className=" gap-4 p-8 Laptop:grid Laptop:grid-cols-4 Tablet:grid Tablet:grid-cols-3 ipad:grid ipad:grid-cols-3 mobile:grid mobile:grid-cols-2">
              <Input
                className="bg-brown-50"
                variant="outlined"
                label="Father's Name"
                value={applicantData.FathersName}
              />
              <Input
                className="bg-brown-50"
                name="FathersNameTamil"
                type="text"
                variant="outlined"
                label="Father's Name in Tamil"
                placeholder="Father's Name in Tamil"
                onChange={handleInputChange}
              />

              <Input
                className="bg-brown-50"
                name="FathersJob"
                type="text"
                variant="outlined"
                label="Father's Occupation"
                placeholder="Father's Occupation"
                onChange={handleInputChange}
              />
              <Input
                className="bg-brown-50"
                name="MothersName"
                type="text"
                variant="outlined"
                label="Mother's Name"
                placeholder="Mother's Name"
                onChange={handleInputChange}
              />
              <Input
                className="bg-brown-50"
                name="MothersNameTamil"
                type="text"
                variant="outlined"
                label="Mother's Name in Tamil"
                placeholder="Mother's Name in Tamil"
                onChange={handleInputChange}
              />
              <Input
                className="bg-brown-50"
                name="MothersJob"
                type="text"
                variant="outlined"
                label="Mother's Occupation"
                placeholder="Mother's Occupation"
                onChange={handleInputChange}
              />

              <Input
                className="bg-brown-50"
                name="guardianName"
                type="text"
                variant="outlined"
                label="Guardian's Name"
                placeholder="Guardian's Name"
                onChange={handleInputChange}
              />
              <Input
                className="bg-brown-50"
                name="guardianNameTamil"
                type="text"
                variant="outlined"
                label="Guardian's Name in Tamil"
                placeholder="Guardian's Name in Tamil"
                onChange={handleInputChange}
              />
              <Input
                className="bg-brown-50"
                name="guardiansJob"
                type="text"
                variant="outlined"
                label="Guardian's Occupation"
                placeholder="Guardian's Occupation"
                onChange={handleInputChange}
              />

              <Input
                className="bg-brown-50"
                name="annualIncome"
                type="number"
                variant="outlined"
                label="Annual Income"
                placeholder="Annual Income"
                onChange={handleInputChange}
              />
            </div>

            <div className="px-6 pt-6 bg-green-100 mx-2">
              <Typography variant="lead" className="font-semibold text-2xl">
                Admission Details
              </Typography>
              <hr />
            </div>

            <div className=" gap-4 p-8 Laptop:grid Laptop:grid-cols-4 Tablet:grid Tablet:grid-cols-3 ipad:grid ipad:grid-cols-3 mobile:grid mobile:grid-cols-2">
              <Input
                className="bg-brown-50"
                variant="outlined"
                label="Admission Number"
                value={applicantData.admnNo}
              />
              <Input
                className="bg-brown-50"
                variant="outlined"
                label="Board"
                value={applicantData.board}
              />

              <Input
                className="bg-brown-50"
                value={applicantData?.academicYear}
                variant="outlined"
                label="Academic Year"
              />

              <Input
                className="bg-brown-50"
                name="email"
                type="email"
                variant="outlined"
                label={
                  frntentErors && frntentErors.email
                    ? frntentErors.email
                    : "Email"
                }
                placeholder="Enter Your Email"
                error={frntentErors && frntentErors.email ? true : false}
                onChange={handleInputChange}
              />
              <Input
                className="bg-brown-50"
                name="password"
                type="password"
                variant="outlined"
                label="Password"
                placeholder="********"
                onChange={handleInputChange}
              />
              <Input
                className="bg-brown-50"
                variant="outlined"
                label="Class Of Joining"
                value={applicantData?.classApplied}
              />
              <Input
                className="bg-brown-50"
                variant="outlined"
                label="Group"
                value={applicantData?.group}
              />

              <Input
                className="bg-brown-50"
                name="EMSno"
                type="number"
                variant="outlined"
                label="EMIS Number"
                placeholder="EMIS Number"
                onChange={handleInputChange}
              />

              <Input
                className="bg-brown-50"
                variant="outlined"
                label="Medium"
                value={applicantData.mediumOfInstruction}
              />

              <Select
                variant="outlined"
                value={concessionStudent}
                onChange={(e) => setconcessionStudent(e)}
                label="Concession Student"
              >
                <Option value={true}>Yes</Option>
                <Option value={false}>No</Option>
              </Select>

              <Select
                variant="outlined"
                label="Category"
                placeholder="Student Category"
                value={studentCategory}
                onChange={(e) => setstudentCategory(e)}
              >
                <Option value="daySchool">Day School</Option>
                <Option value="daySchool">Hostel</Option>
              </Select>

              <Select
                variant="outlined"
                label="Student Group"
                placeholder="Student Group"
                value={studentGp}
                onChange={(e) => setstudentGp(e)}
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

export default AddNewStudent;
