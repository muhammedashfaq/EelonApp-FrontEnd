import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  ListItemSuffix,
  IconButton,
} from "@material-tailwind/react";
import { TrashIcon } from "lucide-react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { UserCircle } from "lucide-react";
import DeleteStudentModal from "./DeleteStudentModal";

const StudentList = ({ studentsData, getStudents }) => {
  return (
    <Card className="w-full">
      <List>
        {studentsData &&
          studentsData.map((data) => (
            <ListItem key={data?._id}>
              <ListItemPrefix>
                <UserCircle />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-grayfirst">
                  {data?.email}
                </Typography>
                {/* <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    UI/UX Designer @ Material Tailwind
                  </Typography> */}
              </div>

              <ListItemSuffix>
                {/* <IconButton variant="text" color="blue-gray">
                  <TrashIcon />
                </IconButton> */}

                <DeleteStudentModal
                  userId={data?._id}
                  userName={data?.email}
                  getStudents={getStudents}
                />
              </ListItemSuffix>
            </ListItem>
          ))}
      </List>
    </Card>
  );
};
export default StudentList;
