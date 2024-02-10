import {
  Card,
  Typography,
  CardHeader,
  CardBody,
  Button,
  Dialog,
  Input,
  Select,
  Option,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import LibraryBooksAddModal from "./LibraryBooksAddModal";
import { useDispatch } from "react-redux";
import Banner from "../../Banner/Banner";
import LIbraryBookDetailsModal from "./LIbraryBookDetailsModal";
import LibraryEditBooksModal from "./LibraryEditBooksModal";
import Spinner from "../../spinner/SpinningLoader";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";

const SatffAddBookManagement = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [bookData, setbookData] = useState();
  const [genre, setgenre] = useState();
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState();
  const [isLoading, setisLoading] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [GenreList, setGenreList] = useState();

  const getBooks = async () => {
    try {
      setisLoading(true);
      const response = await axiosPrivate.get("/library/books");
      // dispatch(hideloading());

      setbookData(response.data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };
  const getBookByName = async (e) => {
    e.preventDefault();
    try {
      setisLoading(true);
      if (!searchQuery) return;
      const response = await axios.get(
        `library/books/issuelist/search/${searchQuery}`
      );
      setsearchData(response.data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  const getBookByGenre = async (value) => {
    try {
      setisLoading(true);

      const response = await axios.get(
        `library/books/issuelist/searchGenre/${value}`
      );
      setsearchData(response.data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  const getSettings = async () => {
    try {
      const response = await axiosPrivate.get(`librarysettings`);
      setGenreList(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBooks();
    getSettings();
  }, []);

  return (
    <div className="w-full">
      {isLoading && <Spinner />}
      <Banner />
      <div className=" m-20">
        <div className=" w-full h-auto  flex justify-around mb-2 border-2 p-1 rounded-lg shadow-md">
          <div className="w-auto flex gap-1">
            <Select
              label="Select Genre"
              onChange={(e) => {
                setgenre(e);
                getBookByGenre(e);
              }}
              value={genre}
            >
              <>
                {GenreList &&
                  GenreList.map((list) => (
                    <Option value={list.genre}>{list.genre}</Option>
                  ))}
              </>
            </Select>
            {/* <Button
              variant="text"
              style={{ textTransform: "none" }}
              onClick={getBookByGenre}
            >
              Filter
            </Button> */}
            <Button
              variant="text"
              onClick={() => {
                setsearchData();
                setgenre();
              }}
              style={{ textTransform: "none" }}
            >
              Reset
            </Button>
          </div>
          <div className="w-full md:w-80 flex gap-1 ">
            <form onSubmit={getBookByName}>
              <Input
                label="Search books"
                onChange={(e) => setsearchQuery(e.target.value)}
                value={searchQuery}
                // icon={<MagnifyingGlassIco className="h-5 w-5" />}
              />
            </form>
            <IconButton variant="outlined">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </IconButton>
            <Button
              variant="text"
              onClick={() => setsearchData()}
              style={{ textTransform: "none" }}
            >
              Reset
            </Button>
          </div>
          <div>
            <LibraryBooksAddModal getBooks={getBooks} />
          </div>
        </div>

        <div className="container xl">
          <Card className="h-96 w-full overflow-y-scroll">
            <table className="w-full min-w-max table-auto text-left ">
              <thead className=" ">
                <tr>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className=" text-blue-900 border-l  "
                    >
                      No.
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Reference no.
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Book name
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Isbn no
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Author
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Genre
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Barcode
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Reference subject
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Language
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Info
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Edit
                    </Typography>
                  </th>
                  {/* <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                    variant="small"
                    color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Issue date
                    </Typography>
                  </th> */}
                </tr>
              </thead>
              <tbody>
                {searchData
                  ? searchData.map((data, index) => {
                      const isLast = index === bookData.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={data._id}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {index + 1}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.refNo}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.bookName}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.IsbnNo}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.author}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.genre}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.barcode}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.refSubject}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.language}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <LIbraryBookDetailsModal data={data} />
                          </td>

                          <td className={classes}>
                            <LibraryEditBooksModal
                              data={data}
                              getBooks={getBooks}
                            />
                          </td>
                        </tr>
                      );
                    })
                  : bookData &&
                    bookData.map((data, index) => {
                      const isLast = index === bookData.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={data._id}>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {index + 1}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.refNo}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.bookName}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.IsbnNo}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.author}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.genre}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.barcode}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.refSubject}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.language}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <LIbraryBookDetailsModal data={data} />
                          </td>

                          <td className={classes}>
                            <LibraryEditBooksModal
                              data={data}
                              getBooks={getBooks}
                            />
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
