import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Banner from "../../../../Components/Banner/Banner";
import { Tooltip, Typography, Card } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddConcessionStructureModal from "./AddConcessionStructureModal";
import { useState, useEffect } from "react";
import ConcessionStructureCard from "./ConcessionStructureCard";

const TABLE_HEAD = [
  "Sl.no",
  "Concession name",
  "Academic year",
  "Type",
  "Percentage/Amount",
  "Action",
];

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
      const response = await axiosPrivate.get("accounts/concessionstructure");
      setfeeStructures(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAcademicYrDropdowns();
    getStdDropdowns();
    getFeeStructures();
  }, []);
  const breadcrumbs = ["Concession Fee Structure"];

  return (
    <>
      <Banner breadcrumbs={breadcrumbs} />
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
          <div className="container xl">
            <Card className="h-full w-full overflow-scroll mt-5">
              <table className="w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {feeStructures &&
                    feeStructures.map((item, index) => (
                      <ConcessionStructureCard
                        index={index + 1}
                        item={item}
                        key={item?._id}
                        getFeeStructures={getFeeStructures}
                        academicYrDD={academicYrDD}
                      />
                    ))}
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddConcessionStructure;
