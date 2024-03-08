
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
import book from '../../../../assets/book.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const data = [
    {
      label: "HTML",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
 

const Syllabus = () => {
  return (
    <div>
        <section className="container mx-auto p-6 font-mono">
    <div className="bg-gray-200 tracking-wide my-2 rounded-t-xl flex space-x-3 py-2 px-3">
        <div>
            <Input label="Book Name" placeholder="Enter Here"/>
        </div>
        <div>
            <Input label="Unit Page " placeholder="Enter Here"/>
        </div>
        <div>
            <IconButton >
<FontAwesomeIcon icon={faRightToBracket} size="2xl"/>
            </IconButton>
        </div>
    </div>
    <div className="flex  ">

    <div className="w-1/3 border-r-2 mr-2">
      <List>
        <ListItem>
          <ListItemPrefix>
            <Avatar variant="circular" alt="candice" src={book} />
          </ListItemPrefix>
          <div>
            <Typography variant="h6" color="blue-gray">
              Name Of Unit
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Page Number / Details
            </Typography>
          </div>
        </ListItem>
        
      </List>
    </div>

   <div className="">
    dddddddddddddd
   </div>


   
        </div>
  
</section>
    </div>
  )
}

export default Syllabus