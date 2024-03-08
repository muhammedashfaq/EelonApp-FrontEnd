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
} from "@material-tailwind/react";
import book from "../../../../assets/book.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faFilePowerpoint,
  faLink,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import AddSyllabusModal from "./AddSyllabusModal";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
const Syllabus = ({classRoomData}) => {
  const [syllabusdata,setsyllabusdata]=useState([])
const axiosPrivate =useAxiosPrivate()


// Create an object to store grouped data based on term name
const groupedData = {};

// Iterate over the array to group data by term name
syllabusdata.forEach((item) => {
  const termName = item.term;
  if (!groupedData[termName]) {
    groupedData[termName] = [];
  }
  groupedData[termName].push(item);
});


const getsyllabusData = async()=>{
  try {
    const response = await axiosPrivate.get(`classmaterials/syllabus/dropdowns`)
    setsyllabusdata(response.data)
    console.log(response);


  } catch (error) {
    console.log(error)
  }
}
useEffect(()=>{
  getsyllabusData()
},[])
  return (
    <div>
      <section className="container mx-auto p-6 font-mono space-y-10">
        <div className="bg-gray-200 tracking-wide my-2 rounded-t-xl flex space-x-3 py-2 px-3">
          <AddSyllabusModal classRoomData={classRoomData} />
        </div>




        <div>
      {Object.keys(groupedData).map((termName) => (
        <div key={termName}>
          <h2>{termName}ssss</h2>
          {groupedData[termName].map((unit) => (
            <div key={unit.unitName}>
              <p>{unit.unitName}kk</p>
              <p>{unit.pageNo}xxx</p>

              {/* Render other unit details */}
            </div>
          ))}
        </div>
      ))}
    </div>





        <div>
          <div className=" flex justify-center">
            <Typography variant="h2">Term Name</Typography>
          </div>
          <div className="Laptop:grid Laptop:grid-cols-6 gap-4 ipad:grid ipad:grid-cols-2 Tablet:grid Tablet:grid-cols-2 mobile:grid mobile:grid-cols-1">
        
            {/* loop */}
            <div className=" col-span-2 mr-2 border-r-2 ">
              <List>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar variant="circular" alt="candice" src={book} />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Name Of Unit
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Page Number / Details
                    </Typography>
                  </div>
                </ListItem>
              </List>
            </div>



            <div className=" border-r-2 ">
              <div className="flex justify-center my-2">
                <Button>Add</Button>
              </div>
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
              <div className="flex justify-center my-2">
                <Button>Add</Button>
              </div>
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faFilePowerpoint}
                  size="2xl"
                  className="mx-auto"
                />
                <Typography>Name Of File</Typography>
              </div>
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faFilePowerpoint}
                  size="2xl"
                  className="mx-auto"
                />
                <Typography>Name Of File</Typography>
              </div>
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
              <div className="flex justify-center my-2">
                <Button>Add</Button>
              </div>
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
              <div className="flex justify-center my-2">
                <Button>Add</Button>
              </div>
              <div className="text-center">
                <FontAwesomeIcon icon={faLink} size="2xl" className="mx-auto" />
                <Typography>Name Of Files</Typography>
              </div>
            </div>
          </div>
        <hr className="mt-9"/>

        </div>






        <div>
          <div className=" flex justify-center">
            <Typography variant="h2">Term Name</Typography>
          </div>
          <div className="Laptop:grid Laptop:grid-cols-6 gap-4 ipad:grid ipad:grid-cols-2 Tablet:grid Tablet:grid-cols-2 mobile:grid mobile:grid-cols-1">
            <div className=" col-span-2 mr-2 border-r-2 ">
              <List>
                <ListItem>
                  <ListItemPrefix>
                    <Avatar variant="circular" alt="candice" src={book} />
                  </ListItemPrefix>
                  <div>
                    <Typography variant="h6" color="blue-gray">
                      Name Of Unit
                    </Typography>
                    <Typography
                      variant="small"
                      color="gray"
                      className="font-normal"
                    >
                      Page Number / Details
                    </Typography>
                  </div>
                </ListItem>
              </List>
            </div>

            <div className=" border-r-2 ">
              <div className="flex justify-center my-2">
                <Button>Add</Button>
              </div>
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
              <div className="flex justify-center my-2">
                <Button>Add</Button>
              </div>
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
              <div className="flex justify-center my-2">
                <Button>Add</Button>
              </div>
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
              <div className="flex justify-center my-2">
                <Button>Add</Button>
              </div>
              <div className="text-center">
                <FontAwesomeIcon icon={faLink} size="2xl" className="mx-auto" />
                <Typography>Name Of File</Typography>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Syllabus;
