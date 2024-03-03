import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { TrashIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";  // Import useLocation

const Librarysettings = () => {
  const [NewGenre, setNewGenre] = useState();
  const axiosPrivate = useAxiosPrivate();
  const [settingData, setsettingData] = useState();

  const getSettings = async () => {
    try {
      const response = await axiosPrivate.get(`librarysettings`);
      setsettingData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addSetting = async (e) => {
    e.preventDefault();
    try {
      if (!NewGenre) return;
      const reqData = {
        settingType: "bookGenre",
        genre: NewGenre,
      };
      const response = await axiosPrivate.post(`librarysettings`, reqData);
      setNewGenre("");
      getSettings();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteSetting = async (id) => {
    try {
      if (!id) return;
      const response = await axiosPrivate.delete(`librarysettings/${id}`);
      getSettings();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSettings();
  }, []);
  const location = useLocation();  // Use useLocation hook
  const breadcrumbs = location.pathname.split('/').filter(Boolean);


  return (
    <>
      <div className="flex flex-wrap justify-center ">
      <nav className="mb-6">
        {breadcrumbs.map((crumb, index) => (
          <span key={index} className="mr-2 text-sm"> 
            <Link to={`/${breadcrumbs.slice(0, index + 1).join('/')}`}>
              {crumb}
            </Link>
            {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
          </span>
        ))}
      </nav>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={addSetting}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Add Genre
            </Typography>
            <div>
              <div className="relative flex w-full max-w-[24rem]">
                <Input
                  label=" Add Genre"
                  variant="standard"
                  required
                  placeholder="Add a book genre"
                  className=" !border-t-blue-gray-200 focus:!border-t-gray-900 pr-20"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  containerProps={{
                    className: "min-w-0",
                  }}
                  value={NewGenre}
                  onChange={(e) => setNewGenre(e.target.value)}
                />
                <Button
                  size="sm"
                  color={NewGenre ? "gray" : "blue-gray"}
                  className="!absolute right-1 top-1 rounded"
                  style={{ textTransform: "none" }}
                  variant="gradient"
                  onClick={addSetting}
                >
                  Add genre
                </Button>
              </div>
            </div>
            {/* <Typography variant="small" className="ml-5">
                  Add a book genre
                </Typography> */}
          </div>
        </form>

        <div className="mt-10">
          {settingData &&
            settingData.map((setting, i) => (
              <Typography
                key={i}
                className="shadow-2xl p-4 m-4 w-96 rounded-md group/item hover:bg-brown-300 flex justify-between bg-gray-200"
                variant="h6"
              >
                {setting.genre}
                <span className="group/edit invisible hover:bg-slate-200 group-hover/item:visible cursor-pointer">
                  <TrashIcon
                    size={20}
                    className="hover:scale-125"
                    onClick={() => deleteSetting(setting._id)}
                  />
                </span>
              </Typography>
            ))}
        </div>
      </div>
    </>
  );
};

export default Librarysettings;
