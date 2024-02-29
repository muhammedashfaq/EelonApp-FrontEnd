import React from "react";
import DetailsCards from "./DetailsCards";
import Notifications from "./Notifications";

const MainDashBoard = () => {
  return (
    <div>
      <div className=" bg-gray-50/50">
        <div className="p-4 ">
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
          <div className="mt-12">


            <DetailsCards />

            <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
              <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md overflow-hidden xl:col-span-2">
                <div className="relative bg-clip-border rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none m-0 flex items-center justify-between p-6">
                  <div>
                    <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-blue-gray-900 mb-1">
                      Projects
                    </h6>
                    <p className="antialiased font-sans text-sm leading-normal flex items-center gap-1 font-normal text-blue-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4 text-blue-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        ></path>
                      </svg>
                      <strong>30 done</strong> this month
                    </p>
                  </div>
                  <button
                    aria-expanded="false"
                    aria-haspopup="menu"
                    id=":r5:"
                    className="relative middle none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-8 max-w-[32px] h-8 max-h-[32px] rounded-lg text-xs text-blue-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30"
                    type="button"
                  >
                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currenColor"
                        viewBox="0 0 24 24"
                        stroke-width="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>

                <div className="p-6 overflow-x-scroll px-0 pt-0 pb-2">
                  <table className="w-full min-w-[640px] table-auto">
                    <thead>
                      <tr>
                        <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                          <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                            companies
                          </p>
                        </th>
                        <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                          <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                            budget
                          </p>
                        </th>
                        <th className="border-b border-blue-gray-50 py-3 px-6 text-left">
                          <p className="block antialiased font-sans text-[11px] font-medium uppercase text-blue-gray-400">
                            completion
                          </p>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="flex items-center gap-4">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                              Material XD Version
                            </p>
                          </div>
                        </td>

                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            $14,000
                          </p>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                              60%
                            </p>
                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                              <div
                                className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                style={{ width: 10 }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="flex items-center gap-4">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                              Add Progress Track
                            </p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            $3,000
                          </p>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                              10%
                            </p>
                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                              <div
                                className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                style={{ width: "10%" }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="flex items-center gap-4">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                              Fix Platform Errors
                            </p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            Not set
                          </p>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                              100%
                            </p>
                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                              <div
                                className="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="flex items-center gap-4">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                              Launch our Mobile App
                            </p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            $20,500
                          </p>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                              100%
                            </p>
                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                              <div
                                className="flex justify-center items-center h-full bg-gradient-to-tr from-green-600 to-green-400 text-white"
                                style={{ width: "100%" }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="flex items-center gap-4">
                            <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                              Add the New Pricing Page
                            </p>
                          </div>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <p className="block antialiased font-sans text-xs font-medium text-blue-gray-600">
                            $500
                          </p>
                        </td>
                        <td className="py-3 px-5 border-b border-blue-gray-50">
                          <div className="w-10/12">
                            <p className="antialiased font-sans mb-1 block text-xs font-medium text-blue-gray-600">
                              25%
                            </p>
                            <div className="flex flex-start bg-blue-gray-50 overflow-hidden w-full rounded-sm font-sans text-xs font-medium h-1">
                              <div
                                className="flex justify-center items-center h-full bg-gradient-to-tr from-blue-600 to-blue-400 text-white"
                                style={{ width: "25%" }}
                              ></div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="text-blue-gray-600">
            <footer className="py-2">
              <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
                <p className="block antialiased font-sans text-sm leading-normal font-normal text-inherit">
                  © 2023, made with{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="-mt-0.5 inline-block h-3.5 w-3.5"
                  >
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
                  </svg>{" "}
                  by{" "}
                  <a
                    href="https://www.creative-tim.com"
                    target="_blank"
                    className="transition-colors hover:text-blue-500"
                  >
                    Creative Tim
                  </a>{" "}
                  for a better web.{" "}
                </p>
                <ul className="flex items-center gap-4">
                  <li>
                    <a
                      href="https://www.creative-tim.com"
                      target="_blank"
                      className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                    >
                      Creative Tim
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.creative-tim.com/presentation"
                      target="_blank"
                      className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.creative-tim.com/blog"
                      target="_blank"
                      className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.creative-tim.com/license"
                      target="_blank"
                      className="block antialiased font-sans text-sm leading-normal py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
                    >
                      License
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default MainDashBoard;
