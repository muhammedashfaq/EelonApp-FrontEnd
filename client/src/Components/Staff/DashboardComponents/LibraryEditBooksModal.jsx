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
import { bookAddValidation } from "../../../Helper/Validations/validations";
import { useNavigate } from "react-router-dom";
import { RouteObjects } from "../../../Routes/RoutObjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faPencil } from "@fortawesome/free-solid-svg-icons";
const useDropdownState = (initialValue, fetchedValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (fetchedValue !== undefined) {
      setValue(fetchedValue);
    }
  }, [fetchedValue]);

  return [value, setValue];
};

export default function LibraryEditBooksModal({ getBooks, data, GenreList }) {
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
  const genreState = useDropdownState("", formData?.genre);
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
  const alldara = {
    ...formData,
    genre: genreState[0],
  };

  const updateBook = async () => {
    try {
      const error = bookAddValidation(formData);
      if (!Object.values(error).every((value) => value === "")) {
        setFrntError(error);
        return;
      } else {
        const response = await axios.put(`/library/books/${dbId}`, alldara);
        handleClose();
      }
    } catch (error) {
      console.log(error);
    }
  };
  useState(() => {
    setFormData(data);
  }, [data]);
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
          <FontAwesomeIcon icon={faEdit} className="h-6 w-5" />
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
                error={FrntError && FrntError?.bookName}
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
                value={formData?.author}
                error={FrntError && FrntError.author}
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
                value={genreState[0]}
                onChange={(e) => genreState[1](e)}
              >
                <>
                  {GenreList &&
                    GenreList.map((data) => (
                      <Option value={data?.genre}>{data?.genre}</Option>
                    ))}
                </>
              </Select>

              <Input
                name="bookId"
                variant="standard"
                label={
                  FrntError && FrntError.bookId ? FrntError.bookId : "Book id"
                }
                placeholder="Enter book id"
                onChange={handleInputChange}
                value={formData?.bookId}
                error={FrntError && FrntError?.bookId}
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
