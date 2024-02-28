import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";

const SearchbyRollno = ({ setStudentData, setIsLoading, isLoading }) => {
  const [rollNumber, setRollNumber] = useState("");
  const [isValidate, setIsValidate] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  const findStudent = async () => {
    setRollNumber(null);
    try {
      setIsLoading(true);
      const response = await axiosPrivate.put("/users/student/filterbydata", {
        admnNo: Number(rollNumber),
      });
      if (response.data.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something did not go right! Error Roll No.",
        });
      }
      setStudentData(response.data[0]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    const isValidate = rollNumber;
    setIsValidate(isValidate);
  }, [rollNumber]);
  return (
    <div>
      <Card className="w-96">
        <CardBody className="flex flex-col gap-4">
          <Input
            type="number"
            variant="standard"
            label="Admission No."
            placeholder="Enter admission number"
            onChange={(e) => setRollNumber(e.target.value)}
          />
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            fullWidth
            className="bg-dark-purple"
            onClick={findStudent}
            disabled={!isValidate}
            loading={isLoading}
          >
            <p className="font-normal">Find</p>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SearchbyRollno;
