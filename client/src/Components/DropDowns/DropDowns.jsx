import { Select, Option } from "@material-tailwind/react";

export function FeeType({ setFeeType }) {
  return (
    <div>
      <Select label="Select fee type" onChange={(e) => setFeeType(e)}>
        <Option value="Admission fee">Admission Fee</Option>
        <Option value="Academic fee">Academic Fee</Option>
        <Option value="Exam fee">Exam Fee</Option>
        <Option value="Transport fee">Transport Fee</Option>
        <Option value="Hostel fee">Hostel Fee</Option>
        <Option value="Competition fee">Competition Fee</Option>
        <Option value="Event fee">Event Fee</Option>
        <Option value="Annual day fee">Annual Day Fee</Option>
        <Option value="Tour fee">Tour Fee</Option>
        <Option value="Fine">Fine</Option>
      </Select>
    </div>
  );
}

export function PaymentMode({ setPaymentMode }) {
  return (
    <div>
      <Select label="Select Version" onChange={(e) => setPaymentMode(e)}>
        <Option value="CashPayment">Cash</Option>
        <Option value="UPI">UPI</Option>
        <Option value="NetBanking">Net Banking</Option>
        <Option value="Credit/DebitPayment">Credit/Debit Payment</Option>
      </Select>
    </div>
  );
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

