import React, { useEffect, useState } from "react";
import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee } from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { RouteObjects } from "../../../../Routes/RoutObjects";
import AcademicYearDropdown from "../../../DropDowns/AcademicYearDropdown";

const NewApplication = () => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [classes, setClasses] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [contactError,setContactError]=useState("")
  const [academicYear, setAcademicYear] = useState("");
  const [board, setBoard] = useState("");
  const [medium, setMedium] = useState("");
  const [appliedClass, setApplicationClass] = useState("");
  const [group, setGroup] = useState("");
  const [gender,setgender]=useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    DOB: "",
    FathersName: "",
    ContactNo: "",
    address: "",
    admnNo: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;

    setFormData((pre) => ({
      ...pre,
      [id]: value,
    }));

    
  };

  const allData = {
    ...formData,
    gender,
    academicYear,
    group,
    board,
    mediumOfInstruction: medium,
    classApplied: appliedClass,
  };
  const handleSubmit = async () => {
    try {

      if( allData.ContactNo.length !== 10){
        setContactError("10-digit Number is required ") 
        return;
      }
      
      setContactError("")
      setIsLoading(true);
      console.log("Form submitted:", allData);
      const response = await axiosPrivate.post("/admission", allData);
      console.log(response, "neeww");
      if (response) {
        navigate(RouteObjects.NewApplicants);
      }
      setIsLoading(false);

    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    // Validate the form
    const isFormValid =
      allData.academicYear &&
      allData.board &&
      allData.mediumOfInstruction &&
      allData.classApplied &&
      allData.group &&
      allData.studentName &&
      allData.DOB &&
      allData.FathersName &&
      allData.ContactNo &&
      allData.address&&
      allData.gender;

    setIsFormValid(isFormValid);
  }, [allData]);

  const getAcYr = async () => {
    try {
      const response = await axiosPrivate.get(
        "classsection/academicyear/academicyear"
      );
      if (response) {
        const sortedData = response.data?.academicYear.sort((a, b) =>
          a.localeCompare(b)
        );
        setAcYr(sortedData);

        const response3 = await axiosPrivate.get("classsection/dropdowns/std");
        const sortedData2 = response3.data?.sort((a, b) => a.localeCompare(b));
        setClasses(sortedData2);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAcYr();
  }, []);

  return (
    <div className="m-6">
      <div className="flex justify-center items-center  ">
        <div className="w-full ">
          <div className="bg-dark-purple py-2 px-2">
            <span className="text-white font-normal">Application Form</span>
          </div>

          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3 shadow-sm border-2 px-6 py-6">
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="academicYear" className="text-sm">
                Academic Year
              </label>
              <AcademicYearDropdown setYear={setAcademicYear} label={"Select"} />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="medium" className="text-sm">
                Medium
              </label>
              <Select
                label="Select "
                id="medium"
                onChange={(e) => setMedium(e)}
                required
              >
                <Option value="Matriculation">Matriculation</Option>
                <Option value="Tamil">Tamil</Option>
                <Option value="English">English</Option>
              </Select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="parentName" className="text-sm">
                Admission Number
              </label>
              <Input
                variant="outlined"
                id="admnNo"
                type="text"
                placeholder=" Enter Here "
                className="w-full rounded-md dark:border-gray-700 dark:text-gray-900"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="studentName" className="text-sm">
                Student Name
              </label>
              <Input
                variant="outlined"
                id="studentName"
                type="text"
                placeholder="Student Name"
                className="w-full rounded-md dark:border-gray-700 dark:text-gray-900"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="studentName" className="text-sm">
                Gender
              </label>
              <Select
                label="Select "
                id="medium"
                onChange={(e) => setgender(e)}
                required
              >
                <Option value="Male">Male</Option>
                <Option value="Female">Female</Option>
                <Option value="Other">Other</Option>

              </Select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="dob" className="text-sm">
                DOB
              </label>
              <Input
                variant="outlined"
                id="DOB"
                type="date"
                placeholder="DOB"
                className="w-full rounded-md dark:border-gray-700 dark:text-gray-900"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="appliedClass" className="text-sm">
                Applied Class
              </label>
              <Select
                label="Select "
                id="appliedClass"
                onChange={(e) => setApplicationClass(e)}
                required
              >
                {classes &&
                  classes.map((item, i) => (
                    <Option key={i} value={item}>
                      {item}
                    </Option>
                  ))}
              </Select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="group" className="text-sm">
                Group
              </label>
              <Select
                label="Select "
                id="group"
                onChange={(e) => setGroup(e)}
                required
              >
                <Option value="Group 1">group 1</Option>
                <Option value="Group 2">group 2</Option>
              </Select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="parentName" className="text-sm">
                Father Name
              </label>
              <Input
                variant="outlined"
                id="FathersName"
                type="text"
                placeholder="Father Name"
                className="w-full rounded-md dark:border-gray-700 dark:text-gray-900"
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="contactNumber" className="text-sm">
              Contact Number
              </label>
              <Input
                variant="outlined"
                id="ContactNo"
                type="number"
                label={contactError? contactError:""}
                error={contactError}
                placeholder="Contact Number"
                className="w-full rounded-md dark:border-gray-700 dark:text-gray-900"
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <Textarea
                id="address"
                placeholder=""
                className="w-full rounded-md dark:border-gray-700 dark:text-gray-900"
                onChange={handleInputChange}
              ></Textarea>
              <div>
                <Button
                  className={`bg-dark-purple ${
                    isFormValid ? "" : "cursor-not-allowed"
                  }`}
                  onClick={handleSubmit}
                  loading={isLoading}
                  disabled={!isFormValid}
                >
                  <FontAwesomeIcon icon={faIndianRupee} /> Pay Application Form
                  Fee
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewApplication;
