import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";
import StudentsListbysearchName from "./StudentsListbysearchName";

const SearchbyRollno = ({
  setStudentData,
  setIsLoading,
  isLoading,
  setConcessionData,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [isValidate, setIsValidate] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [searchName, setSearchName] = useState("");
  const [studentDatabyName, setStudentDatabyName] = useState([]);

  const findStudent = async (e) => {
    e.preventDefault();
    setInputValue(null);
    setStudentData([]);
    try {
      let formattedInputValue;
      let formattedInputValue2;
      if (searchName === "admnNo") {
        formattedInputValue = Number(inputValue);
      } else {
        formattedInputValue2 = inputValue;
      }

      const admnNo = formattedInputValue || "";
      const studentName = formattedInputValue2 || "";
      console.log(admnNo, studentName);
      const response = await axiosPrivate.put("/users/student/filterbydata", {
        admnNo,
        studentName,
      });
      console.log(response);
      if (response.data.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something did not go right! Error Roll No.",
        });
      }
      searchName === "admnNo"
        ? setStudentData(response.data[0])
        : setStudentDatabyName(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const isValidate = inputValue && searchName;
    setIsValidate(isValidate);
  }, [inputValue, searchName]);
  return (
    <div>
      <Card className="w-96">
        <CardBody>
          <form onSubmit={findStudent} className="flex flex-col gap-4">
            <Select
              label="Select   "
              variant="standard"
              onChange={(e) => setSearchName(e)}
            >
              <Option value="admnNo">Admission Number</Option>
              <Option value="studentName">Student Name</Option>
            </Select>
            <Input
              type={searchName === "admnNo" ? "number" : "text"}
              variant="standard"
              label={
                searchName === "admnNo"
                  ? "Adminssion Number"
                  : "" || searchName === "studentName"
                  ? "Student Name"
                  : ""
              }
              placeholder="Enter Here"
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button
              fullWidth
              className="bg-dark-purple"
              onClick={findStudent}
              disabled={!isValidate}
              loading={isLoading}
            >
              <p className="font-normal">Find</p>
            </Button>
          </form>
        </CardBody>
        {/* <CardFooter className="pt-0"></CardFooter> */}
      </Card>

      <div className=" mt-4">
        <StudentsListbysearchName
          setStudentDatabyName={setStudentDatabyName}
          studentDatabyName={studentDatabyName}
          setStudentData={setStudentData}
        />
      </div>
    </div>
  );
};

export default SearchbyRollno;
