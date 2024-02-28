import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";

export default function FeeStructureCards({ item, getFeeStructures }) {
  const axiosPrivate = useAxiosPrivate();

  const deleteStructures = async (value) => {
    if (!value) return;
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosPrivate.delete(`accounts/feestructure/${value}`);
          Swal.fire({
            title: "Deleted!",
            text: "Fee structure has been deleted.",
            icon: "success",
          });
          getFeeStructures();
        }
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <Card className="mt-6 w-80">
      <CardBody>
        <div className="flex justify-between">
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {item?.feeType}
          </Typography>
          <Menu>
            <MenuHandler>
              <IconButton variant="text">
                <FontAwesomeIcon icon={faEllipsisV} size="xl" />
              </IconButton>
            </MenuHandler>
            <MenuList>
              <MenuItem onClick={() => deleteStructures(item?._id)}>
                Delete fee structure
              </MenuItem>
              <MenuItem>Cancel</MenuItem>
            </MenuList>
          </Menu>
        </div>
        <Typography variant="small" color="blue-gray" className="mb-2">
          {item?.othersType}
        </Typography>
        {item?.othersType !== "Additional fee" && (
          <>
            <Typography>Term: {item?.term}</Typography>
            <Typography>Class: {item?.std}</Typography>
          </>
        )}
        <Typography>Academic year: {item?.academicYear}</Typography>
        <Typography variant="h6">Amount: {item?.amount}</Typography>
      </CardBody>
      {/* <CardFooter className="pt-0">
      </CardFooter> */}
    </Card>
  );
}
