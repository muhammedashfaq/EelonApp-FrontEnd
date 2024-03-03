import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Checkbox,
  Chip,
} from "@material-tailwind/react";

const StaffStatus = ({changeStatus}) => {
  return (
    <div>
      <Menu
        dismiss={{
          itemPress: false,
        }}
      >
        <MenuHandler>
          <Chip
            value="Active"
            className="bg-green-500 py-1 px-2 rounded text-white text-sm"
          />
        </MenuHandler>
        <MenuList>
          <MenuItem className="p-0" onClick={()=>changeStatus("Active") }>
            <label
              htmlFor="item-1"
              className="flex cursor-pointer items-center gap-2 p-2"
            >
              
              Active
            </label>
          </MenuItem>
          <MenuItem className="p-0">
            <label
              htmlFor="item-2"
              className="flex cursor-pointer items-center gap-2 p-2"
            >
              
              Retired
            </label>
          </MenuItem>
          <MenuItem className="p-0">
            <label 
              htmlFor="item-3"
              className="  text-red-500 flex cursor-pointer items-center gap-2 p-2"
            >
             
             Terminated
            </label>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
};

export default StaffStatus;
