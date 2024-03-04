import React, { useEffect, useState } from "react";
import { TableHeaderName } from "../../../Table Header/TableHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupee,
  faPlus,
  faRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { FeeType, PaymentMode } from "../../../DropDowns/DropDowns";
import {
  Button,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import SearchbyRollno from "./SearchbyRollno";
import { v4 as uuidv4 } from "uuid";

import { Oval } from "react-loader-spinner";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import FeeCollectionRow from "./FeeCollectionRow";
import ConcessionRow from "./ConcessionRow";
const InformationRow = ({ label, value }) => (
  <div className="flex justify-evenly py-3 shadow-sm ">
    <span className="font-normal text-xl">{label} :</span>
    <p className="font-normal">{value}</p>
  </div>
);
const FeeCollection = () => {
  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [acYr, setAcYr] = useState([]);
  const [FeeType, setFeeType] = useState();
  const axiosPrivate = useAxiosPrivate();
  const [dataArray, setDataArray] = useState([]);
  const [totalFee, settotalFee] = useState();
  const [ConcessionData, setConcessionData] = useState([]);

  const getacYR = async () => {
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
  };

  const handleData = (data) => {
    const { id } = data;
    const existingIndex = dataArray.findIndex((item) => item.id === id);

    if (existingIndex !== -1) {
      setDataArray((prevDataArray) => {
        const newDataArray = [...prevDataArray];
        newDataArray[existingIndex] = data;
        return newDataArray;
      });
    } else {
      setDataArray((prevDataArray) => [...prevDataArray, data]);
    }
  };

  const filterConcessionData = async (value) => {
    if (!value) return;
    try {
      const response = await axiosPrivate.put("accounts/concession/filter", {
        studentId: value,
      });
      setConcessionData(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!studentData?._id) return;
    const studentId = studentData?._id;
    filterConcessionData(studentId);
  }, [studentData]);

  const addDiv = (value) => {
    const newId = uuidv4();
    const newObj = { id: newId, divType: value };
    setDataArray([...dataArray, newObj]);
  };
  const removeDiv = (idToRemove) => {
    if (!idToRemove) return;
    const updatedDivs = dataArray.filter((item) => item.id !== idToRemove);
    setDataArray(updatedDivs);
  };

  useEffect(() => {
    // console.log(dataArray);

    const calculateTotalFee = dataArray.reduce((total, fee) => {
      const feeTotal = fee?.amount ? fee.amount : 0;
      return total + feeTotal;
    }, 0);
    settotalFee(calculateTotalFee);
    // console.log("Total fee", calculateTotalFee);
  }, [dataArray]);

  useEffect(() => {
    getacYR();
  }, []);
  return (
    <div className="m-6 flex justify-center">
      <div className="flex flex-col md:flex-row w-full">
        <div className="w-full md:w-1/3 border-2 space-y-10 bg-gray-100">
          <div className="flex justify-center">
            <SearchbyRollno
              setStudentData={setStudentData}
              setIsLoading={setIsLoading}
              isLoading={isLoading}
              setConcessionData={setConcessionData}
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
            <TableHeaderName name="Fee Collection" year="2023-2024" />
          </div>

          {/* <div className="flex  justify-center w-72 mx-2 my-2">
            <label htmlFor="academicYear" className="text-sm">
              Academic Year
            </label>
            <Select label="Accademic Year">
              {acYr &&
                acYr.map((item, i) => (
                  <Option key={i} value={item}>
                    {item}
                  </Option>
                ))}
            </Select>
          </div> */}
          <Typography variant="h6" className="m-4">
            Concessions
          </Typography>

          {ConcessionData?.length !== 0 &&
            ConcessionData.map((item, i) => (
              <>
                <ConcessionRow
                  item={item}
                  handleData={handleData}
                  id={i + 1}
                  removeDiv={removeDiv}
                />
                <hr className="m-1" />
              </>
            ))}
          {dataArray &&
            dataArray.map(
              (item, i) =>
                item?.divType !== "concessionDiv" && (
                  <div className="my-10">
                    <hr className="m-3" />
                    <FeeCollectionRow
                      acYr={acYr}
                      handleData={handleData}
                      removeDiv={removeDiv}
                      item={item}
                      index={i + 1}
                    />
                  </div>
                )
            )}

          <hr className="m-3" />
          <div className="flex justify-center">
            <Menu>
              <MenuHandler>
                <Button
                  variant="outlined"
                  // onClick={addDiv}
                  style={{ textTransform: "none" }}
                  color="brown"
                >
                  <FontAwesomeIcon icon={faPlus} size="xl" className="mr-3" />
                  Add field
                </Button>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={() => addDiv("academicFee")}>
                  Academic fee
                </MenuItem>
                <MenuItem onClick={() => addDiv("otherFee")}>
                  Other fee
                </MenuItem>
                <MenuItem onClick={() => addDiv("additionalFee")}>
                  Additional fee
                </MenuItem>
              </MenuList>
            </Menu>
          </div>
          <hr className="m-3" />
          <div className="flex justify-end">
            <div className=" mt-6  rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">
                  <FontAwesomeIcon icon={faIndianRupee} />
                  {totalFee}
                </p>
              </div>

              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    <FontAwesomeIcon icon={faIndianRupee} /> {totalFee}
                  </p>
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
