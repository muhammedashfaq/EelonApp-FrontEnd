import React, { useState } from "react";
import { hideloading, showloading } from "../../../Helper/Redux/alertSlice";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  Input,
  Checkbox,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import axios from "../../../api/axios";
import { useDispatch } from "react-redux";

export default function LibraryBooksAddModal({ getBooks }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const [bookName, setbookName] = useState();
  const [author, setAuthor] = useState();
  const [genre, setgenre] = useState();
  const [bookId, setbookId] = useState();
  const [IsbnNo, setIsbnNo] = useState();
  const [description, setdescription] = useState();
  const [refNo, setrefNo] = useState();
  const [language, setlanguage] = useState();
  const [barcode, setbarcode] = useState();
  const [refSub, setrefSub] = useState();
  const [year, setyear] = useState();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    getBooks();
  };

  const addBook = async () => {
    try {
      const data = {
        bookName,
        author,
        genre,
        bookId,
        IsbnNo,
        description,
        refNo,
        language,
        barcode,
        refSub,
        year,
      };
      dispatch(showloading());
      const response = await axios.post("/library/books", data);
      dispatch(hideloading());
      
      handleClose();
    } catch (error) {
      dispatch(hideloading());

      console.log(error);
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="gradient"
        style={{ textTransform: "none" }}
      >
        Add books
      </Button>
      <Dialog open={open} handler={handleOpen} size="xl">
        <div
          className="pt-6 pl-10"
          style={{ overflowX: "hidden", overflowY: "auto" }}
        >
          <DialogHeader>Add books</DialogHeader>
          <DialogBody>
            <div className=" flex flex-wrap gap-6 p-5 lg:grid md:grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
              <Input
                variant="standard"
                label="Book name"
                placeholder="Enter book name"
                onChange={(e) => setbookName(e.target.value)}
                value={bookName}
              />
              <Input
                variant="standard"
                label="Author"
                placeholder="Enter book author name"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
              />
              <Input
                variant="standard"
                label="Genre"
                placeholder="Enter book genre"
                onChange={(e) => setgenre(e.target.value)}
                value={genre}
              />

              <Input
                variant="standard"
                label="Book id"
                placeholder="Enter book id"
                onChange={(e) => setbookId(e.target.value)}
                value={bookId}
              />
              <Input
                variant="standard"
                label="Reference no."
                placeholder="Reference no."
                onChange={(e) => setrefNo(e.target.value)}
                value={refNo}
              />
              <Input
                variant="standard"
                label="Isbn no."
                placeholder="Enter Isbn no."
                onChange={(e) => setIsbnNo(e.target.value)}
                value={IsbnNo}
              />
              <Input
                variant="standard"
                label="Description"
                placeholder="Enter description"
                onChange={(e) => setdescription(e.target.value)}
                value={description}
              />
              <Input
                variant="standard"
                label="Language"
                placeholder="Language"
                onChange={(e) => setlanguage(e.target.value)}
                value={language}
              />
              <Input
                variant="standard"
                label="Publishing year"
                placeholder="Publishing year"
                onChange={(e) => setyear(e.target.value)}
                value={year}
              />
              <Input
                variant="standard"
                label="Barcode"
                placeholder="Barcode"
                onChange={(e) => setbarcode(e.target.value)}
                value={barcode}
              />
              <Input
                variant="standard"
                label="Reference subject"
                placeholder="Reference subject"
                onChange={(e) => setrefSub(e.target.value)}
                value={refSub}
              />
            </div>
          </DialogBody>
          <DialogFooter className="gap-5">
            <Button
              variant="text"
              color="red"
              onClick={handleClose}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="green" onClick={addBook}>
              <span>Add book</span>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </>
  );
}
