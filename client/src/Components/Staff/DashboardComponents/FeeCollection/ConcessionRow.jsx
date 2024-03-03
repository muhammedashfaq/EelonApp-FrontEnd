import { Checkbox, Tooltip, Typography } from "@material-tailwind/react";
import { useState, useEffect } from "react";

const ConcessionRow = ({ item, handleData, id, removeDiv }) => {
  const [concessionReductionArr, setconcessionReductionArr] = useState();
  const [checkBx, setcheckBx] = useState(false);

  // const handleCheckboxChange = (userId) => {
  //   removeDiv
  // };
  const handleCheckChange = () => {
    if (checkBx) {
      revokeHandleDataFn();
    } else {
      removeDiv(id);
    }
  };
  useEffect(() => {
    handleCheckChange();
  }, [checkBx]);

  const revokeHandleDataFn = () => {
    handleData({
      id,
      divType: "concessionDiv",
      concessionName: item?.concessionName,
      academicYear: item?.academicYear,
      reductionType: item?.reductionType,
      reductionAmount: item?.reductionAmount,
      reductionPercentage: item?.reductionPercentage,
      concessionReason: item?.concessionReason,
      amount: -Number(item?.reductionAmount),
    });
  };
  // useEffect(() => {
  //   revokeHandleDataFn();
  // }, [item, id]);

  // console.log(item);
  return (
    <>
      <div className="p-4 flex justify-evenly">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-2 p-3">
          <Typography variant="paragraph">
            Concession name: {item?.concessionName}
          </Typography>
          <Typography>Academic year: {item?.academicYear}</Typography>
          <Typography>Amount: {item?.reductionAmount}</Typography>
          <div>
            <Typography>
              <span
                style={{
                  backgroundColor:
                    item?.status === "unclaimed" ? "rgb(139,205,74)" : "red",
                  borderRadius: "10px",
                }}
                className=" px-3 py-2"
              >
                Status: {item?.status}
              </span>
            </Typography>
          </div>
        </div>
        <Checkbox
          value={checkBx}
          onChange={(e) => setcheckBx(e.target.checked)}
          disabled={item?.status !== "unclaimed"}
        />
      </div>
    </>
  );
};

export default ConcessionRow;
