import {
  Avatar,
  Badge,
  Button,
  List,
  ListItem,
  ListItemPrefix,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const StudentsListbysearchName = ({setStudentDatabyName, studentDatabyName ,setStudentData }) => {


  return (
    <div>
      <Menu>
        <Badge content={studentDatabyName.length} color="green">
          <MenuHandler>
            <Button className="w-96">Students </Button>
          </MenuHandler>
        </Badge>

        <MenuList className="max-h-72">
          <MenuItem>
            <List>
              {studentDatabyName &&
                studentDatabyName.map((item, i) => (
                  <ListItem key={i} onClick={()=>{setStudentData(item); setStudentDatabyName([])} } >
               
                    <div >
                      <Typography variant="h6" color="blue-gray">
                        {item?.studentName} - {item?.classId} 
                      </Typography>
                      <Typography
                        variant="small"
                        color="gray"
                        className="font-normal"
                      >
                        <span>Admission Number:</span>
                        {item?.admnNo}
                      </Typography>
                    </div>
                  </ListItem>
                ))}
            </List>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default StudentsListbysearchName;
