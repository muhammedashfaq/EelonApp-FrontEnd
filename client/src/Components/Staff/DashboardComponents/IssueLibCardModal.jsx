import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "../../../api/axios";

export default function IssueLibCardModal({
  libCardNo,
  libCardStatus,
  getStudents,
  studentId,
}) {
  const [open, setOpen] = React.useState(false);
  const [checkBx, setcheckBx] = useState(libCardStatus);
  const [libCdNo, setlibCdNo] = useState();
  const handleOpen = () => setOpen((cur) => !cur);
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setcheckBx(libCardStatus);
    if (libCardNo) setlibCdNo(libCardNo);
  }, [libCardStatus, libCardNo]);

  const issueCard = async () => {
    try {
      if (!studentId) return;
      const response = await axios.put(
        `users/student/issuelibrarycard/${studentId}`,
        { libCardNo: libCdNo, libCardStatus: checkBx }
      );
      console.log(response);
      getStudents();
      handleClose();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Button variant="text" onClick={handleOpen}>
        Edit
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Issue library card
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Card no.
            </Typography>
            <Input
              type="number"
              label="Enter library card no."
              value={libCdNo}
              size="lg"
              onChange={(e) => setlibCdNo(e.target.value)}
            />
            <div>
              <div class="inline-flex items-center">
                <Checkbox
                  defaultChecked={checkBx}
                  onChange={(e) => setcheckBx(e.target.checked)}
                  label={
                    <div>
                      <Typography color="blue-gray" className="font-medium">
                        Issue library card
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        Click to issue or revoke librarycard
                      </Typography>
                    </div>
                  }
                  containerProps={{
                    className: "-mt-5",
                  }}
                />
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              style={{ textTransform: "none" }}
              onClick={issueCard}
              fullWidth
            >
              Issue library card
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
