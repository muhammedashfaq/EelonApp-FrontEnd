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

const StudentList = () => {
  const { classroomId } = useParams();
  const [teachersData, setteachersData] = useState();

  const axiosPrivate = useAxiosPrivate();

  const getTeachers = async () => {
    try {
      const response = await axiosPrivate.get(
        `classroom/getclassroomsstudents/${classroomId}`
      );
      setteachersData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeachers();
  }, []);
  useEffect(() => {
    console.log(teachersData);
  }, [teachersData]);

  return (
    <Card className="w-full">
      <List>
        {teachersData &&
          teachersData.map((data) => (
            <ListItem>
              <ListItemPrefix>
                <Avatar
                  variant="circular"
                  alt="emma"
                  src="https://docs.material-tailwind.com/img/face-3.jpg"
                />
              </ListItemPrefix>
              <div>
                <Typography variant="h6" color="blue-gray">
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
                <IconButton variant="text" color="blue-gray">
                  <TrashIcon />
                </IconButton>
              </ListItemSuffix>
            </ListItem>
          ))}
      </List>
    </Card>
  );
};
export default StudentList;
