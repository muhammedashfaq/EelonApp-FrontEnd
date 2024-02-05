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
import { bookAddValidation } from "../../../Helper/Validations/validations";
import { FireIcon } from "@heroicons/react/24/solid";
// import { useDispatch } from "react-redux";

export default function LibraryBooksAddModal({ getBooks }) {
  const [open, setOpen] = React.useState(false);

  const [bookName, setbookName] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setgenre] = useState("");
  const [bookId, setbookId] = useState("");
  const [IsbnNo, setIsbnNo] = useState("");
  const [description, setdescription] = useState("");
  const [refNo, setrefNo] = useState("");
  const [language, setlanguage] = useState("");
  const [barcode, setbarcode] = useState("");
  const [refSubject, setrefSub] = useState("");
  const [year, setyear] = useState("");
  const [FrntError, setFrntError] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    getBooks();
  };

  const addBook = async (e) => {
    try {
      e.preventDefault();

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
        refSubject,
        year,
      };

      const error = bookAddValidation(data);
      if (!Object.values(error).every((value) => value === "")) {
        setFrntError(error);
        return;
      } else {
        const response = await axios.post("/library/books", data);
        handleClose();
      }
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
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span className="translate-y-0.5">Add books</span>
        </div>
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
                label={
                  FrntError && FrntError.bookName
                    ? FrntError.bookName
                    : "Book Name"
                }
                placeholder="Enter book name"
                onChange={(e) => setbookName(e.target.value)}
                value={bookName}
                error={FrntError?.bookName}
              />
              <Input
                variant="standard"
                label={
                  FrntError && FrntError.author
                    ? FrntError.author
                    : "Auther Name"
                }
                placeholder="Enter book author name"
                onChange={(e) => setAuthor(e.target.value)}
                value={author}
                error={FrntError && FrntError.bookName}
              />
              {/* <Input
                variant="standard"
                label="Genre"
                placeholder="Enter book genre"
                onChange={(e) => setgenre(e.target.value)}
                value={genre}
              /> */}
              <Select
                variant="standard"
                label="Select genre"
                onChange={(e) => setgenre(e)}
              >
                <Option value="Story">Story</Option>
                <Option value="Poem">Poem</Option>
                <Option value="Biography">Biography</Option>
                <Option value="Mystery">Mystery</Option>
                <Option value="Fiction">Fiction</Option>
                <Option value="Non-fiction">Non-fiction</Option>
              </Select>

              <Input
                variant="standard"
                label={
                  FrntError && FrntError.bookId ? FrntError.bookId : "Book id"
                }
                placeholder="Enter book id"
                onChange={(e) => setbookId(e.target.value)}
                value={bookId}
                error={FrntError?.bookId}
              />
              <Input
                type="number"
                variant="standard"
                label={
                  FrntError && FrntError.refNo ? FrntError.refNo : "Ref No"
                }
                placeholder="Reference no."
                onChange={(e) => setrefNo(e.target.value)}
                value={refNo}
                error={FrntError?.refNo}
              />

              <Input
                variant="standard"
                label={
                  FrntError && FrntError.IsbnNo ? FrntError.IsbnNo : "ISBN NO"
                }
                placeholder="Enter Isbn no."
                onChange={(e) => setIsbnNo(e.target.value)}
                value={IsbnNo}
                error={FrntError?.IsbnNo}
              />

              <Input
                variant="standard"
                label={
                  FrntError && FrntError.description ? FrntError.description : "Description"
                }
                placeholder="Enter description"
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                error={FrntError?.description}
              />

              <Input
                variant="standard"
                label={
                  FrntError && FrntError.language ? FrntError.language : "language"
                }
                placeholder="Enter Language"
                onChange={(e) => setlanguage(e.target.value)}
                value={language}
                error={FrntError?.language}
              />

              <Input
                variant="standard"
                label={
                  FrntError && FrntError.year ? FrntError.year : "Publishing Year"
                }
                placeholder="Enter Publishing year"
                onChange={(e) => setyear(e.target.value)}
                value={year}
                error={FrntError?.year}
              />
              <Input
                variant="standard"
                label={
                  FrntError && FrntError.barcode ? FrntError.barcode : "Barcode"
                }
                placeholder="Enter Barcode"
                onChange={(e) => setbarcode(e.target.value)}
                value={barcode}
                error={FrntError?.barcode}
              />
              <Input
                variant="standard"
                label="Reference subject"
                placeholder="Reference subject"
                onChange={(e) => setrefSub(e.target.value)}
                value={refSubject}
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
