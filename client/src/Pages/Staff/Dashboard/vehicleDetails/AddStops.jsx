import {
  Input,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import Banner from "../../../../Components/Banner/Banner";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";

const center = {
  lat: 11.444954555669439,
  lng: 77.72715079848072,
};

const AddStops = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDHX1VbvvzOGgrddLg9Ataw_Cf3sUrygag",
  });
  if (!isLoaded) {
    console.log("not loaded");
  }
  const [stops, setstops] = useState();
  const [stopsData, setstopsData] = useState([]);
  const [KmPrice, setKmPrice] = useState();
  const [price, setprice] = useState();

  const axiosPrivate = useAxiosPrivate();

  const getStopsData = async () => {
    try {
      const response = await axiosPrivate.get("/transportation/bus/stops");
      console.log(response);
      setstopsData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const addStopsData = async (e) => {
    e.preventDefault();
    if (!stops) return;
    try {
      if (!stops) return;
      const response = await axiosPrivate.post("/transportation/bus/stops", {
        stopName: stops,
      });
      console.log(response);
      getStopsData();
      setstops(null);
    } catch (error) {
      console.error(error);
    }
  };
  const deleteStops = async (id) => {
    if (!id) return;
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
          axiosPrivate.delete(`/transportation/bus/stops/${id}`);
          getStopsData();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const deletePrice = async (id) => {
    if (!id) return;
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
          axiosPrivate.delete(`/transportation/bus/kmprice/${id}`);
          getPriceData();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getPriceData = async () => {
    try {
      const response = await axiosPrivate.get("transportation/bus/kmprice");
      setprice(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const addPriceData = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPrivate.put("transportation/bus/kmprice", {
        KmPrice: KmPrice,
      });
      console.log(response.data);
      getPriceData();
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getStopsData();
    getPriceData();
  }, []);

  useEffect(() => {
    console.log(isLoaded);
  }, [isLoaded]);
  return (
    <>
      <Banner />
      <div className="flex justify-evenly m-10">
        <div className="flex flex-col">
          <Typography className="mb-3" variant="h6">
            Set price per Kilometer
          </Typography>

          <form
            onSubmit={addStopsData}
            className="relative flex w-full max-w-[24rem]"
          >
            <Input
              type="text"
              label="Enter stop name"
              onChange={(e) => setstops(e.target.value)}
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              className="!absolute right-1 top-1 rounded"
              onClick={addStopsData}
            >
              Add
            </Button>
          </form>
          <div className="mt-10">
            {stopsData &&
              stopsData.map((item) => (
                <div
                  className="bg-blue-gray-200 p-4 m-3 shadow-xl flex justify-between items-center"
                  style={{ borderRadius: "10px" }}
                >
                  <Typography variant="h6">{item.stopName}</Typography>
                  <IconButton
                    variant="text"
                    onClick={() => deleteStops(item?._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} size="xl" />
                  </IconButton>
                </div>
              ))}
          </div>
        </div>
        <div>
          <Typography variant="h6" className="mb-3">
            Set price per Kilometer
          </Typography>
          <form
            onSubmit={addPriceData}
            className="relative flex w-full max-w-[24rem]"
          >
            <Input
              type="number"
              label="Enter price per kilometer"
              onChange={(e) => setKmPrice(e.target.value)}
              className="pr-20"
              containerProps={{
                className: "min-w-0",
              }}
            />
            <Button
              size="sm"
              className="!absolute right-1 top-1 rounded"
              onClick={addPriceData}
            >
              Add
            </Button>
          </form>
          <div className="mt-10">
            {price && (
              <div
                className=" bg-blue-gray-200 p-8 "
                style={{ borderRadius: "10px" }}
              >
                <div className="flex items-baseline">
                  <Typography className="mr-1" variant="h5">
                    {price?.KmPrice}{" "}
                  </Typography>
                  <Typography variant="paragraph"> Rs per Kilometer</Typography>
                </div>
                <div className="flex flex-row-reverse">
                  <IconButton
                    variant="text"
                    onClick={() => deletePrice(price?._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} size="xl" />
                  </IconButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div style={{ height: "90vh", width: "90vw" }}>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ height: "100%", width: "100%" }}
            options={{ streetViewControl: true, mapTypeControl: true }}
          ></GoogleMap>
        </div>
      </div>
    </>
  );
};

export default AddStops;
