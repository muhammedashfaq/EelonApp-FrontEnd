import { Select, Option } from "@material-tailwind/react";
 
export function FeeType({setFeeType}) {
  return (
    <div >
      <Select label="Select Version" onChange={(e)=>setFeeType(e)}>
        <Option value="admissionFees">Admission Fee</Option>
        <Option>Academic Fee</Option>
        <Option>Exam Fee</Option>
        <Option>Transport Fee</Option>
        <Option>Hostel Fee</Option>
        <Option>Competition Fee</Option>
        <Option>Event Fee</Option>
        <Option>Annual Day Fee</Option>
        <Option>Tour Fee</Option>
        <Option>Fine</Option>

      </Select>
    </div>
  )
  }

  export function PaymentMode({setPaymentMode}) {
    return (
      <div >
      <Select label="Select Version" onChange={(e)=>setPaymentMode(e)}>
          <Option value="CashPayment">Cash</Option>
          <Option value="UPI">UPI</Option>
          <Option value="NetBanking">Net Banking</Option>
          <Option value="Credit/DebitPayment">Credit/Debit Payment</Option>
        </Select>
      </div>
    )
    }

    export function PaymentStatus({setPaymentStatus}) {
      return (
        <div >
        <Select label="Select Version" onChange={(e)=>setPaymentStatus(e)}>
            <Option value="Paid">Paid</Option>
            <Option value="NotPaid">Not Paid</Option>
            <Option value="PartialyPaid">Partially Paid</Option>
            <Option value="Pending">Pending</Option>
          </Select>
        </div>
      )
      }

      export function TermName({setTermName}) {
        return (

          <div >

      <Select label=" Exam" className=""  onChange={(e)=>setTermName(e)}>
        <Option value="1st Mid Term Exam">1. 1st Mid Term Exam</Option>
        <Option value="Quarterly Exam">2. Quarterly Exam</Option>
        <Option value="2nd Mid Term Exam">3. 2nd Mid Term Exam</Option>
        <Option value="Half Yearly Exam">4. Half Yearly Exam</Option>
        <Option value="3rd Mid Term Exam">5. 3rd Mid Term Exam</Option>
        <Option value="Annual Exam">6. Annual Exam</Option>
      </Select>
          </div>
        )}