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
} from "@material-tailwind/react";
import book from "../../../../assets/book.png";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
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
import { Link, useParams } from "react-router-dom";
import AddContentModal from "./AddContentModal";
const Syllabus = ({ classRoomData }) => {
  
  const [syllabusdata, setsyllabusdata] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const [isLoading, setIsLoading] = useState(false);
  const { classroomId } = useParams();
  const [contents, setContents] = useState("");

  const getthisDetails = async (id) => {
    try {
      console.log("helloo", id);

      const response = await axiosPrivate.get(`classmaterials/syllabus/${id}`);
      setContents(response.data);
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

  syllabusdata.forEach((item) => {
    const termName = item.term;

    if (!groupedData[termName]) {
      groupedData[termName] = [];
    }
    groupedData[termName].push(item);
  });

  const getsyllabusData = async () => {
    try {
      const response = await axiosPrivate.get(
        `classmaterials/syllabus/dropdowns/${classroomId}`
      );
      setsyllabusdata(response.data);
      console.log(response);
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
              {Object.keys(groupedData).map((termName) => (
                <>
                  <div key={termName} className=" flex justify-center">
                    <Typography variant="h2">{termName}</Typography>
                  </div>

                  {groupedData[termName]?.map((unit) => (
                    <div key={unit.unitName}>
                      {/* loop */}
                      <div className=" col-span-2 mr-2 border-r-2 ">
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
                              <Button size="sm" color="blue" onClick={() => getthisDetails(unit._id)}> 
                              <FontAwesomeIcon
                                icon={faDownload}
                                size="2x"
                                
                              />
                              </Button>
                              
                            </ListItemSuffix>
                          </ListItem>
                        </List>
                        <span className="flex space-x-2 items-center p-2  ">
                          {isLoading ? (
                            "loading..."
                          ) : (
                            <Button size="sm" color="blue-gray">
                              <FontAwesomeIcon
                                icon={faTrashCan}
                                size="2x"
                                onClick={() => deletedata(unit._id)}
                              />
                            </Button>
                          )}
                          <AddContentModal />
                        </span>

                        {contents._id === unit._id && (
                          <div className="Laptop:grid Laptop:grid-cols-4 gap-4 ipad:grid ipad:grid-cols-2 Tablet:grid Tablet:grid-cols-2 mobile:grid mobile:grid-cols-1">
                            <div className=" border-r-2 ">
                              <div className="flex justify-center my-2"></div>
                              <div className="text-center">
                                <FontAwesomeIcon
                                  icon={faFilePdf}
                                  size="2xl"
                                  className="mx-auto"
                                />
                                <Typography>Name Of File</Typography>
                              </div>
                            </div>

                            <div className=" border-r-2 ">
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

                            <div className=" border-r-2 ">
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
                            <div className=" border-r-2 ">
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
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  <hr className="mt-9" />
                </>
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Syllabus;
