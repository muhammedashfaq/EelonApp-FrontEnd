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
import { UserCircle } from "lucide-react";
import DeleteTeacherModal from "./DeleteTeacherModal";

const PeopleList = ({ teachersData, getTeachers }) => {
  return (
    <Card className="w-full">
      <List>
        {teachersData &&
          teachersData.map((data) => (
            <ListItem>
              <ListItemPrefix>
                <UserCircle />
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
                <DeleteTeacherModal
                  userId={data?._id}
                  userName={data?.email}
                  getTeachers={getTeachers}
                />
              </ListItemSuffix>
            </ListItem>
          ))}
      </List>
    </Card>
  );
};
export default PeopleList;
