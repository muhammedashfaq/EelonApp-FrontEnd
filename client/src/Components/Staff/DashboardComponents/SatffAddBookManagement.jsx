import { Card, Typography ,Drawer,
    Button,
    IconButton,
    Input,
    Textarea,} from "@material-tailwind/react";
import { useState } from "react";

const TABLE_HEAD = ["Fee type", "Amount", "Period", "Total"];
const SatffAddBookManagement = () => {
    const TABLE_ROWS = [
        {
          feeType: "Term fee",
          amount: "2000 rs",
          period: "Per term",
          total: "2000rs",
        },
        {
          feeType: "Term fee",
          amount: "2000 rs",
          period: "Per term",
          total: "2000rs",
        },
        {
          feeType: "Term fee",
          amount: "2000 rs",
          period: "Per term",
          total: "2000rs",
        },
      ];
      const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false)
    return (
    <div className="w-full">
      <div className=" bg-blue-700 h-20 flex justify-center">LIBRARY</div>

      <Button onClick={openDrawer}>Open Drawer</Button>
     <Drawer open={open} onClose={closeDrawer}>
        <div className="flex items-center justify-between px-4 pb-2">
          <Typography variant="h5" color="blue-gray">
            Contact Us
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="mb-5 px-4">
          <Typography variant="small" color="gray" className="font-normal ">
            Write the message and then click button.
          </Typography>
        </div>
        <form className="flex flex-col gap-6 p-4">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input type="email" label="Email" />
          <Input label="Subject" />
          <Textarea rows={6} label="Message" />
          <Button>Send Message</Button>
        </form>
      </Drawer>




      <div className=" m-20"
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
            Fee structure
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
                {TABLE_ROWS.map(({ feeType, amount, period, total }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={feeType}>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {feeType}
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
                          {period}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {total}
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

export default SatffAddBookManagement;
