import  { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  Input,
  Typography,
  IconButton,
  Badge,

  Select,
  Option,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faUserPlus } from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

const AlocateDriver = () => {
  const axiosPrivate = useAxiosPrivate();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [drivers, setDrivers] = useState([]);
  const [alocatedDriver,setAlocatedDriver]=useState("")
  const onChange = ({ target }) => setName(target.value);
  const handleOpen = () => setOpen(!open);
  const SearchByName = async () => {
    try {
      const response = await axiosPrivate.post("", name);
      setDrivers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAlocate =async()=>{
    try {
        const response = await axiosPrivate.post("",alocatedDriver) 
    } catch (error) {
        console.log(error)
    }
  }
  return (
    <>
      <IconButton variant="text">
        <FontAwesomeIcon
          size="2x"
          icon={faUserPlus}
          color="green"
          onClick={handleOpen}
        />
      </IconButton>

      <Dialog open={open} size="xs">
        <DialogBody>
          <div className="grid gap-6">
            <Typography
              className="-mb-1"
              color="blue-gray"
              variant="h6"
            ></Typography>
            <div className="space-y-2">
              <div className="relative flex w-full max-w-[24rem]">
                <Input
                  label="Staff Name"
                  value={name}
                  onChange={onChange}
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
                <Button
                  onClick={SearchByName}
                  size="sm"
                  color={name ? "gray" : "blue-gray"}
                  disabled={!name}
                  className="!absolute right-1 top-1 rounded"
                >
                  Search
                </Button>
              </div>
              <div className="w-full">
                <Badge content={drivers.length}>
                  <Select label="Driver Deails ">
                    {drivers &&
                      drivers?.map(({ name }, i) => (
                        <Option key={i} value={name} onChange={(e)=>setAlocatedDriver(e)}>
                          {name}
                        </Option>
                      ))}
                  </Select>
                </Badge>
              </div>
            </div>
          </div>
        </DialogBody>

        <DialogFooter className="space-x-2">
          <Button variant="text" color="gray" onClick={handleOpen}>
            cancel
          </Button>
          <Button variant="gradient" color="gray" onChange={handleAlocate}>
           Alocate
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default AlocateDriver;
