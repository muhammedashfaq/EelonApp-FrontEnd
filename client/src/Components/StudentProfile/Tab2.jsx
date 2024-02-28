import React from 'react'

const Tab2 = ({userData}) => {
  return (
    <div><div className="bg-gray-700  shadow-lg rounded-lg p-2">
    <div className="w-full bg-white p-6 rounded-lg shadow-md ">
      <div className="w-full flex justify-center items-center">
        <h2 className="text-2xl font-bold mb-4">
          Dashboard Details
        </h2>
      </div>

      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
          <span className="tracking-wide">About</span>
        </div>
        <div className="text-gray-700">
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                 Name
              </div>
              <div className="px-4 py-2">{userData?.studentName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Gender
              </div>
              <div className="px-4 py-2">{userData?.gender}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
               Class & Section
              </div>
              <div className="px-4 py-2">{userData?.classId}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Contact No.
              </div>
              <div className="px-4 py-2">{userData?.ContactNo}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Current Address
              </div>
              <div className="px-4 py-2">
                {userData?.address}
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
               Login Email.
              </div>
              <div className="px-4 py-2">
                <a
                  className="text-blue-800"
                  href="mailto:jane@example.com"
                >
                  {userData?.email}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                 Name
              </div>
              <div className="px-4 py-2">{userData?.studentName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Birthday
              </div>
              <div className="px-4 py-2">{userData?.DOB}</div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 text-sm">
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                 Name
              </div>
              <div className="px-4 py-2">{userData?.studentName}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Gender
              </div>
              <div className="px-4 py-2">{userData?.gender}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Last Name
              </div>
              <div className="px-4 py-2">Doe</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Gender
              </div>
              <div className="px-4 py-2">{userData?.gender}</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Contact No.
              </div>
              <div className="px-4 py-2">+11 998001001</div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Current Address
              </div>
              <div className="px-4 py-2">
                Beech Creek, PA, Pennsylvania
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Permanant Address
              </div>
              <div className="px-4 py-2">
                Arlington Heights, IL, Illinois
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
               Login Email.
              </div>
              <div className="px-4 py-2">
                <a
                  className="text-blue-800"
                  href="mailto:jane@example.com"
                >
                  {userData?.email}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2">
              <div className="px-4 py-2 font-semibold">
                Birthday
              </div>
              <div className="px-4 py-2">{userData?.DOB}</div>
            </div>
          </div>
          
        </div>
      </div>
      
      <hr className="border-b-2" />


    </div>
  </div></div>
  )
}

export default Tab2