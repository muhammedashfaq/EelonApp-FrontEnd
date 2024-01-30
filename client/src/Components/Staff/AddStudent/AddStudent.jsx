import { Button, Input, Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import axios from "../../../api/axios";

const AddStudent = () => {
  const [studentData, setstudentData] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/users/student", formData);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="m-10 border-2 rounded-lg shadow-lg">
        <div className=" flex flex-wrap gap-6 p-10 lg:grid lg:grid-cols-4 ">
          <Input
            type="file"
            variant="standard"
            label="Standard"
            placeholder="Standard"
          />
          <Input
            name="admnNo"
            variant="standard"
            label="Admition Number"
            placeholder="Admition Number"
            onChange={handleInputChange}
          />
          <Input
            name="studentName"
            variant="standard"
            label="Name"
            placeholder="Enter Your Name"
            onChange={handleInputChange}
          />
          <Input
            variant="standard"
            label="Name In Tamil"
            placeholder="Name In Tamil"
          />
          <Select variant="standard" label="Gender">
            <Option>Male</Option>
            <Option>Female</Option>
            <Option>Others</Option>
          </Select>
          <Input
            name="AadharNo"
            variant="standard"
            label="Adhar Number"
            placeholder="Adhar Number"
            onChange={handleInputChange}
          />
          <Input
            variant="standard"
            label="Contact Number"
            placeholder="Contact Number"
          />
          <Input
            variant="standard"
            label="Alternate Number"
            placeholder="Alternate Number"
          />
          <Input
            variant="standard"
            label="Father's Name"
            placeholder="Father's Name"
          />
          <Input
            variant="standard"
            label="Father's Name in Tamil"
            placeholder="Father's Name in Tamil"
          />
          <Input
            type="file"
            variant="standard"
            label="Standard"
            placeholder="Standard"
          />
          <Input
            variant="standard"
            label="Father's Occupation"
            placeholder="Father's Occupation"
          />
          <Input
            variant="standard"
            label="Mother's Name"
            placeholder="Mother's Name"
          />
          <Input
            variant="standard"
            label="Mother's Name in Tamil"
            placeholder="Mother's Name in Tamil"
          />
          <Input
            variant="standard"
            label="Mother's Occupation"
            placeholder="Mother's Occupation"
          />
          <Input
            type="file"
            variant="standard"
            label="Standard"
            placeholder="Standard"
          />
          <Input
            variant="standard"
            label="Guardian's Name"
            placeholder="Guardian's Name"
          />
          <Input
            variant="standard"
            label="Guardian's Name in Tamil"
            placeholder="Guardian's Name in Tamil"
          />
          <Input
            variant="standard"
            label="Guardian's Occupation"
            placeholder="Guardian's Occupation"
          />
          Annual Income{" "}
          <Input
            variant="standard"
            label="Standard"
            placeholder="Annual Income"
          />
          <Input variant="standard" label="Weight" placeholder="Weight" />
          <Input variant="standard" label="Height" placeholder="Height" />
          <Select variant="standard" label="Class">
            <Option>Class 1</Option>
            <Option>Class 1</Option>
            <Option>Class 1</Option>
          </Select>
          <Select variant="standard" label="Section">
            <Option>A</Option>
            <Option>B</Option>
          </Select>
          <Input
            variant="standard"
            label="Email"
            placeholder="Enter Your Email"
          />
          <Input
            type="password"
            variant="standard"
            label="Password"
            placeholder="********"
          />
          <Select variant="standard" label="Bloog Group">
            <Option>A+ve</Option>
            <Option>A-ve</Option>
            <Option>B+ve</Option>
            <Option>B-ve</Option>
            <Option>AB+ve</Option>
            <Option>Ab-ve</Option>
            <Option>O+ve</Option>
            <Option>O-ve</Option>
            <Option>Unknown</Option>
          </Select>
          <Select variant="standard" label="Mother Tongue">
            <Option>Tamil</Option>
            <Option>Hindi</Option>
          </Select>
          <Select variant="standard" label="Religion">
            <Option>Hindu</Option>
            <Option>Muslim</Option>
            <Option>Christian</Option>
          </Select>
          <Input variant="standard" label="Cast" placeholder="Cast" />
          <Input variant="standard" label="SubCast" placeholder="SubCast" />
          <Select variant="standard" label="Community">
            <Option>BC</Option>
            <Option>OBC</Option>
            <Option>SC</Option>
            <Option>ST</Option>
          </Select>
          <Input variant="standard" label="Address" placeholder="address" />
          <Input variant="standard" label="state" placeholder="Standard" />
          <Input variant="standard" label="city" placeholder="Standard" />
          <Input variant="standard" label="Pin" placeholder="Standard" />
          <Input type="date" variant="standard" />
          <Select variant="standard" label="Class Of Joining">
            <Option>Material Tailwind HTML</Option>
            <Option>Material Tailwind React</Option>
            <Option>Material Tailwind Vue</Option>
            <Option>Material Tailwind Angular</Option>
            <Option>Material Tailwind Svelte</Option>
          </Select>
          <Input
            variant="standard"
            label="EMIS Number"
            placeholder="EMIS Number"
          />
          <Input
            variant="standard"
            label="Nationality"
            placeholder="Standard"
          />
          <Select variant="standard" label="Medium of Instruction">
            <Option>Tamil</Option>
            <Option>English</Option>
            <Option>French</Option>
          </Select>
          <Select variant="standard" label="Concession Student">
            <Option>Yes</Option>
            <Option>No</Option>
          </Select>
          <Select variant="standard" label="Academic Year">
            <Option>2023-2024</Option>
          </Select>
          <Select
            variant="standard"
            label="Category"
            placeholder="Student Category"
          >
            <Option>Day School</Option>
            <Option>Hostel</Option>
          </Select>
          <Select
            variant="standard"
            label="Student Group"
            placeholder="Student Group"
          >
            <Option>Blue</Option>
          </Select>
          <Input
            type="file"
            variant="standard"
            label="Certificate"
            placeholder="Certificate"
          />
        </div>
        <div className=" flex justify-center w-full">
          <Button
            className="m-2 w-80 font-bold"
            color="blue"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
      ``
    </div>
  );
};

export default AddStudent;
