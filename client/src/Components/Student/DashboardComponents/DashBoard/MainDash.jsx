import React from "react";
import NoticeBoard from "./NoticeBoard";
import DetailsCardDown from "./DetailsCardDown";
import DetailsCardUp from "./DetailsCardUp";
import { TermName } from "../../../DropDowns/DropDowns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import Notifications from "../../../Staff/UserDash/Notifications";

const MainDash = () => {
  return (
    <div>
      <main>
        <div className="pt-6 px-4">
      <nav className="block w-full max-w-full bg-transparent text-white shadow-none rounded-xl transition-all px-0 py-1">
            <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
              <div className="capitalize"></div>
              <div className="flex items-center">
                <div className="mr-auto md:mr-4 md:w-56">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-blue-500"
                      placeholder=" "
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal peer-placeholder-shown:text-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-blue-gray-400 peer-focus:text-blue-500 before:border-blue-gray-200 peer-focus:before:border-blue-500 after:border-blue-gray-200 peer-focus:after:border-blue-500">
                      Type here
                    </label>
                  </div>
                </div>
                <button
                  className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
                  type="button"
                >
                  <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      stroke-width="3"
                      className="h-6 w-6 text-blue-gray-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </button>


            
                <Notifications/>
              </div>
            </div>
          </nav>
          <DetailsCardUp />

          <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900">
                  Latest Fee Payement <FontAwesomeIcon icon={faMoneyBill}/>
                </h3>
                <a
                  href="#"
                  className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
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
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $320
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/bonnie-green.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Bonnie Green
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $3467
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/michael-gough.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="57323a363e3b17203e3933242332257934383a"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $67
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/thomas-lean.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Thomes Lean
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="284d45494144685f41464c5b5c4d5a064b4745"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $2367
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 sm:pt-4 pb-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/lana-byrd.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Lana Byrd
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $367
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                <div className="flex justify-between items-center">

              <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">
                Exam Results Overview <FontAwesomeIcon icon={faBook}/>
              </h3>
                 <TermName/>
                </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                        Subjects
                      </th>
                      <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                        Total marks
                      </th>
                      <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Organic Search
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        5,649
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
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Referral
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        4,025
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">24%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-orange-300 h-2 rounded-sm"
                                style={{ width: "24%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Direct
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        3,105
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">18%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-teal-400 h-2 rounded-sm"
                                style={{ width: "18%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Social
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        1251
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">12%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-pink-600 h-2 rounded-sm"
                                style={{ width: "12%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Other
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        734
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">9%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-indigo-600 h-2 rounded-sm"
                                style={{ width: "9%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                        Email
                      </th>
                      <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
                        456
                      </td>
                      <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">7%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-purple-500 h-2 rounded-sm"
                                style={{ width: "7%" }}
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
          </div>

          <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
              <div className="flex items-center justify-between mb-4">
                {/* <div className="flex-shrink-0">
                               <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">$45,385</span>
                               <h3 className="text-base font-normal text-gray-500">Sales this week</h3>
                            </div> */}
                {/* <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                               12.5%
                               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                               </svg>
                            </div> */}
              </div>
              <div id="main-chart">{/* <Chart/> */}</div>
            </div>
            <div className="bg-lime-200  rounded-lg  p-2 shadow-inner ">
              <div className=" flex items-center justify-between ">
                <h1 className="text-4xl font-extrabold text-black ">
                  📌 Notice Board
                </h1>
              </div>
              <div className="flex flex-col mt-8">
                <div className="overflow-x-auto rounded-lg">
                  <div className="align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden sm:rounded-lg">
                      <NoticeBoard />
                      {/* <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                           <tr>
                                              <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                 Transaction
                                              </th>
                                              <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                 Date & Time
                                              </th>
                                              <th scope="col" className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                 Amount
                                              </th>
                                           </tr>
                                        </thead>
                                        <tbody className="bg-white">
                                           <tr>
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                 Payment from <span className="font-semibold">Bonnie Green</span>
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                 Apr 23 ,2021
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                 $2300
                                              </td>
                                           </tr>
                                           <tr className="bg-gray-50">
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                                 Payment refund to <span className="font-semibold">#00910</span>
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                 Apr 23 ,2021
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                 -$670
                                              </td>
                                           </tr>
                                           <tr>
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                 Payment failed from <span className="font-semibold">#087651</span>
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                 Apr 18 ,2021
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                 $234
                                              </td>
                                           </tr>
                                           <tr className="bg-gray-50">
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                                 Payment from <span className="font-semibold">Lana Byrd</span>
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                 Apr 15 ,2021
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                 $5000
                                              </td>
                                           </tr>
                                           <tr>
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                 Payment from <span className="font-semibold">Jese Leos</span>
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                 Apr 15 ,2021
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                 $2300
                                              </td>
                                           </tr>
                                           <tr className="bg-gray-50">
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                                 Payment from <span className="font-semibold">THEMESBERG LLC</span>
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                 Apr 11 ,2021
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                 $560
                                              </td>
                                           </tr>
                                           <tr>
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                                 Payment from <span className="font-semibold">Lana Lysle</span>
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                                 Apr 6 ,2021
                                              </td>
                                              <td className="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                                 $1437
                                              </td>
                                           </tr>
                                        </tbody>
                                     </table> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DetailsCardDown />

          {/* <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
            <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold leading-none text-gray-900">
                  Latest Customers
                </h3>
                <a
                  href="#"
                  className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
                >
                  View all
                </a>
              </div>
              <div className="flow-root">
                <ul role="list" className="divide-y divide-gray-200">
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
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
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $320
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/bonnie-green.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Bonnie Green
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $3467
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/michael-gough.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Michael Gough
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="57323a363e3b17203e3933242332257934383a"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $67
                      </div>
                    </div>
                  </li>
                  <li className="py-3 sm:py-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/thomas-lean.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Thomes Lean
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="284d45494144685f41464c5b5c4d5a064b4745"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $2367
                      </div>
                    </div>
                  </li>
                  <li className="pt-3 sm:pt-4 pb-0">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://demo.themesberg.com/windster/images/users/lana-byrd.png"
                          alt="Neil image"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          Lana Byrd
                        </p>
                        <p className="text-sm text-gray-500 truncate">
                          <a
                            href="/cdn-cgi/l/email-protection"
                            className="__cf_email__"
                            data-cfemail="a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf"
                          >
                            [email&#160;protected]
                          </a>
                        </p>
                      </div>
                      <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        $367
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
              <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">
                Acquisition Overview
              </h3>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                        Top Channels
                      </th>
                      <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">
                        Users
                      </th>
                      <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Organic Search
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        5,649
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
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Referral
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        4,025
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">24%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-orange-300 h-2 rounded-sm"
                                style={{ width: "24%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Direct
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        3,105
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">18%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-teal-400 h-2 rounded-sm"
                                style={{ width: "18%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Social
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        1251
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">12%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-pink-600 h-2 rounded-sm"
                                style={{ width: "12%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">
                        Other
                      </th>
                      <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">
                        734
                      </td>
                      <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">9%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-indigo-600 h-2 rounded-sm"
                                style={{ width: "9%" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="text-gray-500">
                      <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">
                        Email
                      </th>
                      <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">
                        456
                      </td>
                      <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                        <div className="flex items-center">
                          <span className="mr-2 text-xs font-medium">7%</span>
                          <div className="relative w-full">
                            <div className="w-full bg-gray-200 rounded-sm h-2">
                              <div
                                className="bg-purple-500 h-2 rounded-sm"
                                style={{ width: "7%" }}
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
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default MainDash;
