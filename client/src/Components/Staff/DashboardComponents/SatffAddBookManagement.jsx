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
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import LibraryBooksAddModal from "./LibraryBooksAddModal";
import { hideloading, showloading } from "../../../Helper/Redux/alertSlice";
import { useDispatch } from "react-redux";
import Banner from "../../Banner/Banner";

const SatffAddBookManagement = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [bookData, setbookData] = useState();
  const [genre, setgenre] = useState();
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState();

  useEffect(() => {
    console.log(genre);
  }, [genre]);

  const getBooks = async () => {
    try {
      // dispatch(showloading());
      const response = await axios.get("/library/books");
      // dispatch(hideloading());

      setbookData(response.data);
      console.log(response.data);
    } catch (error) {
      dispatch(hideloading());
      console.log(error);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);

  const getBookByName = async (e) => {
    e.preventDefault();
    try {
      if (!searchQuery) return;
      const response = await axios.get(
        `library/books/issuelist/search/${searchQuery}`
      );
      console.log(response.data);
      setsearchData(response.data);
      setbookData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Banner />
      <div className=" m-20">
        <div className=" w-full h-auto  flex justify-around mb-2 border-2 p-1 rounded-lg shadow-md">
          <div className="w-72">
            <Select label="Select Genre" onChange={(e) => setgenre(e)}>
              <Option value="Story">Story</Option>
              <Option value="Poem">Poem</Option>
              <Option value="Biography">Biography</Option>
              <Option value="Mystery">Mystery</Option>
              <Option value="Fiction">Fiction</Option>
              <Option value="Non-fiction">Non-fiction</Option>
            </Select>
          </div>
          <div className="w-full md:w-72 flex">
            <form onSubmit={getBookByName}>
              <Input
                label="Search books"
                onChange={(e) => setsearchQuery(e.target.value)}
                value={searchQuery}
                // icon={<MagnifyingGlassIco className="h-5 w-5" />}
              />
            </form>
            <Button variant="text" onClick={getBooks}>
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
                {bookData &&
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
                            {data?.refSub}
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
                          <Button onClick={handleOpen}>Info</Button>

                          <Dialog open={open} handler={handleOpen}>
                            <Card className="w-full max-w-[48rem] flex-row">
                              <CardHeader
                                shadow={false}
                                floated={false}
                                className="m-0 w-2/5 shrink-0 rounded-r-none"
                              >
                                <img
                                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                                  alt="card-image"
                                  className="h-full w-full object-cover"
                                />
                              </CardHeader>
                              <CardBody>
                                <Typography
                                  variant="h4"
                                  color="blue-gray"
                                  className="mb-2"
                                >
                                  Book Name: {data?.bookName}
                                </Typography>
                                <Typography
                                  color="gray"
                                  className="mb-3 font-normal"
                                >
                                  Author: {data?.author}
                                </Typography>
                                <Typography
                                  color="gray"
                                  className="mb-3 font-normal"
                                >
                                  Genre: {data?.genre}
                                </Typography>
                                <Typography
                                  color="gray"
                                  className="mb-3 font-normal"
                                >
                                  Ref No: {data?.refNo}
                                </Typography>
                                <Typography
                                  color="gray"
                                  className="mb-8 font-normal"
                                >
                                  Description: {data?.description}
                                </Typography>
                              </CardBody>
                            </Card>
                          </Dialog>
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
