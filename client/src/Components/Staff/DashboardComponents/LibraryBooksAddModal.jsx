import React, { useState } from "react";
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

export default function LibraryBooksAddModal() {
  const [open, setOpen] = React.useState(false);

  const [bookName, setbookName] = useState();
  const [author, setAuthor] = useState();
  const [genre, setgenre] = useState();
  const [bookId, setbookId] = useState();
  const [IsbnNo, setIsbnNo] = useState();
  const [description, setdescription] = useState();

  const handleOpen = () => setOpen(!open);

  const addBook = async () => {
    try {
      const data = {
        bookName,
        author,
        genre,
        bookId,
        IsbnNo,
        description,
      };
      const response = await axios.post("/library/books", data);
      console.log(response);
    } catch (error) {
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
            </div>
          </DialogBody>
          <DialogFooter className="gap-5">
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
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
