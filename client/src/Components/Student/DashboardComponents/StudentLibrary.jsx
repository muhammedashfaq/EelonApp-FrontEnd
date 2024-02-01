import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";

const TABLE_HEAD = ["SL NO","Book Name", "IssuedBy", "Date","Ref No" ,"Status"];

const TABLE_ROWS = [
  {
    
    subjects: "Physics",
    marks: "30",
    grade: "30",
    head:"k"
  },
  {
    subjects: "Physics",
    marks: "30",
    grade: "30",
    head:"k"
  },
  {
    subjects: "Physics",
    marks: "30",
    grade: "30",
    head:"k"
  },
];
const StudentLibrary = () => {
  return (
    <div className="w-screen m-10 ">


      <div className="flex justify-center ">
        <Card className=" max-w-[50rem] flex-row bg-blue-gray-200">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src="https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody className="w-full">

            <Typography
              variant="h7"
              color="blue-gray"
              className="font-sm font-semibold"
            >
              Library ID :
            </Typography>
            <hr className="m-2" />

            <Typography
              variant="h7"
              color="blue-gray"
              className="font-sm font-semibold"
            >
              Name:
            </Typography>
            <hr className="m-2" />

            <Typography
              variant="h7"
              color="blue-gray"
              className="font-sm font-semibold"
            >
              Class:
            </Typography>
            <hr className="m-2" />
            <Typography
              variant="h7"
              color="blue-gray"
              className="font-sm font-semibold"
            >
              Section:
            </Typography>
            <hr className="m-2" />
            <Typography
              variant="h7"
              color="blue-gray"
              className="font-sm font-semibold"
            >
              Issued By:
            </Typography>
            <hr className="m-2" />
            <Typography
              variant="h7"
              color="blue-gray"
              className="font-sm font-semibold"
            >
              Issued Date:
            </Typography>
            <hr className="m-2" />
            
          </CardBody>
        </Card>
      </div>



      <div
      className="mt-16"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container xl">
          <h2 className="bg-dark-purple text-white rounded-md"
            style={{
              fontSize: "1.4rem",
              fontFamily: "monospace",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            Library Book Status📚
          </h2>
          <br />
          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
                {TABLE_ROWS.map(({ subjects, marks, grade,head,status }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={subjects}>
                        <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal "
                        >
                          {index+1}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal "
                        >
                          {subjects}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {grade}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {marks}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {head}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {status}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentLibrary;
