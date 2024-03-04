import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const DailyLedgerBook = () => {
  const contentToPrint = useRef();

  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });
  return (
    <>
      <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-5 pt-3 ">
        <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center ">
          <div className="capitalize"></div>
          <div className="flex items-center">
            <a
              onClick={() => {
                handlePrint(null, () => contentToPrint.current);
              }}
              className="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect width="12" height="8" x="6" y="14" />
              </svg>
              Print
            </a>
          </div>
        </div>
      </nav>
      <div className=" px-4 sm:px-6 lg:px-8 mx-auto my-4 sm:my-10 ">
        <div ref={contentToPrint} className="sm:w-11/12 lg:w-3/4 mx-auto ">
          <div className="h-[70rem] flex flex-col p-4 sm:p-10 bg-white shadow-md rounded-xl dark:bg-gray-800">
            <div className="mt-6">
              <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
                <div className="hidden sm:grid sm:grid-cols-5">
                  <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
                    Fee
                  </div>

                  <div className="text-end text-xs font-medium text-gray-500 uppercase">
                    Amount
                  </div>
                </div>

                <div className="hidden sm:block border-b border-gray-200 dark:border-gray-700"></div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  <div className="col-span-full sm:col-span-2">
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Item
                    </h5>
                    <p className="font-medium text-gray-800 dark:text-gray-200">
                      Admission Fee
                    </p>
                  </div>

                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Amount
                    </h5>
                    <p className="sm:text-end text-gray-800 dark:text-gray-200"></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex sm:justify-end">
              <div className="w-full max-w-2xl sm:text-end space-y-2">
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                      Amount paid:
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      <span> 0.0</span>
                    </dd>
                  </dl>
                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                      Amount paid:
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      <span> 0.0</span>
                    </dd>
                  </dl>

                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                      Amount paid:
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      <span> 0.0</span>
                    </dd>
                  </dl>

                  <dl className="grid sm:grid-cols-5 gap-x-3">
                    <dt className="col-span-3 font-semibold text-gray-800 dark:text-gray-200">
                      Amount paid:
                    </dt>
                    <dd className="col-span-2 text-gray-500">
                      <span> 0.0</span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyLedgerBook;
