import { Card, Typography } from "@material-tailwind/react";

const TABLE_HEAD = [
  "Reciept no.",
  "Amount",
  "Payment method",
  "Transaction Id",
  "Date",
  "Invoice",
  "Print",
];

const TABLE_ROWS = [
  {
    recieptNo: "7985824",
    amount: "2000 rs",
    payMethod: "Per term",
    transactionId: "2000rs",
    date: "01/01/2024",
    invoice: "Registration",
    print: "Print",
  },
  {
    recieptNo: "237648",
    amount: "2000 rs",
    payMethod: "Per term",
    transactionId: "2000rs",
    date: "01/01/2024",
    invoice: "Registration",
    print: "Print",
  },
  {
    recieptNo: "8923749",
    amount: "2000 rs",
    payMethod: "Per term",
    transactionId: "2000rs",
    date: "01/01/2024",
    invoice: "Registration",
    print: "Print",
  },
  {
    recieptNo: "9872347",
    amount: "2000 rs",
    payMethod: "Per term",
    transactionId: "2000rs",
    date: "01/01/2024",
    invoice: "Registration",
    print: "Print",
  },
];

export function StudentPaymentHistory() {
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
            Fee payment history
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
                      recieptNo,
                      amount,
                      payMethod,
                      transactionId,
                      date,
                      invoice,
                      print,
                    },
                    index
                  ) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={recieptNo}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {recieptNo}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {amount}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {payMethod}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {transactionId}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {date}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {invoice}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {print}
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
