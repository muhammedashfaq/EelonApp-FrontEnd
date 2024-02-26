import { Card, Typography, CardBody, Chip } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../../Routes/RoutObjects";

const TABLE_HEAD = [
  "#No",
  "Application Number",
  "Student Name",
  "Conatct Number",
  "Applied Date",
  "Payment Status",
  "Action"
];

const ApplicantTable = () => {
  const axiosPrivate = useAxiosPrivate();
  const [applicantData, setApplicantData] = useState([]);

  const getDate = (date) => {
    console.log(date);
    if (date) {
      const newDate = date.split("T")[0];
      return newDate;
    }
    return "N/A";
  };

  const getApplicant = async () => {
    try {
      const response = await axiosPrivate.get("/admission");
      console.log(response);
      setApplicantData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getApplicant();
  }, []);
  return (
    <div className="m-10">
      <Card className="h-96">
        <div className="bg-dark-purple py-2  rounded-t-md flex justify-between items-center px-4">
          <span className="text-white font-normal">Applicants -Year-</span>

          <Link
            to={RouteObjects.NewApplication}
            className="text-white font-normal hover:bg-purple-600 px-4 py-2 rounded-md shadow-md transition-all duration-300"
          >
            Add
          </Link>
        </div>
        <CardBody className="overflow-y-auto px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-2 py-3"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {applicantData &&
                applicantData?.map((item, index) => {
                  const classes = "px-3 py-2 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>{index + 1}</td>
                      <td className={classes}>{item?.admnNo}</td>
                      <td className={classes}>{item?.ContactNo}</td>

                      <td className={classes}>{item?.studentName}</td>
                      <td className={classes}>{getDate(item?.createdAt)}</td>
                      <td className={classes}>
                        <Link>
                          <div className="flex">
                            <span>
                              <Chip
                                color={item?.payStatus == "Paid" ? "green":"red"}
                                value={item?.payStatus}
                                size="sm"
                                className="cursor-pointer hover:shadow-lg hover:scale-95"
                              />
                            </span>
                          </div>
                        </Link>
                      </td>
                      <td className={classes}>
                          {item?.payStatus == "Paid"&&(
                        <Link to={`${RouteObjects.AddNewStudent}/${item._id}`}>
                          <div className="flex">

                            <span className="" >
                              <Chip 
                                color="green"
                                value="Approve"
                                size="sm"
                                className="cursor-pointer hover:shadow-lg hover:scale-95"
                                />
                            </span>
                          </div>
                        </Link>
                                )}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};
export default ApplicantTable;
