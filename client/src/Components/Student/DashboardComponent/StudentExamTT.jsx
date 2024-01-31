import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = ["Subjects", "FN", "AN"];

const TABLE_ROWS = [
  {
    day: "Monday",
    AN: "Physics",
    FN: "Maths",
  },
  {
    day: "Tuesday",
    AN: "Physics",
    FN: "Maths",
  },
  {
    day: "Wednesday",
    AN: "Physics",
    FN: "Maths",
  },
  {
    day: "Thursday",
    AN: "Physics",
    FN: "Maths",
  },
  {
    day: "Friday",
    AN: "Physics",
    FN: "Maths",
  },
];

export function StudentExamTT() {
  return (
    <>
      <br />
      <br />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container xl">
          <h2
            style={{
              fontSize: "1.4rem",
              fontFamily: "monospace",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            Time table
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
                {TABLE_ROWS.map(({ day, AN, FN }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={day}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {day}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {AN}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {FN}
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
    </>
  );
}
