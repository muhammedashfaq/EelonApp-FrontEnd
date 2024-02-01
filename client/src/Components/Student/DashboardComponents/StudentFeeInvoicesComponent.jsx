import React from "react";

const StudentFeeInvoicesComponent = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full m-20">
        <div className="container lg p-10">
          <div
            className="flex justify-center items-center"
            style={{ borderBottom: "1px solid rgba(80,80,80,0.5)" }}
          >
            <h2
              style={{
                fontSize: "1.4rem",
                fontFamily: "monospace",
                fontWeight: "bolder",
              }}
            >
              Fee invoices
            </h2>
          </div>
          <br />
          <span>
            <span className="flex justify-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 12.75 6 6 9-13.5"
                  />
                </svg>
              </span>
              <span>No pending fee payments</span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default StudentFeeInvoicesComponent;
