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
import { bookAddValidation } from "../../../Helper/Validations/validations";
import { useNavigate } from "react-router-dom";
import { RouteObjects } from "../../../Routes/RoutObjects";

export default function LibraryEditBooksModal({ getBooks, data }) {
  const [open, setOpen] = React.useState(false);

  const [formData, setFormData] = useState({
    bookName: "",
    author: "",
    genre: "",
    bookId: "",
    IsbnNo: "",
    description: "",
    refNo: "",
    language: "",
    barcode: "",
    refSubject: "",
    year: "",
  });
  const [FrntError, setFrntError] = useState({
    bookName: "",
    author: "",
    genre: "",
    bookId: "",
    IsbnNo: "",
    description: "",
    refNo: "",
    language: "",
    barcode: "",
    refSubject: "",
    year: "",
  });
  const handleInputChange = (e) => {
    console.log(formData);
    const { name, value } = e.target;
    setFormData((pre) => ({
      ...pre,
      [name]: value,
    }));

    setFrntError((pre) => ({
      ...pre,
      [name]: "",
    }));
  };
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    getBooks();
  };
  const dbId = data._id;

  const updateBook = async () => {
    try {
      const error = bookAddValidation(data);
      if (!Object.values(error).every((value) => value === "")) {
        setFrntError(error);
        console.log(error);
        return;
      } else {
        const response = await axios.put(`/library/books/${dbId}`, formData);
        navigate(RouteObjects.Bookmanagment);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useState(() => {
    setFormData(data);
  }, []);
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
                name="bookName"
                variant="standard"
                label={
                  FrntError && FrntError.bookName
                    ? FrntError.bookName
                    : "Book Name"
                }
                placeholder="Enter book name"
                onChange={handleInputChange}
                value={formData.bookName}
                error={FrntError?.bookName}
              />
              <Input
                name="author"
                variant="standard"
                label={
                  FrntError && FrntError.author
                    ? FrntError.author
                    : "Auther Name"
                }
                placeholder="Enter book author name"
                onChange={handleInputChange}
                value={formData.author}
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
                name=""
                variant="standard"
                label="Select genre"
                // onChange={(e) => setgenre(e)}
              >
                <Option value="Story">Story</Option>
                <Option value="Poem">Poem</Option>
                <Option value="Biography">Biography</Option>
                <Option value="Mystery">Mystery</Option>
                <Option value="Fiction">Fiction</Option>
                <Option value="Non-fiction">Non-fiction</Option>
              </Select>

              <Input
                name="bookId"
                variant="standard"
                label={
                  FrntError && FrntError.bookId ? FrntError.bookId : "Book id"
                }
                placeholder="Enter book id"
                onChange={handleInputChange}
                value={formData.bookId}
                error={FrntError?.bookId}
              />
              <Input
                name="refNo"
                type="number"
                variant="standard"
                label={
                  FrntError && FrntError.refNo ? FrntError.refNo : "Ref No"
                }
                placeholder="Reference no."
                onChange={handleInputChange}
                value={formData.refNo}
                error={FrntError?.refNo}
              />

              <Input
                name="IsbnNo"
                variant="standard"
                label={
                  FrntError && FrntError.IsbnNo ? FrntError.IsbnNo : "ISBN NO"
                }
                placeholder="Enter Isbn no."
                onChange={handleInputChange}
                value={formData.IsbnNo}
                error={FrntError?.IsbnNo}
              />

              <Input
                name="description"
                variant="standard"
                label={
                  FrntError && FrntError.description
                    ? FrntError.description
                    : "Description"
                }
                placeholder="Enter description"
                onChange={handleInputChange}
                value={formData.description}
                error={FrntError?.description}
              />

              <Input
                name="language"
                variant="standard"
                label={
                  FrntError && FrntError.language
                    ? FrntError.language
                    : "language"
                }
                placeholder="Enter Language"
                onChange={handleInputChange}
                value={formData.language}
                error={FrntError?.language}
              />

              <Input
                name="year"
                variant="standard"
                label={
                  FrntError && FrntError.year
                    ? FrntError.year
                    : "Publishing Year"
                }
                placeholder="Enter Publishing year"
                onChange={handleInputChange}
                value={formData.year}
                error={FrntError?.year}
              />
              <Input
                name="barcode"
                variant="standard"
                label={
                  FrntError && FrntError.barcode ? FrntError.barcode : "Barcode"
                }
                placeholder="Enter Barcode"
                onChange={handleInputChange}
                value={formData.barcode}
                error={FrntError?.barcode}
              />
              <Input
                name="refSubject"
                variant="standard"
                label="Reference subject"
                placeholder="Reference subject"
                onChange={handleInputChange}
                value={formData.refSubject}
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
