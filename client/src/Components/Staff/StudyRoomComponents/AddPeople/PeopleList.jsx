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
const PeopleList = () => {
    return(
<Card className="w-full">
      <List>
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="candice" src="https://docs.material-tailwind.com/img/face-1.jpg" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Tania Andrew
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Software Engineer @ Material Tailwind
            </Typography>
          </div>
          
          <ListItemSuffix>
            <IconButton variant="text" color="blue-gray">
              <TrashIcon />
            </IconButton>
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="alexander" src="https://docs.material-tailwind.com/img/face-2.jpg" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Alexander
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Backend Developer @ Material Tailwind
            </Typography>
          </div>
          
          <ListItemSuffix>
            <IconButton variant="text" color="blue-gray">
              <TrashIcon />
            </IconButton>
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="emma" src="https://docs.material-tailwind.com/img/face-3.jpg" />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Emma Willever
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              UI/UX Designer @ Material Tailwind
            </Typography>
          </div>

          <ListItemSuffix>
            <IconButton variant="text" color="blue-gray">
              <TrashIcon />
            </IconButton>
          </ListItemSuffix>
        </ListItem>
      </List>
    </Card>
  );
}
export default PeopleList