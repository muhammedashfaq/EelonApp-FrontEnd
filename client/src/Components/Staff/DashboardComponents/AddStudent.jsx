import {
  Button,
  Input,
  Option,
  Select,
  Textarea,
} from "@material-tailwind/react";
import { useState } from "react";

const AddStudent = () => {
  const [formData, setFormdata] = useState({
    admitionnumber: "",
    name: "",
    nametamil: "",
    adarnumber: "",
    mobnumber: "",
    number2: "",
    fathername: "",
    fathernametamil: "",
    fatherjob: "",
    mothername: "",
    mothernametamil: "",
    motherjob: "",
    guardianname: "",
    guardiantamil: "",
    guardianjob: "",
    anualincom: "",
    weight: "",
    height: "",
    email: "",
    password: "",
    cast: "",
    subcast: "",
    state: "",
    city: "",
    pin: "",
    emisnumber: "",
    nationality: "",
    address: "",
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormdata((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmitForm = () => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className=" w-screen">
      <div className="flex justify-center ">
        <div className=" border-2 rounded-lg shadow-lg  mt-2">
          <div className="bg-blue-900 rounded-t-lg flex justify-center items-center h-10 text-white ">
            <h1 className="text-2xl">Students Admition </h1>
          </div>
          <form onSubmit={handleSubmitForm}>
            <div className=" flex flex-wrap gap-6 p-8 lg:grid lg:grid-cols-4 ">
              <Input
                type="file"
                variant="outlined"
                label="outlined"
                placeholder="outlined"
              />
              <Input
                name="admitionnumber"
                type="number"
                variant="outlined"
                label="Admition Number*"
                placeholder="Admition Number*"
                onChange={handleInputChange}
              />
              <Input
                name="name"
                type="text"
                variant="outlined"
                label="Student Name*"
                placeholder=" Name*"
                onChange={handleInputChange}
              />
              <Input
                name="nametamil"
                type="text"
                variant="outlined"
                label="Name In Tamil"
                placeholder="Name In Tamil"
                onChange={handleInputChange}
              />
              <Select variant="outlined" label="Gender">
                <Option>Male</Option>
                <Option>Female</Option>
                <Option>Others</Option>
              </Select>
              <Input
                name="adarnumber"
                type="number"
                variant="outlined"
                label="Adhar Number"
                placeholder="Adhar Number"
                onChange={handleInputChange}
              />
              <Input
                name="mobnumber"
                type="number"
                variant="outlined"
                label="Contact Number"
                placeholder="Contact Number
            "
                onChange={handleInputChange}
              />
              <Input
                name="number2"
                type="number"
                variant="outlined"
                label="Alternate Number"
                placeholder="Alternate Number"
                onChange={handleInputChange}
              />
              <Input
                name="fathername"
                type="text"
                variant="outlined"
                label="Father's Name"
                placeholder="Father's Name"
                onChange={handleInputChange}
              />
              <Input
                name="fathernametamil"
                type="text"
                variant="outlined"
                label="Father's Name in Tamil"
                placeholder="Father's Name in Tamil"
                onChange={handleInputChange}
              />

              <Input
                name="fatherjob"
                type="text"
                variant="outlined"
                label="Father's Occupation"
                placeholder="Father's Occupation"
                onChange={handleInputChange}
              />
              <Input
                name="mothername"
                type="text"
                variant="outlined"
                label="Mother's Name"
                placeholder="Mother's Name"
                onChange={handleInputChange}
              />
              <Input
                name="mothernametamil"
                type="text"
                variant="outlined"
                label="Mother's Name in Tamil"
                placeholder="Mother's Name in Tamil"
                onChange={handleInputChange}
              />
              <Input
                name="motherjob"
                type="text"
                variant="outlined"
                label="Mother's Occupation"
                placeholder="Mother's Occupation"
                onChange={handleInputChange}
              />

              <Input
                name="guardianname"
                type="text"
                variant="outlined"
                label="Guardian's Name"
                placeholder="Guardian's Name"
                onChange={handleInputChange}
              />
              <Input
                name="guardiantamil"
                type="text"
                variant="outlined"
                label="Guardian's Name in Tamil"
                placeholder="Guardian's Name in Tamil"
                onChange={handleInputChange}
              />
              <Input
                name="guardianjob"
                type="text"
                variant="outlined"
                label="Guardian's Occupation"
                placeholder="Guardian's Occupation"
                onChange={handleInputChange}
              />

              <Input
                name="annualincom"
                type="number"
                variant="outlined"
                label="Annual Income"
                placeholder="Annual Income"
                onChange={handleInputChange}
              />
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
              <Select variant="outlined" label="Class">
                <Option>Class 1</Option>
                <Option>Class 1</Option>
                <Option>Class 1</Option>
              </Select>
              <Select variant="outlined" label="Section">
                <Option>A</Option>
                <Option>B</Option>
              </Select>
              <Input
                name="email"
                type="email"
                variant="outlined"
                label="Email"
                placeholder="Enter Your Email"
                onChange={handleInputChange}
              />
              <Input
                name="password"
                type="password"
                variant="outlined"
                label="Password"
                placeholder="********"
                onChange={handleInputChange}
              />
              <Select variant="outlined" label="Bloog Group">
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

              <Select variant="outlined" label="Mother Tongue">
                <Option>Tamil</Option>
                <Option>Hindi</Option>
              </Select>

              <Select variant="outlined" label="Religion">
                <Option>Hindu</Option>
                <Option>Muslim</Option>
                <Option>Christian</Option>
              </Select>
              <Input
                name="cast"
                type="text"
                variant="outlined"
                label="Cast"
                placeholder="Cast"
                onChange={handleInputChange}
              />
              <Input
                name="subcast"
                type="text"
                variant="outlined"
                label="SubCast"
                placeholder="SubCast"
                onChange={handleInputChange}
              />

              <Select variant="outlined" label="Community">
                <Option>BC</Option>
                <Option>OBC</Option>
                <Option>SC</Option>
                <Option>ST</Option>
              </Select>

              <Input
                variant="outlined"
                name="state"
                label="State"
                placeholder="state"
                onChange={handleInputChange}
              />
              <Input
                variant="outlined"
                name="city"
                label="City"
                placeholder="City"
                onChange={handleInputChange}
              />
              <Input
                variant="outlined"
                name="pin"
                label="Pin"
                placeholder="Pin"
                onChange={handleInputChange}
              />

              <Input
                name="date"
                type="date"
                variant="outlined"
                onChange={handleInputChange}
              />

              <Select variant="outlined" label="Class Of Joining">
                <Option>Material Tailwind HTML</Option>
                <Option>Material Tailwind React</Option>
                <Option>Material Tailwind Vue</Option>
                <Option>Material Tailwind Angular</Option>
                <Option>Material Tailwind Svelte</Option>
              </Select>

              <Input
                name="emisnumber"
                type="text"
                variant="outlined"
                label="EMIS Number"
                placeholder="EMIS Number"
                onChange={handleInputChange}
              />
              <Input
                name="nationality"
                type="text"
                variant="outlined"
                label="Nationality"
                placeholder="outlined"
                onChange={handleInputChange}
              />

              <Select variant="outlined" label="Medium of Instruction">
                <Option>Tamil</Option>
                <Option>English</Option>
                <Option>French</Option>
              </Select>

              <Select variant="outlined" label="Concession Student">
                <Option>Yes</Option>
                <Option>No</Option>
              </Select>

              <Select variant="outlined" label="Academic Year">
                <Option>2023-2024</Option>
              </Select>

              <Select
                variant="outlined"
                label="Category"
                placeholder="Student Category"
              >
                <Option>Day School</Option>
                <Option>Hostel</Option>
              </Select>

              <Select
                variant="outlined"
                label="Student Group"
                placeholder="Student Group"
              >
                <Option>Blue</Option>
              </Select>

              <Textarea
                variant="outlined"
                name="address"
                label="Address"
                onChange={handleInputChange}
              />
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
