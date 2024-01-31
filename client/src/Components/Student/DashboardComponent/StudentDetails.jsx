import placeholderImage from "../../../assets/placeholderImg.jpg";

const StudentDetails = () => {
  return (
    <>
      <div className="flex justify-center items-center pt-10 m-20">
        <div className="container lg">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            <div
              style={{
                boxShadow: "2px 4px 20px 2px rgba(0,0,0,0.3)",
                maxWidth: "400px",
                borderRadius: "10px",
              }}
              className="flex justify-center  p-5"
            >
              <div>
                <p
                  style={{
                    fontSize: "1.2rem",
                    fontFamily: "monospace",
                    fontWeight: "bolder",
                  }}
                >
                  Notice board
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque delectus ad consequatur earum commodi, quidem
                  possimus provident. Recusandae ad voluptatem totam pariatur
                  perspiciatis esse repellendus natus? Harum modi doloremque
                  rem.
                </p>
              </div>
            </div>
            <div
              style={{
                boxShadow: "2px 4px 20px 2px rgba(0,0,0,0.3)",
                maxWidth: "400px",
                borderRadius: "10px",
              }}
              className="p-5"
            >
              <h2
                style={{
                  fontSize: "1.2rem",
                  fontFamily: "monospace",
                  fontWeight: "bolder",
                }}
              >
                Student details
              </h2>
              <div
                style={{ padding: "10px" }}
                className="flex justify-center items-center"
              >
                <img
                  src={placeholderImage}
                  height="300px"
                  width="250px"
                  alt=""
                  className="pl-4"
                />
              </div>
              <div style={{ justifyContent: "center", display: "flex" }}>
                <div>
                  <p>Student details : Student1</p>
                  <p>Student email : student@example.com</p>
                  <p>School name: MM higher sec school</p>
                  <p>Admission number : 6876</p>
                  <p>Enrollment number : 6876</p>
                  <p>Class : 5</p>
                  <p>Section : B</p>
                  <p> Roll no: 20</p>
                  <p>Guardian's name : </p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
              </div>
            </div>
            <div
              style={{
                boxShadow: "2px 4px 20px 2px rgba(0,0,0,0.3)",
                maxWidth: "400px",
                borderRadius: "10px",
              }}
              className="flex justify-center p-5"
            >
              <div>
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "bolder" }}>
                    Transportation details
                  </h3>
                  <br />
                  <p>Route : </p>
                  <p>Vehicle name:</p>
                  <p>Fare: </p>
                  <p>Driver's name: </p>
                  <p>Driver's ph.no:</p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
                <br />
                <div>
                  <h3 style={{ fontSize: "1.2rem", fontWeight: "bolder" }}>
                    Class fee
                  </h3>
                  <p>Payable : </p>
                  <p>Total paid :</p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDetails;
