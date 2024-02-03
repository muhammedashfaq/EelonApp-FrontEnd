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
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import LibraryBooksAddModal from "./LibraryBooksAddModal";
import LibraryIssueStudentModal from "./LibraryIssueStudentModal";
import { hideloading, showloading } from "../../../Helper/Redux/alertSlice";
import { useDispatch } from "react-redux";
import Banner from "../../Banner/Banner";

const StaffIssueBookManagement = () => {
  const [alertunissue, setAlertunissue] = useState(false);

  const [alertissue, setAlertissue] = useState(false);
  const [bookData, setbookData] = useState();
  const [searchBookName, setSearchBookName] = useState();
  const [searchData, setsearchData] = useState();

  const dispatch = useDispatch();

  const getBooks = async () => {
    try {
      dispatch(showloading());

      const response = await axios.get("/library/books");
      dispatch(hideloading());
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

  const [open, setOpen] = useState(true);

  const searchBook = async () => {
    try {
      const response = await axios.get(
        `library/books/issuelist/search/${searchBookName}`
      );
      console.log(response.data);
      setsearchData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full">
      <Banner />

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
          <div className="flex gap-8">
            <div className="w-72">
              <Select label="Select Version">
                <Option>Genre</Option>
                <Option>Auther</Option>
                <Option>Language</Option>
              </Select>
            </div>
            <div className="w-full md:w-72 flex ">
              <Input
                label="Search"
                onChange={(e) => setSearchBookName(e.target.value)}
                // icon={<MagnifyingGlassIco className="h-5 w-5" />}
              />
              <Button size="sm" variant="text" onClick={searchBook}>
                Search
              </Button>
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
                      Issue book
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
                {searchData &&
                  searchData.map((data, index) => {
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
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data?.students?.currentlyIssued}
                          </Typography>
                        </td>
                        <td className={classes}>
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
                              currentlyIssued={data?.students?.currentlyIssued}
                            />
                          </Typography>
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

export default StaffIssueBookManagement;
