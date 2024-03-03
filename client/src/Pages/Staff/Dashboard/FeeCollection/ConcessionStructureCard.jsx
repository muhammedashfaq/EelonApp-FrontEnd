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
import AddStudentToConcessionModal from "./AddStudentToConcessionModal";

const TABLE_HEAD = [
  "Sl.no",
  "Concession name",
  "Academic year",
  "Type",
  "Percentage/Amount",
  "Action",
];

export default function ConcessionStructureCard({
  item,
  getFeeStructures,
  index,
  academicYrDD,
}) {
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
          axiosPrivate.delete(`accounts/concessionstructure/${value}`);
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
  console.log(item, "item");
  return (
    <div className="container xl">
      <Card className="h-full w-full overflow-scroll mt-5">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {index}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {item?.academicYear}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {item?.concessionName}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {item?.reductionType}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="blue-gray"
                  className="font-medium"
                >
                  {item?.reductionPercentage && `${item?.reductionPercentage}%`}
                  {item?.reductionAmount && item?.reductionAmount}
                </Typography>
              </td>
              <td className="p-4">
                <AddStudentToConcessionModal
                  academicYrDD={academicYrDD}
                  item={item}
                  templateId={item?._id}
                  concessionName={item?.concessionName}
                  academicYear={item?.academicYear}
                  reductionType={item?.reductionType}
                  reductionAmount={item?.reductionAmount}
                  reductionPercentage={item?.reductionPercentage}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </Card>
    </div>
  );
}
