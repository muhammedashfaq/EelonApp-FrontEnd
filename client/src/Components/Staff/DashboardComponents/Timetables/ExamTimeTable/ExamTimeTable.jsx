import React from 'react'

const ExamTimeTable = () => {
  return (
    <div>    <div>

    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
                    <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
                        <div className="flex justify-between">
                            Exam Name ----- From Which Day to Which Day
                        </div>
                    </div>
                    <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
                        <table className="min-w-full">
                            <thead>
                                <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider"></th>

                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">1st exm Time</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">Break</th>

                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">2nd exm Time</th>
                                    <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">3rd exm Time</th>
                                    
                                    <th className="px-6 py-3 border-b-2 border-gray-300"></th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="text-sm leading-5 text-gray-800">Day</div>
                                                </div>
                                            </div>
                                        </td>
                                        
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">Subject</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5"></td>    
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">Subject</td>
                                        <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">Subject</td>                                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                                            <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">View Details</button>
                                        </td>
                              </tr>


                              
                            </tbody>
                        </table>
                     
                    </div>
                </div>
        </div></div>
  )
}

export default ExamTimeTable