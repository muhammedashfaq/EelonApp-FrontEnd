import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Tooltip,
} from "@material-tailwind/react";
import { useState } from "react";
import axios from "../../../api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

export default function IssueLibCardModal({
  libCardNo,
  libCardStatus,
  getStudents,
  studentId,
}) {
  const [open, setOpen] = React.useState(false);
  const [checkBx, setcheckBx] = useState(libCardStatus);
  const [libCdNo, setlibCdNo] = useState();
  const [validationError, setValidationError] = useState("");
  const handleOpen = () => setOpen((cur) => !cur);
  const handleClose = () => {
    setlibCdNo("");
    setValidationError("");
    setOpen(false);
  };

  useEffect(() => {
    setcheckBx(libCardStatus);
    if (libCardNo) setlibCdNo(libCardNo);
  }, [libCardStatus, libCardNo]);

  const handleCheckboxChange = () => {
    if (!libCardStatus) {
      setcheckBx(!checkBx);
      setValidationError(checkBx ? "Card Not Issued..." : "");
    } else {
      setcheckBx(!checkBx);
      setValidationError("");
    }
  };

  const issueCard = async () => {
    try {
      if (!studentId) return;

      if (!libCardStatus && !checkBx) {
        setValidationError("Card Not Issued...");
        return;
      }
      const response = await axios.put(
        `users/student/issuelibrarycard/${studentId}`,
        { libCardNo: libCdNo, libCardStatus: checkBx }
      );
      console.log(response, "reres");
      getStudents();
      handleClose();
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <Tooltip
        content="Issue Library Card"
        className="bg-blue-gray-300"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faPlusCircle}
          size="xl"
          color="Green"
          onClick={handleOpen}
        />
      </Tooltip>

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
            <Typography
              className="-mb-2"
              variant="h6"
              color={validationError ? "red" : ""}
            >
              {validationError ? validationError : "Card no."}
            </Typography>
            <Input
              type="number"
              label="Enter library card no."
              value={libCdNo}
              size="lg"
              onChange={(e) => setlibCdNo(e.target.value)}
            />
            <div>
              <div className="inline-flex items-center">
                <Checkbox
                  defaultChecked={checkBx}
                  onChange={handleCheckboxChange}
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
              {libCardStatus ? "Re-Call Library Card" : "Issue Library Card"}
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
