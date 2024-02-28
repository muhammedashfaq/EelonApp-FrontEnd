import React, { useEffect, useState } from "react";
import { Button, Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faIndianRupee } from "@fortawesome/free-solid-svg-icons";

import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useNavigate, useParams } from "react-router-dom";
import { FeeType, PaymentMode } from "../../../DropDowns/DropDowns";
import { RouteObjects } from "../../../../Routes/RoutObjects";

const ApplicationFee = () => {
  const navigate=useNavigate()

  const { id } = useParams();
  const [amount, setAmount] = useState(0);
  const [applicantData, setApplicantData] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  const axiosPrivate = useAxiosPrivate();
  const [feeType, setFeeType] = useState("");
  const [date, setDate] = useState("");
  const [isValidate, setIsValidate] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [error, setError] = useState("");

  const formData = {
    admnId:applicantData._id,
    academicYear: applicantData.academicYear,
    board: applicantData.board,
    medium: applicantData.medium,
    std:applicantData.classApplied,
    studentName:applicantData.studentName,
    feeType,
    date,
    transactionId,
    modeOfPay: paymentMode,
    amount,
    recieptNo:"1"
  };

  paymentMode;
  const handleSubmit = async () => {
    paymentMode !== "" && paymentMode !== "CashPayment"
      ? (formData.transactionId = transactionId)
      : "";
    if (
      paymentMode !== "" &&
      paymentMode !== "CashPayment" &&
      !formData.transactionId
    ) {
      setError("Transaction ID is required for non-cash payments.");
      return;
    }
    setError("");

    try {
      console.log(formData);
        const response = await axiosPrivate.post("/accounts/admissionfee", formData);
        navigate(RouteObjects.AdminssionFee)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const isValidate =
      formData.academicYear &&
      formData.board &&
      formData.date &&
      formData.feeType &&
      formData.medium &&
      formData.modeOfPay;
    setIsValidate(isValidate);
  }, [formData]);

  const getAplicant = async () => {
    try {
      const response = await axiosPrivate.get(`/admission/${id}`);
      console.log(response, "ressspo");
      setApplicantData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAplicant();
  }, []);
  useEffect(() => {
    setTransactionId(null);
  }, [paymentMode]);
  return (
    <div className="m-6 flex justify-center">
      <div className="w-auto shadow-inherit border-2 p-2 rounded-sm">
        <div className="bg-dark-purple py-2 px-2">
          <span className="text-white font-normal">Application Fee</span>
        </div>
        <div className="flex justify-evenly px-3 py-4 bg-cyan-100 rounded-sm m-1">
          <div className="m-2 p-2 border-r-2">
            <span className="font-bold font-normal">Admission Number:</span>
            {applicantData?.admnNo}
          </div>
          <div className="m-2 p-2 border-r-2">
            <span className="font-bold font-normal"> Student Name :</span>
            {applicantData?.studentName}
          </div>
          <div className="m-2 p-2 border-r-2">
            <span className="font-bold font-normal"> Class For Join :</span>
            {applicantData?.classApplied}
          </div>

          <div className="m-2 p-2 border-r-2">
            <span className="font-bold font-normal">Group :</span>{" "}
            {applicantData?.group || "None"}
          </div>
        </div>
        <hr />
        <span className="text-red-600 text-xs mx-4">
          <FontAwesomeIcon icon={faCircleInfo} /> All Feilds are required
        </span>
        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3  px-6 py-6">
          <div className="col-span-full sm:col-span-2">
            <label htmlFor="board" className="text-sm">
              Date
            </label>
            <Input
              type="date"
              required
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label htmlFor="board" className="text-sm">
              Fee
            </label>
            <FeeType feeType={feeType} setFeeType={setFeeType} />
          </div>

          <div className="col-span-full sm:col-span-2">
            <label htmlFor="board" className="text-sm">
              PaymentMethod
            </label>
            <PaymentMode setPaymentMode={setPaymentMode} />
          </div>
          {paymentMode !== "" && paymentMode !== "CashPayment" ? (
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="board" className="text-sm">
                Transaction ID
              </label>
              <Input
                label="Transaction ID"
                onChange={(e) => setTransactionId(e.target.value)}
                required
                error={error}
              />
              {error && <p className="text-xs text-red-500 my-1">{error}</p>}
            </div>
          ) : (
            ""
          )}
        </div>
        <hr />
        <div className="flex flex-col justify-end items-end space-y-3 mr-6">
          <div className="">
            <Input
            onChange={(e)=>setAmount(e.target.value)}
              type="number"
              placeholder="0.00"
              className="!border !border-gray-300 bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
            />
          </div>
          <div>
            <span className="font-normal">Total Amount:</span> {amount}
          </div>
          <div className="">
            <Button
              className={`bg-dark-purple ${
                amount > 0 ? "" : "cursor-not-allowed"
              }`}
              onClick={handleSubmit}
              disabled={amount <= 0}
            >
              <FontAwesomeIcon icon={faIndianRupee} />{amount} Pay Application Form Fee
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationFee;
