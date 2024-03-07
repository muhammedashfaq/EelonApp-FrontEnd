import React, { useEffect, useState } from "react";
import AddStudent from "../../../Components/Staff/DashboardComponents/StudentAdmintion/AddStudent";
import Banner from "../../../Components/Banner/Banner";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const AddStudents = () => {
  const axiosPrivate = useAxiosPrivate();
  const [classDetails, setclassDetails] = useState([]);
  const [AcademicYrs, setAcademicYrs] = useState([]);
  const getClsSection = async () => {
    try {
      const response1 = await axiosPrivate.get(
        "classsection/academicyear/academicyear"
      );

      const sortedData1 = response1.data?.academicYear.sort((a, b) =>
        a.localeCompare(b)
      );
      setAcademicYrs(sortedData1);

      const response = await axiosPrivate.get("/classsection/dropdowns");
      const sortedData = response.data.sort((a, b) => a.localeCompare(b));
      setclassDetails(sortedData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClsSection();
  }, []);
  const breadcrumbs = ["Add Students"];

  return (
    <div>
      <Banner breadcrumbs={breadcrumbs} />
      <div className="flex">
        <AddStudent classDetails={classDetails} AcademicYrs={AcademicYrs} />
      </div>
    </div>
  );
};

export default AddStudents;
