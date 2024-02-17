import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["#NO", "Name", "Attendance", "Remarks"];
const StaffDailyReport = ({datewisereport}) => {
  return (
<Card className="h-full w-full overflow-scroll">
      <table className=" table-auto text-left">
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
          {datewisereport &&
            datewisereport.map((data, index) => {
              const isLast = index === datewisereport.length - 1;
              const classes = isLast
                ? "px-3 py-1"
                : "px-3 py-1 border-b border-blue-gray-50";

              return (
                <tr key={index}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data?.studentName}
                    </Typography>
                  </td>

                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {data?.isPresent}
                    </Typography>
                  </td>
                  <td className={`${classes} bg-blue-gray-50/50`}>
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {data?.reason}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          {!datewisereport && (
            <tr style={{ textAlign: "center" }}>No data</tr>
          )}
        </tbody>
      </table>
    </Card>  )
}

export default StaffDailyReport