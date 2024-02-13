import {
  Alert,
  Button,
  Input,
  Option,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "../../../spinner/SpinningLoader";
import { RouteObjects } from "../../../../Routes/RoutObjects";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
const AddStudent = () => {
  const axiosPrivate =useAxiosPrivate()
  const navigate =useNavigate()
  const [classes, setClasses] = useState("");
  const [gender, setgender] = useState();
  const [std, setstd] = useState();
  const [section, setsection] = useState();
  const [bloodGp, setbloodGp] = useState();
  const [motherTongue, setmotherTongue] = useState();
  const [religion, setreligion] = useState();
  const [community, setcommunity] = useState();
  const [classOfJoin, setclassOfJoin] = useState();
  const [mediumOfInstruction, setmediumOfInstruction] = useState();
  const [concessionStudent, setconcessionStudent] = useState(false);
  const [academicYear, setacademicYear] = useState();
  const [studentCategory, setstudentCategory] = useState();
  const [studentGp, setstudentGp] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [frntentErors,setFrntentErors]=useState("")

  const [formData, setFormdata] = useState({
    admnNo: "",
    studentName: "",
    nameTamil: "",
    DOB: "",
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
    console.log(event,'data')
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
      gender,
      std,
      section,
      bloodGp,
      motherTongue,
      religion,
      community,
      classOfJoin,
      mediumOfInstruction,
      concessionStudent,
      academicYear,
      studentCategory,
      studentGp,
    };
    if(!reqData.studentName){
      setFrntentErors("Please fill required Fields")
      return;
    }
    console.log(formData.DOB,"dob");
    try {
      setIsLoading(true)
      const response = await axiosPrivate.post("/users/student", reqData);
      setIsLoading(false)
      navigate(RouteObjects.StudentsList)


    } catch (error) {
      setIsLoading(false)

      console.log(error);
    }
  };
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
              
              <Typography variant="lead" className="font-semibold text-2xl">Personal Details</Typography>
              <div className="w-96 m-2">

              </div>
              <hr />
            </div>
            <div className=" mt-6">

<span className="ml-10  opacity-70 " ><FontAwesomeIcon icon={faInfoCircle} className="opacity-30" /> Please complete all required fields.</span>
            </div>
            <div className=" gap-4 p-8 Laptop:grid Laptop:grid-cols-4 Tablet:grid Tablet:grid-cols-3 ipad:grid ipad:grid-cols-3 mobile:grid mobile:grid-cols-2">
              
              <Input
                required
                name="studentName"
                type="text"
                variant="outlined"
                label={
                  frntentErors && frntentErors ? frntentErors : "Student Name"
                }        
                placeholder=" Name*"
                onChange={handleInputChange}
                error={frntentErors}
              />
              <Input
              
                 name="nameTamil"
                type="text"
                variant="outlined"
                label="Name In Tamil"
                placeholder="Name In Tamil"
                onChange={handleInputChange}
              />
              <Select

                variant="outlined"
                value={gender}
                onChange={(e) => setgender(e)}
                label="Gender**"
                 error={frntentErors?.frntentErors}
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Others">Others</Option>
              </Select>

              <Input
               name="DOB"
                type="date"
                variant="outlined"
                label="DOB"
                placeholder="DOB"
                onChange={handleInputChange}

              />
              <Input
              required
                name="AadharNo"
                type="number"
                variant="outlined"
                label="Adhar Number"
                placeholder="Adhar Number"
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
              required
                name="ContactNo"
                type="tel"
                variant="outlined"
                label="Contact Number"
                placeholder="Contact Number
            "
                onChange={handleInputChange}
              />
              <Input
                name="AltCnctNo"
                type="tel"
                variant="outlined"
                label="Alternate Number"
                placeholder="Alternate Number"
                onChange={handleInputChange}
              />
              <Input
              required
                variant="outlined"
                name="city"
                label="City"
                placeholder="City"
                onChange={handleInputChange}
              />
              <Input
              required
                variant="outlined"
                name="state"
                label="State"
                placeholder="state"
                onChange={handleInputChange}
              />

              <Input
              required
                name="nationality"
                type="text"
                variant="outlined"
                label="Nationality"
                placeholder="outlined"
                onChange={handleInputChange}
              />
              <Input
              required
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
              </Select>
              <Input
                name="caste"
                type="text"
                variant="outlined"
                label="Caste"
                placeholder="Caste"
                onChange={handleInputChange}
              />
              <Input
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
              </Select>

              <Input
                name="weight"
                type="number"
                variant="outlined"
                label="Weight"
                placeholder="Weight"
                onChange={handleInputChange}
              />
              <Input
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
                onChange={handleInputChange}
              />
            </div>
            <div className="px-6 pt-6 bg-green-100 mx-2">
              <Typography variant="lead" className="font-semibold text-2xl" >Guardian Details</Typography>
              <hr />
            </div>
            <div className=" gap-4 p-8 Laptop:grid Laptop:grid-cols-4 Tablet:grid Tablet:grid-cols-3 ipad:grid ipad:grid-cols-3 mobile:grid mobile:grid-cols-2">
              <Input
              required
                name="FathersName"
                type="text"
                variant="outlined"
                label="Father's Name"
                placeholder="Father's Name"
                onChange={handleInputChange}
              />
              <Input
              required
                name="FathersNameTamil"
                type="text"
                variant="outlined"
                label="Father's Name in Tamil"
                placeholder="Father's Name in Tamil"
                onChange={handleInputChange}
              />

              <Input
              required

                name="FathersJob"
                type="text"
                variant="outlined"
                label="Father's Occupation"
                placeholder="Father's Occupation"
                onChange={handleInputChange}
              />
              <Input
                name="MothersName"
                type="text"
                variant="outlined"
                label="Mother's Name"
                placeholder="Mother's Name"
                onChange={handleInputChange}
              />
              <Input
                name="MothersNameTamil"
                type="text"
                variant="outlined"
                label="Mother's Name in Tamil"
                placeholder="Mother's Name in Tamil"
                onChange={handleInputChange}
              />
              <Input
                name="MothersJob"
                type="text"
                variant="outlined"
                label="Mother's Occupation"
                placeholder="Mother's Occupation"
                onChange={handleInputChange}
              />

              <Input
                name="guardianName"
                type="text"
                variant="outlined"
                label="Guardian's Name"
                placeholder="Guardian's Name"
                onChange={handleInputChange}
              />
              <Input
                name="guardianNameTamil"
                type="text"
                variant="outlined"
                label="Guardian's Name in Tamil"
                placeholder="Guardian's Name in Tamil"
                onChange={handleInputChange}
              />
              <Input
                name="guardiansJob"
                type="text"
                variant="outlined"
                label="Guardian's Occupation"
                placeholder="Guardian's Occupation"
                onChange={handleInputChange}
              />

              <Input
                name="annualIncome"
                type="number"
                variant="outlined"
                label="Annual Income"
                placeholder="Annual Income"
                onChange={handleInputChange}
              />
            </div>

            <div className="px-6 pt-6 bg-green-100 mx-2">
              <Typography variant="lead" className="font-semibold text-2xl">Admission Details</Typography>
              <hr />
            </div>

            <div className=" gap-4 p-8 Laptop:grid Laptop:grid-cols-4 Tablet:grid Tablet:grid-cols-3 ipad:grid ipad:grid-cols-3 mobile:grid mobile:grid-cols-2">
              <Input
              required

                name="admnNo"
                type="number"
                variant="outlined"
                label="Admission Number*"
                placeholder="Admission Number*"
                onChange={handleInputChange}
              />
              <Select
                variant="outlined"
                value={academicYear}
                onChange={(e) => setacademicYear(e)}
                label="Academic Year"
              >
                <Option value="2016-2017">2016-2017</Option>
                <Option value="2017-2018">2017-2018</Option>
                <Option value="2018-2019">2018-2019</Option>
                <Option value="2019-2020">2019-2020</Option>
                <Option value="2020-2021">2020-2021</Option>
                <Option value="2021-2022">2021-2022</Option>
                <Option value="2022-2023">2022-2023</Option>
                <Option value="2023-2024">2023-2024</Option>
              </Select>

              <Input
              required

                name="email"
                type="email"
                variant="outlined"
                label="Email"
                placeholder="Enter Your Email"
                onChange={handleInputChange}
              />
              <Input
              required

                name="password"
                type="password"
                variant="outlined"
                label="Password"
                placeholder="********"
                onChange={handleInputChange}
              />
              <Select
                variant="outlined"
                value={classOfJoin}
                onChange={(e) => setclassOfJoin(e)}
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
                onChange={handleInputChange}
              />
              <Select
                variant="outlined"
                value={std}
                onChange={(e) => setstd(e)}
                label="Class"
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
              <Select
                variant="outlined"
                value={section}
                onChange={(e) => setsection(e)}
                label="Section"
              >
                <Option value="A">A</Option>
                <Option value="B">B</Option>
                <Option value="C">C</Option>
              </Select>

              <Select
                variant="outlined"
                value={mediumOfInstruction}
                onChange={(e) => setmediumOfInstruction(e)}
                label="Medium of Instruction"
              >
                <Option value="Tamil">Tamil</Option>
                <Option value="English">English</Option>
              </Select>

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

export default AddStudent;
