import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "Book title",
  "Issued quantity",
  "Date issued",
  "Return date",
  "Return status",
  "Author",
  "Genre",
  "Rack no.",
  "Book no.",
  "Isbn no.",
];

const TABLE_ROWS = [
  {
    bookTitle: "Wings of fire",
    qnt: "1",
    dateIssued: "01/01/2024",
    dateReturn: "12/01/2024",
    status: "returned",
    author: "A.P.J",
    genre: "Biography",
    rackNo: "02",
    bookNo: "100",
    isbnNo: "4897238",
  },
  {
    bookTitle: "Sapiens",
    qnt: "1",
    dateIssued: "01/01/2024",
    dateReturn: "12/01/2024",
    status: "returned",
    author: "A.P.J",
    genre: "Biography",
    rackNo: "02",
    bookNo: "100",
    isbnNo: "4897238",
  },
];

export function StudentBookIssued() {
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
            Books issued
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
                      bookTitle,
                      qnt,
                      dateIssued,
                      dateReturn,
                      status,
                      author,
                      genre,
                      rackNo,
                      bookNo,
                      isbnNo,
                    },
                    index
                  ) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={bookTitle}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {bookTitle}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {qnt}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {dateIssued}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {dateReturn}
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
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {author}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {genre}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {rackNo}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {bookNo}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {isbnNo}
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
