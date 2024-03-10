import { useEffect, useState } from "react";
import AddRoomPriceModal from "./AddRoomPriceModal";
import AddRoomsModal from "./AddRoomsModal";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const AddRoomDetails = () => {
  const id = "65ec46a49dde104983cc0b17"
  const [hostelData,setHostelData]=useState([])
const axiosPrivate = useAxiosPrivate()

console.log(hostelData)
  const getDataHostel =async()=>{
    try {
      const response = await axiosPrivate.get('/hostel')
      setHostelData(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getDataHostel()
  },[])
  return (
    <>
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
          <div className="flex justify-between items-center">
            <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">
              Rooms
            </h3>
            <div className="flex-shrink-0">
              <a
                href="#"
                className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
              >
                <AddRoomsModal />
              </a>
            </div>
          </div>
          <div className="block w-full overflow-x-auto">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                    Type Of Rooms
                  </th>
                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                    Amount
                  </th>

                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px">
                    Room Number
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="text-gray-500">
                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left flex  space-x-1 items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://demo.themesberg.com/windster/images/users/neil-sims.png"
                        alt="Neil image"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        Neil Sims
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        <a
                          href="/cdn-cgi/l/email-protection"
                          className="__cf_email__"
                          data-cfemail="17727a767e7b57607e7973646372653974787a"
                        >
                          [email&#160;protected]
                        </a>
                      </p>
                    </div>
                  </th>
                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                      $320
                    </div>
                  </td>
                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                    <div className="flex items-center">
                      <span className="mr-2 text-xs font-medium">30%</span>
                      <div className="relative w-full">
                        <div className="w-full bg-gray-200 rounded-sm h-2">
                          <div
                            className="bg-cyan-600 h-2 rounded-sm"
                            style={{ width: "30%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Room Pricing
              </h3>
              <span className="text-base font-normal text-gray-500">
                Below is a list of room prices <br /> according to room type.
              </span>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#"
                className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg p-2"
              >
                <AddRoomPriceModal id={id} />
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="overflow-x-auto rounded-lg">
              <div className="align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Room Type
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Date & Time
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                          Payment from{" "}
                          <span className="font-semibold">Bonnie </span>
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                          Apr 23 ,2021
                        </td>
                        <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                          $2300
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddRoomDetails;
