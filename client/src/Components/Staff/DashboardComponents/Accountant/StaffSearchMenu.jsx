import {Menu, MenuItem, List, Badge, Typography, ListItem, MenuHandler, Button, MenuList} from '@material-tailwind/react';

const StaffSearchMenu = ({searchData, setselectedStaff}) => {
  return (
    <>
      <Menu>
        <Badge content={searchData?.length} color='green'>
          <MenuHandler>
            <Button className='w-52' color='light-green'>
              Staffs
            </Button>
          </MenuHandler>
        </Badge>

        <MenuList className='max-h-72'>
          <MenuItem>
            <List>
              {searchData &&
                searchData.map((item, i) => (
                  <ListItem
                    key={i}
                    onClick={() => {
                      setselectedStaff(item);
                    }}
                  >
                    <div>
                      <Typography variant='h6' color='blue-gray'>
                        {item?.name}
                      </Typography>
                      <Typography variant='small' color='gray' className='font-normal'>
                        <span>Staff id:</span>
                        {item?.staffId}
                      </Typography>
                    </div>
                  </ListItem>
                ))}
            </List>
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default StaffSearchMenu;
