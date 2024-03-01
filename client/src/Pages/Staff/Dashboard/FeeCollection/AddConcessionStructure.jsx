import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Banner from "../../../../Components/Banner/Banner";
import { Tooltip, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddConcessionStructureModal from "./AddConcessionStructureModal";
import { useState, useEffect } from "react";
import FeeStructureCards from "./FeeStructureCards";

const AddConcessionStructure = () => {
  const axiosPrivate = useAxiosPrivate();
  const [academicYrDD, setacademicYrDD] = useState([]);
  const [stdDD, setstdDD] = useState([]);
  const [feeStructures, setfeeStructures] = useState([]);

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

  const getFeeStructures = async () => {
    try {
      const response = await axiosPrivate.get("accounts/feestructure");
      setfeeStructures(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAcademicYrDropdowns();
    getStdDropdowns();
    // getFeeStructures();
  }, []);
  return (
    <>
      <Banner />
      <div>
        <div className="bg-blue-gray-500 rounded-lg p-2 flex justify-between items-center mt-10 mx-5">
          <div>
            <AddConcessionStructureModal
              academicYrDD={academicYrDD}
              stdDD={stdDD}
              getFeeStructures={getFeeStructures}
            />
          </div>
          <Typography color="white" className="text-2xl font-semibold">
            Add fee structure
          </Typography>

          <div></div>
        </div>

        <div className="flex justify-center">
          <div className="container xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {feeStructures &&
              feeStructures.map((item) => (
                <FeeStructureCards
                  item={item}
                  key={item?._id}
                  getFeeStructures={getFeeStructures}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AddConcessionStructure;
