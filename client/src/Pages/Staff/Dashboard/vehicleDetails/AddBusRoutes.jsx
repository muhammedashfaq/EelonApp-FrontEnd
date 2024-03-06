import { useEffect, useState } from "react";
import Banner from "../../../../Components/Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { IconButton } from "@material-tailwind/react";
import BusRouteRow from "./BusRouteRow";
import { v4 as uuidv4 } from "uuid";

const AddBusRoutes = () => {
  const [dataArray, setDataArray] = useState([]);

  const addDiv = () => {
    const newId = uuidv4();
    const newObj = { id: newId };
    setDataArray([...dataArray, newObj]);
  };
  const removeDiv = (idToRemove) => {
    if (!idToRemove) return;
    const updatedDivs = dataArray.filter((item) => item.id !== idToRemove);
    setDataArray(updatedDivs);
  };

  const handleData = (data) => {
    const { id } = data;
    const existingIndex = dataArray.findIndex((item) => item.id === id);

    if (existingIndex !== -1) {
      setDataArray((prevDataArray) => {
        const newDataArray = [...prevDataArray];
        newDataArray[existingIndex] = data;
        return newDataArray;
      });
    } else {
      setDataArray((prevDataArray) => [...prevDataArray, data]);
    }
  };

  useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  return (
    <>
      <Banner />
      <div className="px-5">
        <div
          className="h-14 bg-blue-gray-300 w-full shadow-2xl mt-10 flex flex-row-reverse items-center px-5"
          style={{ borderRadius: "15px" }}
        >
          <div></div>
          <IconButton variant="outlined" size="sm" onClick={addDiv}>
            <FontAwesomeIcon icon={faPlus} size="xl" />
          </IconButton>
        </div>
      </div>
      <div>
        {dataArray &&
          dataArray.map((item, index) => (
            <BusRouteRow
              key={item?.id}
              item={item}
              uuid={item.id}
              handleData={handleData}
              removeDiv={removeDiv}
              index={index + 1}
            />
          ))}
      </div>
    </>
  );
};

export default AddBusRoutes;
