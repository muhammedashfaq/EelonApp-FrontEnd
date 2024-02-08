import{
Spinner,
} from "@material-tailwind/react";

const SpinningLoader = () => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-black bg-opacity-50'>
      <Spinner />
      {/* <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-white"></div> */}
    </div>
  );
}

export default SpinningLoader;
