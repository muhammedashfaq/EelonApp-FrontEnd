import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  IconButton,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import BusRouteRow from "./BusRouteRow";
import { v4 as uuidv4 } from "uuid";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

const AddBusRoutes = () => {
  const [dataArray, setDataArray] = useState([]);
  const [busNo, setbusNo] = useState();
  const [busDDs, setBusDDs] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const [selectedBus, setselectedBus] = useState({});

  const getDropdownData = async () => {
    try {
      const response = await axiosPrivate.get("transportation/bus/dropdowns");
      setBusDDs(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = Array.from(dataArray);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setDataArray(items);
  };

  useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  useEffect(() => {
    getDropdownData();
  }, []);

  useEffect(() => {
    console.log(selectedBus);
  }, [selectedBus]);
  return (
    <>
      <div className="px-5">
        <div
          className="h-20 bg-gray-600 w-full shadow-2xl mt-10 flex justify-between items-center px-5"
          style={{ borderRadius: "15px" }}
        >
          <div className="flex items-center gap-3">
            <Typography variant="h6">Bus no:</Typography>
            <Select label="Select bus no" onChange={(e) => setselectedBus(e)}>
              {busDDs &&
                busDDs.map((item) => (
                  <Option value={item}>
                    <div className="flex justify-between">
                      <Typography variant="h6">{item.busNo}</Typography>
                      <Typography variant="small">{item?.rgNo}</Typography>
                    </div>
                  </Option>
                ))}
            </Select>
          </div>
          <div className="flex flex-col">
            <Typography variant="h6">Bus no:{selectedBus?.busNo}</Typography>
            <Typography variant="small">
              Registration no:{selectedBus?.rgNo}
            </Typography>
          </div>
          <IconButton variant="outlined" size="sm" onClick={addDiv}>
            <FontAwesomeIcon icon={faPlus} size="xl" />
          </IconButton>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <div className="h-14 w-96 bg-gradient-to-r from-gray-300 to-blue-gray-300 m-5 px-10 shadow-2xl rounded-2xl shadow-black flex justify-between  items-center">
            <div className="flex justify-between">
              <Typography variant="paragraph">Start location: </Typography>
              <Typography variant="h6">MM school</Typography>
            </div>
          </div>
          <div style={{ width: "800px" }}>
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided) => (
                  <div ref={provided.innerRef} {...provided.droppableProps}>
                    {dataArray.map((item, index) => (
                      <Draggable
                        key={item?.id}
                        draggableId={item?.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <BusRouteRow
                              key={item?.id}
                              item={item}
                              handleData={handleData}
                              removeDiv={removeDiv}
                              index={index + 1}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBusRoutes;
