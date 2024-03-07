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
  CardFooter,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { RouteObjects } from "../../../Routes/RoutObjects";
import LibraryBulkUploadModal from "./LibraryBulkUploadModal";

const SatffAddBookManagement = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [bookData, setbookData] = useState();
  const [paginationData, setpaginationData] = useState();
  const [genre, setgenre] = useState();
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState();
  const [isLoading, setisLoading] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [GenreList, setGenreList] = useState();

  const { page } = useParams();
  const navigate = useNavigate();
  const [pageInt, setpageInt] = useState(Number(page));

  // console.log(Number(page) + 2);
  const deleteBook = async (id, name) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this Book Data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        // User confirmed, proceed with deletion
        await axiosPrivate.delete(`/library/books/${id}`);
        Swal.fire({
          title: "Deleted!",
          text: `${name} Book has been deleted`,
          icon: "success",
        });
        getBooks();
      }
    } catch (error) {
      toast.error("Something went wrong");
      console.error(error);
    }
  };
  const getBooks = async (pageNo) => {
    try {
      setisLoading(true);
      const response = await axiosPrivate.get(
        `/library/books/pagination?page=${pageNo}&limit=10`
      );
      // dispatch(hideloading());

      setbookData(response.data.books);
      setpaginationData(response.data.pagination);
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
    } catch (error) {
      console.log(error);
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
                  GenreList.map((list, i) => (
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
                setsearchQuery("");
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
          <div className="space-x-2">
            <LibraryBooksAddModal GenreList={GenreList} getBooks={getBooks} />
            <LibraryBulkUploadModal getBooks={getBooks} />
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
                      onClick={() => {
                        navigate(
                          `${RouteObjects.Bookmanagment}/${paginationData.prev.page}`
                        );
                        getBooks(paginationData.prev.page);
                      }}
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
                              GenreList={GenreList}
                            />

                            {data?.students?.currentlyIssued ? (
                              <Tooltip
                                content="Book Alredy Issued"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <FontAwesomeIcon icon={faTrash} color="grey" />
                              </Tooltip>
                            ) : (
                              <Tooltip
                                content="Delete Book"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <FontAwesomeIcon
                                  className="cursor-pointer"
                                  icon={faTrash}
                                  color="red"
                                  onClick={() =>
                                    deleteBook(data._id, data.bookName)
                                  }
                                />
                              </Tooltip>
                            )}
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
                              GenreList={GenreList}
                            />

                            {data?.students?.currentlyIssued ? (
                              <Tooltip
                                content="Book Alredy Issued"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <FontAwesomeIcon icon={faTrash} color="grey" />
                              </Tooltip>
                            ) : (
                              <Tooltip
                                content="Delete Book"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <FontAwesomeIcon
                                  className="cursor-pointer"
                                  icon={faTrash}
                                  color="red"
                                  onClick={() =>
                                    deleteBook(data._id, data.bookName)
                                  }
                                />
                              </Tooltip>
                            )}
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
                  navigate(`${RouteObjects.Bookmanagment}/${pageInt - 1}`);
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
                  navigate(`${RouteObjects.Bookmanagment}/${pageInt + 1}`);
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

export default SatffAddBookManagement;
