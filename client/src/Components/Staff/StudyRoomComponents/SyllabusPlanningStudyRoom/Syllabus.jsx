import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  Input,
  Button,
  IconButton,
  ListItemSuffix,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import book from "../../../../assets/book.png";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faEllipsis,
  faFilePdf,
  faFilePowerpoint,
  faLink,
  faRightToBracket,
  faTrash,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import AddSyllabusModal from "./AddSyllabusModal";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";
import AddContentModal from "./AddContentModal";
const Syllabus = ({ classRoomData }) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpen = () => setShowModal(!showModal);

  const [openId, setOpenId] = useState(null);
  const [contentId, setContentId] = useState(null);
  const [unitId,setUnitId]=useState(null)
  const [syllabusdata, setsyllabusdata] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const [isLoading, setIsLoading] = useState(false);
  const { classroomId } = useParams();
  const [syllabusContents, setSyllabusContents] = useState([]);
  const AddContent = (id) => {
    setContentId(id);
    setShowModal(true);
  };
  const getthisDetails = async (id) => {
    try {
      setUnitId(id)

      const response = await axiosPrivate.get(`classmaterials/syllabus/${id}`);
      setSyllabusContents(response.data.contents);
      setOpenId(response.data._id);
      console.log(response, "dd");
    } catch (error) {
      console.log(error);
    }
  };
  const deletedata = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",

        confirmButtonText: "Yes, delete it!",
      });
      if (result.isConfirmed) {
        setIsLoading(true);
        await axiosPrivate.delete(`classmaterials/syllabus/${id}`);
        getsyllabusData();
        setIsLoading(false);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const groupedData = {};

  syllabusdata?.forEach((item) => {
    const monthName = item.month;

    if (!groupedData[monthName]) {
      groupedData[monthName] = [];
    }
    groupedData[monthName].push(item);
  });

  const groupedContentData = {};

  syllabusContents?.forEach((item) => {
    const Contents = item.contentType;
    if (!groupedContentData[Contents]) {
      groupedContentData[Contents] = [];
    }
    groupedContentData[Contents].push(item);
  });

  const getsyllabusData = async () => {
    try {
      const response = await axiosPrivate.get(
        `classmaterials/syllabus/dropdowns/${classroomId}`
      );
      setsyllabusdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getsyllabusData();
  }, []);
  return (
    <div>
      <section className="container mx-auto p-6 font-mono space-y-10">
        <div className="bg-gray-200 tracking-wide my-2 rounded-t-xl flex space-x-3 py-2 px-3">
          <AddSyllabusModal
            classRoomData={classRoomData}
            getsyllabusData={getsyllabusData}
          />
        </div>

        <div>
          {Object.keys(groupedData).length == 0 ? (
            <>
              <div className="w-full bg-gray-200 flex flex-col justify-center items-center h-96">
                <p className="text-4xl font-bold text-gray-600">
                  No details about the syllabus have been added yet!
                </p>
                <p className="mt-4 text-lg text-gray-800">
                  Start by adding syllabus details through the provided options.
                </p>
              </div>
            </>
          ) : (
            <>
              {Object.keys(groupedData).map((monthName) => (
                <>
                  <div key={monthName} className=" flex justify-center">
                    <Typography variant="h2">{monthName}</Typography>
                  </div>
<div className="flex bg-red-300">
<div>

                  {groupedData[monthName]?.map((unit) => (
                    <>
                      <div className="">
                        <div key={unit.unitName} className="w-1/4">
                          <List>
                            <ListItem>
                              <ListItemPrefix>
                                <Avatar
                                  variant="circular"
                                  alt="candice"
                                  src={book}
                                  />
                              </ListItemPrefix>
                              <div>
                                <Typography variant="h6" color="blue-gray">
                                  {unit.unitName}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="gray"
                                  className="font-normal"
                                >
                                  {unit.pageNo}
                                </Typography>
                              </div>
                              <ListItemSuffix>
                                <Menu>
                                  <MenuHandler>
                                    <FontAwesomeIcon
                                      icon={faEllipsis}
                                      className="cursor-pointer"
                                    />
                                  </MenuHandler>
                                  <MenuList>
                                    <MenuItem
                                      onClick={() => getthisDetails(unit._id)}
                                    >
                                      Open
                                    </MenuItem>
                                    <MenuItem
                                      onClick={() => deletedata(unit._id)}
                                    >
                                      Delete
                                    </MenuItem>
                                    <MenuItem
                                      onClick={() => AddContent(unit._id)}
                                    >
                                      Add
                                    </MenuItem>
                                  </MenuList>
                                </Menu>

                      
                              </ListItemSuffix>
                            </ListItem>
                          </List>
                        </div>
                      </div>
                    </>
                  ))}

</div>
<div className="bg-blue-800 w-full">
{/* <div class="-mt-px flex divide-x divide-gray-200">
        <div class="flex w-0 flex-1">
          <a href="howpossible17@example.com" class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
            Email
          </a>
        </div>
        <div class="-ml-px flex w-0 flex-1">
          <a href="tel:+1-202-555-0170" class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900">
            <svg class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
            </svg>
            Call
          </a>
        </div>
      </div> */}

                  {openId === unitId && (
                    <div className="">
                            <div className=" border-r-2 ">
                              <div className="flex justify-center my-2"></div>
                              {groupedContentData.pdf?.map((m, i) => (
                                <div key={i} className="text-center">
                                  <FontAwesomeIcon
                                    icon={faFilePdf}
                                    size="2xl"
                                    className="mx-auto"
                                  />
                                  <Typography>{m.title}</Typography>
                                </div>
                              ))}
                            </div>

                            {groupedContentData.ppt?.map((m, i) => (
                              <div key={i} className=" border-r-2 ">
                                <div className="flex justify-center my-2"></div>
                                <div className="text-center">
                                  <FontAwesomeIcon
                                    icon={faFilePowerpoint}
                                    size="2xl"
                                    className="mx-auto"
                                    />
                                  <Typography>Name Of File</Typography>
                                </div>
                              </div>
                            ))}

                            {groupedContentData.YT?.map((m, i) => (
                              <div key={i} className=" border-r-2 ">
                                <div className="flex justify-center my-2"></div>
                                <div className="text-center">
                                  <FontAwesomeIcon
                                    icon={faYoutube}
                                    size="2xl"
                                    className="mx-auto"
                                  />
                                  <Typography>Name Of File</Typography>
                                </div>
                              </div>
                            ))}

                            {groupedContentData.other?.map((m, i) => (
                              <div key={i} className=" border-r-2 ">
                                <div className="flex justify-center my-2"></div>
                                <div className="text-center">
                                  <FontAwesomeIcon
                                    icon={faLink}
                                    size="2xl"
                                    className="mx-auto"
                                    />
                                  <Typography>Name Of Files</Typography>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                </div>
              </div>
                  <hr className="mt-9" />
                </>
              ))}
            </>
          )}
        </div>
      </section>
      {showModal && (
        <AddContentModal
        id={contentId}
          showModal={showModal}
          handleOpen={handleOpen}
          />
      )}
    </div>
  );
};

export default Syllabus;
