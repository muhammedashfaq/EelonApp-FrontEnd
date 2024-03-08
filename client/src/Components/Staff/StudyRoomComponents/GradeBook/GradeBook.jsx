import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AddGradeBookModal from "./AddGradeBookModal";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { faBook } from "@fortawesome/free-solid-svg-icons";

const GradeBook = () => {
  return (
    <>
      <section className="container mx-auto p-6 font-mono">
        <div className="bg-gray-200 tracking-wide my-2 rounded-t-xl flex space-x-3 py-2 px-3">
          <AddGradeBookModal />
        </div>
        <div className="grid grid-cols-5 gap-6 mb-8   rounded-lg shadow-lg p-6">


        <div className="max-w-xs p-4 rounded-md bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600 shadow-md text-white dark:bg-gray-900 dark:text-gray-50">
  <img src="https://source.unsplash.com/random/300x300/?book" alt="" className="object-cover object-center rounded-md dark:bg-gray-500 w-full h-40 mb-4" />
  <div className="mb-2">
    <h2 className="text-2xl font-semibold tracking-tighter"> <FontAwesomeIcon icon={faBook} className="mr-2"/>Book Title</h2>

  </div>

  <div className="flex justify-between items-center">
    <span className="text-xs opacity-75">Pages: <span className="font-medium">312</span></span>
    <button className="bg-white text-blue-500 py-1 px-3 rounded-full text-xs font-semibold hover:bg-blue-100 transition duration-300">Read Now</button>
  </div>
</div>


  {/* <div className=" p-2 rounded-lg shadow-inner  bg-teal-100">
    <img src="https://telegra.ph/file/2acfcad8d39e49d95addd.jpg" alt="idk - Highvyn, Taylor Shin" className="w-36 h-36  mx-auto rounded-lg mb-4 shadow-lg shadow-teal-50"/>
    <h2 className="text-xl font-semibold text-center">idk</h2>
    <p className="text-gray-600 text-sm text-center">Highvyn, Taylor Shin</p>
  </div> */}
  
</div>
        
      </section>
    </>
  );
};

export default GradeBook;
