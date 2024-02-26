import React, { useEffect, useState } from "react";
import { TableHeaderName } from "../../../Table Header/TableHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupee, faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FeeType, PaymentMode } from "../../../DropDowns/DropDowns";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import SearchbyRollno from "./SearchbyRollno";

import { Oval } from "react-loader-spinner";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
const InformationRow = ({ label, value }) => (
  <div className="flex justify-evenly py-3 shadow-sm ">
    <span className="font-normal text-xl">{label} :</span>
    <p className="font-normal">{value}</p>
  </div>
);
const FeeCollection = () => {
  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [acYr,setAcYr]=useState([])
  const axiosPrivate =useAxiosPrivate()

const getacYR =async()=>{
  try {
    const response = await axiosPrivate.get(
      "classsection/academicyear/academicyear"
    );
    if (response) {
      const sortedData = response.data?.academicYear.sort((a, b) =>
        a.localeCompare(b)
      );
      setAcYr(sortedData);

    }



    
  } catch (error) {
    console.log(error);
  }
}

    useEffect(()=>{
      getacYR()
    },[])
  return (
    <div className="m-6 flex justify-center">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/3 border-2 space-y-10 bg-gray-100">
          <div className="flex justify-center">
            <SearchbyRollno
              setStudentData={setStudentData}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
            />
          </div>

          <div className=" ">
            {isLoading ? (
              <>
                <div className="flex justify-center items-center ">
                  <Oval type="Oval" color="#00BFFF" height={40} width={40} />
                </div>
              </>
            ) : (
              <>
                <InformationRow label="Name" value={studentData?.studentName} />
                <hr />
                <InformationRow
                  label="Class & Section"
                  value={studentData?.classId}
                />
                <hr />
                <InformationRow label="Group" value={studentData?.group} />
                <hr />
                <InformationRow
                  label="Father Name"
                  value={studentData?.FathersName}
                />
                <hr />
              </>
            )}
          </div>
        </div>

        <div className="w-full md:w-2/3 shadow-inherit border-2 p-2 rounded-sm mt-4 md:mt-0 bg-white">
          <div>
            <TableHeaderName name="Fee Collection" year="2023-2024"  />
          </div>

          <div className="Laptop:grid Laptop:grid-cols-3 gap-2 ipad:grid ipad:grid-cols-3 Tablet:grid Tablet:grid-cols-2 mobile:grid mobile:grid-cols-1 px-6 py-6">
            <div className="">
              <label htmlFor="academicYear" className="text-sm">
                Academic Year
              </label>
              <Select
              label="Accademic Year"
            >
              {acYr &&
                acYr.map((item, i) => (
                  <Option key={i} value={item}>
                    {item}
                  </Option>
                ))}
            </Select>

            </div>
            <div className="">
              <label htmlFor="academicYear" className="text-sm">
                Fee Type
              </label>

              <FeeType />
            </div>
            <div className="">
              <label htmlFor="academicYear" className="text-sm">
                Academic Year
              </label>

              <PaymentMode />
            </div>
            <div className="">
              <label htmlFor="academicYear" className="text-sm">
                Academic Year
              </label>

              <PaymentMode />
            </div>

            <div className="">
              <label htmlFor="academicYear" className="text-sm">
                Academic Year
              </label>

              <PaymentMode />
            </div>
          </div>
          <hr className="m-3" />
          <div className="flex justify-end">
            <div className=" mt-6  rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700"><FontAwesomeIcon icon={faIndianRupee}/>129.99</p>
              </div>
          
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold"><FontAwesomeIcon icon={faIndianRupee}/> 134.98</p>
                </div>
              </div>

              <Button fullWidth className="bg-dark-purple">
                <FontAwesomeIcon icon={faIndianRupee} />
                <p className="font-normal">Pay</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeCollection;
