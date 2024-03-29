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

import { UserCircle } from "lucide-react";

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

               
              </ListItemSuffix>
            </ListItem>
          ))}
      </List>
    </Card>
  );
};
export default StudentList;
