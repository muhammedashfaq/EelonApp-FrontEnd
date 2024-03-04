import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { Button, Option, Select } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { RouteObjects } from "../../../../Routes/RoutObjects";

const AddVehicle = () => {
  const axiosPrivate = useAxiosPrivate();
  const [acYr, setAcYr] = useState([]);
  const [year, setyear] = useState("");
  const [base64FC, setBase64FC] = useState("");
  const [base64RC, setBase64RC] = useState("");
  const [isValidate, setIsValidate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
const navigate=useNavigate()
  const [formData, setFormData] = useState({
    busNo: "",
    rgNo: "",
    vehicleModel: "",
    seatNo: "",
    mileage: "",
    yearOfMade: "",
  });

  const handleFileChangeFC = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64FC = event.target.result;
      setBase64FC(base64FC);
    };
    reader.readAsDataURL(file);
  };
  const handleFileChangeRC = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64RC = event.target.result;
      setBase64RC(base64RC);
    };
    reader.readAsDataURL(file);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const allData = {
    ...formData,
    year,
    FC: base64FC,
    RC: base64RC,
  };
  const HandleSubmit = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      const response = await axiosPrivate.post("/transportation/bus",allData)
      setIsLoading(false);
navigate(RouteObjects.VehcleList)

      console.log(response)
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const getyear = async () => {
    try {
      const response = await axiosPrivate.get(
        "classsection/academicyear/academicyear"
      );

      const sortedData = response.data?.academicYear.sort((a, b) =>
        a.localeCompare(b)
      );
      setAcYr(sortedData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getyear();
  }, []);


  // useEffect(() => {
  //   const isValidate =
  //     allData.yearOfMade &&
  //     allData.year &&
  //     allData.vehicleModel &&
  //     allData.busNo &&
  //     allData.seatNo &&
  //     allData.rgNo &&
  //     allData.milage &&
  //     // allData.FC &&
  //     // allData.RC;

  //   setIsValidate(isValidate);
  // }, [allData]);
  return (
    <div>
      <div className=" shadow-2xl max-w-7xl mx-auto bg-gray-200 p-16">
        <div className=" bg-dark-purple py-2 px-2 rounded-t-md flex justify-between items-center">
          <span className="text-white font-normal">Vehicle Details</span>
        </div>
        <form>
          <div className="grid gap-6 mb-6 lg:grid-cols-3">
            <div>
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Academic Year
              </label>
              <Select
                label="Accademic Year"
                className="overflow-auto"
                onChange={(e) => setyear(e)}
              >
                {acYr &&
                  acYr.map((item, i) => (
                    <Option key={i} value={item}>
                      {item}
                    </Option>
                  ))}
              </Select>
            </div>
            <div>
              <label
                for="first_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Bus No
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                name="busNo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="01"
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Registration No
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                name="rgNo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="TN-AB-1200"
                required
              />
            </div>
            <div>
              <label
                for="company"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Vehicle Model
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                name="vehicleModel"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tata Cityride School"
                required
              />
            </div>
            <div>
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Number of Seates
              </label>
              <input
                onChange={handleInputChange}
                type="tel"
                name="seatNo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123"
                required
              />
            </div>
            <div>
              <label
                for="website"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Mileage
              </label>
              <input
                onChange={handleInputChange}
                type="url"
                name="mileage"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="3.5"
                required
              />
            </div>
            <div>
              <label
                for="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Year Of Made
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                name="yearOfMade"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="2020"
                required
              />
            </div>
            <div>
              <label
                for="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                FC Details
                <span className="text-xs pl-auto text-red-300">
                  <p>PDF format</p>
                </span>
              </label>
              <input
                onChange={handleFileChangeFC}
                type="file"
                accept=".pdf"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="2020"
                required
              />
            </div>
            <div>
              <label
                for="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                RC Details
                <span className="text-xs pl-auto text-red-300">
                  <p>PDF format</p>
                </span>
              </label>
              <input
                onChange={handleFileChangeRC}
                type="file"
                accept=".pdf"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="2020"
                required
              />
            </div>
          </div>

          <Button
            loading={isLoading}
            // disabled={!isValidate}
            onClick={HandleSubmit}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddVehicle;
