import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Banner from "../../../../Components/Banner/Banner";
import { Tooltip, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddFeeStrcrtModal from "./AddFeeStrcrtModal";
import { useState, useEffect } from "react";

const AddFeeStructures = () => {
  const axiosPrivate = useAxiosPrivate();
  const [academicYrDD, setacademicYrDD] = useState([]);
  const [stdDD, setstdDD] = useState([]);

  const getAcademicYrDropdowns = async () => {
    try {
      const response = await axiosPrivate.get(
        "classsection/academicyear/academicyear"
      );
      setacademicYrDD(response.data.academicYear);
    } catch (error) {
      console.error(error);
    }
  };

  const getStdDropdowns = async () => {
    try {
      const response = await axiosPrivate.get("classsection/dropdowns/std");
      setstdDD(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAcademicYrDropdowns();
    getStdDropdowns();
  }, []);
  return (
    <>
      <Banner />
      <div>
        <div className="bg-blue-gray-500 rounded-lg p-2 flex justify-between items-center mt-10 mx-5">
          <div>
            <AddFeeStrcrtModal academicYrDD={academicYrDD} stdDD={stdDD} />
          </div>
          <Typography color="white" className="text-2xl font-semibold">
            Add fee structure
          </Typography>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default AddFeeStructures;
