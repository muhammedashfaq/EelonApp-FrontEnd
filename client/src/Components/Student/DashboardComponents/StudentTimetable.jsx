import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "Subjects",
  "Period I",
  "Period II",
  "Period III",
  "Period IV",
  "Period V",
  "Period VI",
  "Period VII",
  "Period VIII",
];

const TABLE_ROWS = [
  {
    day: "Monday",
    first: "Physics",
    second: "Maths",
    third: "Chemistry",
    fourth: "Botany",
    fifth: "Hindi",
    sixth: "P.T",
    seventh: "Zoology",
    eighth: "English",
  },
  {
    day: "Tuesday",
    first: "Physics",
    second: "Maths",
    third: "Chemistry",
    fourth: "Botany",
    fifth: "Hindi",
    sixth: "P.T",
    seventh: "Zoology",
    eighth: "English",
  },
  {
    day: "Wednesday",
    first: "Physics",
    second: "Maths",
    third: "Chemistry",
    fourth: "Botany",
    fifth: "Hindi",
    sixth: "P.T",
    seventh: "Zoology",
    eighth: "English",
  },
  {
    day: "Thursday",
    first: "Physics",
    second: "Maths",
    third: "Chemistry",
    fourth: "Botany",
    fifth: "Hindi",
    sixth: "P.T",
    seventh: "Zoology",
    eighth: "English",
  },
  {
    day: "Friday",
    first: "Physics",
    second: "Maths",
    third: "Chemistry",
    fourth: "Botany",
    fifth: "Hindi",
    sixth: "P.T",
    seventh: "Zoology",
    eighth: "English",
  },
];

export function StudentTimeTable() {
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
                {TABLE_ROWS.map(
                  (
                    {
                      day,
                      first,
                      second,
                      third,
                      fourth,
                      fifth,
                      sixth,
                      seventh,
                      eighth,
                    },
                    index
                  ) => {
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
                            {first}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {second}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {third}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {fourth}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {fifth}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {sixth}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {seventh}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {eighth}
                          </Typography>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  );
}
