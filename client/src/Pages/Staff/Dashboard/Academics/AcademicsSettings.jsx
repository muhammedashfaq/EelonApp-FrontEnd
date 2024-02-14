import StaffHeader from "../../../../Components/Staff/Header/landingPageHeader";
import Banner from "../../../../Components/Banner/Banner";
import { Typography, Input, Button } from "@material-tailwind/react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import { TrashIcon } from "lucide-react";

const AcademicsSettings = () => {
  const [AcademicYrs, setAcademicYrs] = useState();
  const [addAcademicYr, setAddAcademicYr] = useState();

  const axiosPrivate = useAxiosPrivate();

  const getAcademicYrdropdown = async () => {
    try {
      const response = await axiosPrivate.get(
        "classsection/academicyear/academicyear"
      );
      const sortedData = response.data?.academicYear.sort((a, b) =>
        a.localeCompare(b)
      );
      setAcademicYrs(sortedData);
      setAddAcademicYr("");
      console.log(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  const addYear = async (e) => {
    e.preventDefault();
    if (!addAcademicYr) return;
    try {
      const reqData = {
        academicYear: [addAcademicYr],
      };
      const response = await axiosPrivate.put(
        "classsection/academicyear/academicyear",
        reqData
      );
      console.log(response);
      getAcademicYrdropdown();
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAcademicYear = async (value) => {
    if (!value) return;
    try {
      const reqData = {
        data: {
          academicYear: [value],
        },
      };
      const response = await axiosPrivate.delete(
        "classsection/academicyear/academicyear",
        reqData
      );
      console.log(response);
      getAcademicYrdropdown();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAcademicYrdropdown();
  }, []);

  return (
    <>
      <StaffHeader />
      <Banner />
      <div className="container xl">
        <div className="flex justify-center pt-10">
          <Typography variant="h5">Add academic year</Typography>
        </div>
        <div>
          <div className="mt-10">
            <div className="flex flex-wrap justify-center ">
              <form
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                onSubmit={addYear}
              >
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Add Academic year
                  </Typography>
                  <div>
                    <div className="relative flex w-full max-w-[24rem]">
                      <Input
                        label="Add Academic year"
                        variant="standard"
                        required
                        placeholder="eg: 2023-2024"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900 pr-20 pl-4"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        containerProps={{
                          className: "min-w-0",
                        }}
                        value={addAcademicYr}
                        onChange={(e) => setAddAcademicYr(e.target.value)}
                      />
                      <Button
                        size="sm"
                        // color={NewGenre ? "gray" : "blue-gray"}
                        className="!absolute right-1 top-1 rounded"
                        style={{ textTransform: "none" }}
                        variant="gradient"
                        onClick={addYear}
                      >
                        Add year
                      </Button>
                    </div>
                  </div>
                </div>
              </form>

              <div className="mt-10">
                {AcademicYrs &&
                  AcademicYrs.map((data, i) => (
                    <Typography
                      key={i}
                      className="shadow-2xl p-4 m-4 w-96 rounded-md group/item hover:bg-brown-300 flex justify-between bg-gray-200"
                      variant="h6"
                    >
                      {data}
                      <span className="group/edit invisible hover:bg-slate-200 group-hover/item:visible cursor-pointer">
                        <TrashIcon
                          size={20}
                          className="hover:scale-125"
                          onClick={() => deleteAcademicYear(data)}
                        />
                      </span>
                    </Typography>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicsSettings;
