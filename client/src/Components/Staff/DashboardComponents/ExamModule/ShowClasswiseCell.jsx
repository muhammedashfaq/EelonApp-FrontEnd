import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";

const ShowClasswiseCell = ({
  classes,
  item,
  marksData,
  subjectName,
  student,
}) => {
  const [Celldata, setCelldata] = useState();
  const [grandTotal, setgrandTotal] = useState();

  const getDataFromArray = (value) => {
    if (!value || !student) return;
    const filterSub = marksData?.find((obj) => obj.subject === value);
    const filterStudent = filterSub?.marksArray.find(
      (obj) => obj.studentId === student?._id
    );
    setCelldata(filterStudent);
    // console.log(filterSub);
  };

  useEffect(() => {
    getDataFromArray(`${subjectName}`);
    // console.log(student?._id);
  }, [marksData, student]);

  return (
    <>
      <td className={`${classes} bg-blue-gray-50/50 `}>
        <div className="flex flex-col">
          <Typography
            variant="small"
            color={
              Celldata?.total >= Number(80)
                ? "light-green"
                : Celldata?.total <= 45
                ? "red"
                : "blue-gray"
            }
            className="font-normal"
          >
            {Celldata?.total}
          </Typography>
        </div>
      </td>
      {/* <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {item?.external}
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50 `}>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal"
        ></Typography>
      </td>
      <td className={`${classes}`}>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal"
        ></Typography>
      </td> */}
      {/* <td className={`${classes} bg-blue-gray-50/50 `}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {grandTotal}
        </Typography>
      </td> */}
    </>
  );
};

export default ShowClasswiseCell;
