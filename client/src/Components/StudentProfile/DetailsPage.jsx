
  const DetailsPage = ({userData}) => {
    return (
      <>


              <div className="max-w-xl bg-white p-8 rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-4">Student Details</h2>

                  {/* Personal Information */}
                  <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                      <p><span className="font-semibold">Name:</span>{userData?.studentName}</p>
                      <p><span className="font-semibold">Roll Number:</span> {userData?.rollnumber}</p>
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
                      <p><span className="font-semibold">Course:</span> Computer Science</p>
                      <p><span className="font-semibold">Batch:</span> 2022-2026</p>
                      {/* Add more details */}
                  </div>
              </div>


        
    
      </>
    )
  }

  export default DetailsPage