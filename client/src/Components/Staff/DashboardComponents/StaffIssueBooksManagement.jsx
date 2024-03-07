import {
  Card,
  Typography,
  Drawer,
  Button,
  IconButton,
  Input,
  Textarea,
  Select,
  Option,
  Alert,
  Tooltip,
  CardFooter,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import LibraryBooksAddModal from "./LibraryBooksAddModal";
import LibraryIssueStudentModal from "./LibraryIssueStudentModal";
import Banner from "../../Banner/Banner";
import Spinner from "../../spinner/SpinningLoader";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import LibraryUnIssueStudentModal from "./LibraryUnIssueStudentModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RouteObjects } from "../../../Routes/RoutObjects";

const StaffIssueBookManagement = () => {
  const { page } = useParams();
  const navigate = useNavigate();

  const [alertunissue, setAlertunissue] = useState(false);
  const [alertissue, setAlertissue] = useState(false);
  const [bookData, setbookData] = useState();
  const [searchBookName, setSearchBookName] = useState();
  const [searchData, setsearchData] = useState();
  const [genre, setgenre] = useState();
  const [isLoading, setisLoading] = useState(false);
  const [genreList, setGenreList] = useState();
  const [pageInt, setpageInt] = useState(Number(page));
  const [paginationData, setpaginationData] = useState();
  const [open, setOpen] = useState(true);

  const axiosPrivate = useAxiosPrivate();

  const getBooks = async (pageNo) => {
    try {
      setisLoading(true);
      const response = await axiosPrivate.get(
        `/library/books/pagination?page=${pageNo}&limit=10`
      );
      setbookData(response.data.books);
      setpaginationData(response.data.pagination);

      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  const getBookByGenre = async (value) => {
    if (!value) return;
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
    } catch (error) {
      console.log(error);
    }
  };

  const searchBook = async (e) => {
    e.preventDefault();
    setisLoading(true);
    try {
      if (!searchBookName) {
        setisLoading(false);
        return;
      }
      const response = await axios.get(
        `library/books/issuelist/search/${searchBookName}`
      );
      setsearchData(response.data);
      setisLoading(false);
    } catch (error) {
      console.log(error);
      setisLoading(false);
    }
  };

  useEffect(() => {
    getBooks(page);
    getSettings();
  }, []);

  useEffect(() => {
    setpageInt(Number(page));
  }, [page]);

  return (
    <div className="w-full">
      {isLoading && <Spinner />}

      {alertissue && (
        <Alert color="red" open={open} onClose={() => setOpen(false)}>
          A Book Issued to student Name
        </Alert>
      )}
      {alertunissue && (
        <Alert color="red" open={open} onClose={() => setOpen(false)}>
          A Book Recalled from student Name
        </Alert>
      )}

      {/* <div className="flex justify-center">

      
      <div className="flex justify-center">

        <LibraryBooksAddModal getBooks={getBooks} />
      </div> */}
      <div
        className=" m-20"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container xl">
          <br />
          <div className="flex gap-8 justify-evenly">
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
                  {genreList &&
                    genreList.map((list, i) => (
                      <Option key={i} value={list?.genre}>
                        {list?.genre}
                      </Option>
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
            <div className="w-full md:w-auto flex">
              <form onSubmit={searchBook} className="flex gap-1">
                <Input
                  name="searching"
                  label="Search"
                  onChange={(e) => setSearchBookName(e.target.value)}

                  // icon={<MagnifyingGlassIco className="h-5 w-5" />}
                />
                <IconButton variant="outlined" onClick={searchBook}>
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
              </form>
            </div>
          </div>
          <br />
          <Card className="h-full w-full">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
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
                      Currently issued to
                    </Typography>
                  </th>
                  <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Action
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
                      const isLast = index === searchData.length - 1;
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
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.students?.currentlyIssued}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <div className="flex space-x-2">
                              {data?.students?.currentlyIssued ? (
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  <LibraryUnIssueStudentModal
                                    unissueAlert={setAlertunissue}
                                    setAlert={setAlertissue}
                                    bookId={data?._id}
                                    getBooks={searchBook}
                                    currentlyIssued={
                                      data?.students?.currentlyIssued
                                    }
                                  />
                                </Typography>
                              ) : (
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  <LibraryIssueStudentModal
                                    unissueAlert={setAlertunissue}
                                    setAlert={setAlertissue}
                                    bookId={data?._id}
                                    getBooks={searchBook}
                                    currentlyIssued={
                                      data?.students?.currentlyIssued
                                    }
                                  />
                                </Typography>
                              )}
                            </div>
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
                            ></Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {data?.students?.currentlyIssued}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <div className="flex space-x-2">
                              {data?.students?.currentlyIssued ? (
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  <LibraryUnIssueStudentModal
                                    unissueAlert={setAlertunissue}
                                    setAlert={setAlertissue}
                                    bookId={data?._id}
                                    getBooks={searchBook}
                                    currentlyIssued={
                                      data?.students?.currentlyIssued
                                    }
                                  />
                                </Typography>
                              ) : (
                                <>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                  >
                                    <LibraryIssueStudentModal
                                      unissueAlert={setAlertunissue}
                                      setAlert={setAlertissue}
                                      bookId={data?._id}
                                      getBooks={searchBook}
                                      currentlyIssued={
                                        data?.students?.currentlyIssued
                                      }
                                    />
                                  </Typography>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
              </tbody>
            </table>
          </Card>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              Page {page} of {paginationData?.totalPages}
            </Typography>
            <div className="flex gap-2">
              <Button
                variant="outlined"
                size="sm"
                disabled={page == 1 ? true : false}
                onClick={() => {
                  navigate(`${RouteObjects.Issuebooks}/${pageInt - 1}`);
                  getBooks(pageInt - 1);
                }}
              >
                Previous
              </Button>
              <Button
                variant="outlined"
                size="sm"
                disabled={page == paginationData?.totalPages ? true : false}
                onClick={() => {
                  navigate(`${RouteObjects.Issuebooks}/${pageInt + 1}`);
                  getBooks(pageInt + 1);
                }}
              >
                Next
              </Button>
            </div>
          </CardFooter>{" "}
        </div>
      </div>
    </div>
  );
};

export default StaffIssueBookManagement;
