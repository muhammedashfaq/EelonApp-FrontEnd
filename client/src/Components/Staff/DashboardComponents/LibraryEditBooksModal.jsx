import React, { useEffect, useState } from "react";
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
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import axios from "../../../api/axios";
import { useDispatch } from "react-redux";
import { PencilIcon } from "@heroicons/react/24/solid";

export default function LibraryEditBooksModal({ getBooks, data }) {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const [bookName, setbookName] = useState(data?.bookName);
  const [author, setAuthor] = useState(data?.author);
  const [genre, setgenre] = useState(data?.genre);
  const [bookId, setbookId] = useState(data?.bookId);
  const [IsbnNo, setIsbnNo] = useState(data?.IsbnNo);
  const [description, setdescription] = useState(data?.description);
  const [refNo, setrefNo] = useState(data?.refNo);
  const [language, setlanguage] = useState(data?.language);
  const [barcode, setbarcode] = useState(data?.barcode);
  const [refSubject, setrefSub] = useState(data?.refSubject);
  const [year, setyear] = useState(data?.year);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    getBooks();
  };
  const dbId = data._id;

  const updateBook = async () => {
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
        refSubject,
        year,
      };
      const response = await axios.put(`/library/books/${dbId}`, data);

      handleClose();
    } catch (error) {

      console.log(error);
    }
  };

  return (
    <>
      <Tooltip
        content="Edit book"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <IconButton variant="text" onClick={handleOpen}>
          <PencilIcon className="h-6 w-5" />
        </IconButton>
      </Tooltip>
      <Dialog open={open} handler={handleOpen} size="xl">
        <div
          className="pt-6 pl-10"
          style={{ overflowX: "hidden", overflowY: "auto" }}
        >
          <DialogHeader>Edit book</DialogHeader>
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
            <Button variant="gradient" color="green" onClick={updateBook}>
              <span>Edit book</span>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
    </>
  );
}
