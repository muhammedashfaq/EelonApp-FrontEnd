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
  Alert,
  Tooltip,
} from "@material-tailwind/react";
import axios from "../../../../api/axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function LibraryIssueStudentModal({
  unissueAlert,
  setAlert,
  bookId,
  getBooks,
  currentlyIssued,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleClose = () => {
    setsearchData(null);
    setOpen(false);
  };
  const [studentId, setstudentId] = useState();
  const [searchData, setsearchData] = useState();
  const [checked, setchecked] = useState();
  const[idError,setIdError]=useState("")

  const issuebook = async () => {
    if (!checked) return;
    try {
      const response = await axios.post(`/library/books/issuelist/${bookId}`, {
        studentId,
      });
      setAlert(true);
      getBooks();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const unIssuebook = async () => {
    if (!checked) return;
    try {
      const response = await axios.put(`/library/books/issuelist/${bookId}`, {
        studentId,
      });
      unissueAlert(true);
      getBooks();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const searchStudent = async () => {
    try {
      if (!studentId) {
        setIdError("ID is required");
        return;
      }
      const response = await axios.get(
        `users/student/issuelibrarycard/${studentId}`
      );
      console.log(response);
      setsearchData(response.data);
      setstudentId(response.data.email);
    } catch (error) {
      console.log(error);
      if(error.response.status===404){
        setIdError(error.response.data.message)

      }
    }
  };

  return (
    <>

<Tooltip content=" Issue Book"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >

    <FontAwesomeIcon icon={faCartShopping} size="xl"   color="Green"   className="hover:cursor-pointer"   onClick={handleOpen}
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
              Issue book
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
            color={idError?"red":"gray"}
            >
              {idError? idError:"Enter student id"}
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Student id
            </Typography>
            <Input
                label={idError?idError:"Enter Id"}
                size="lg"
                error={idError}

              onChange={(e) => setstudentId(e.target.value)}
            />
            <Button variant="outlined" onClick={searchStudent} fullWidth>
              Search student
            </Button>
          </CardBody>
          <CardFooter className="pt-0">
            {searchData && (
              <>
                <div
                  style={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <span className="pt-2">{searchData.email}</span>
                  <span>
                    <Checkbox
                      value={checked}
                      onChange={(e) => setchecked(e.target.checked)}
                    />
                  </span>
                </div>
                <br />
              </>
            )}
            {currentlyIssued === studentId ? (
              <Button variant="gradient" onClick={unIssuebook} fullWidth>
                <span>Remove student from issue list</span>
              </Button>
            ) : (
              <Button
                variant="gradient"
                onClick={issuebook}
                fullWidth
                disabled={!checked}
              >
                <span>Issue book</span>
              </Button>
            )}
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
