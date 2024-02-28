
  const DetailsPage = ({userData}) => {
    if (!userData) {
      return <p>Loading...</p>
    }
    return (
      <>


              <div className="max-w-xl bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Student Details</h2>

                 
                  <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                      <p><span className="font-semibold">Name:</span>{userData?.studentName}</p>
                      <p><span className="font-semibold">Admission No:</span> {userData?.admnNo}</p>
                      {/* Add more details as needed */}
                  </div>

                  {/* Contact Details */}
                  <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">Contact Details</h3>
                      <p><span className="font-semibold">Email:</span> {userData?.email}</p>
                      <p><span className="font-semibold">Phone:</span> {userData?.ContactNo} ,{userData?.AltCnctNo}</p>
                      <p><span className="font-semibold">Address:</span>{userData?.address}</p>
                  </div>

                  {/* Additional Information */}
                  <div>
                      <h3 className="text-xl font-semibold mb-2">Additional Information</h3>
                      <p><span className="font-semibold">Class & Section:</span> {userData?.classId}</p>
                      <p><span className="font-semibold">Group:</span> {userData?.group}</p>
                      {/* Add more details */}
                  </div>
              </div>


        
    
      </>
    )
  }

  export default DetailsPage