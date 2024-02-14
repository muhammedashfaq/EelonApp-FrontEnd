import useAuth from "../../Hooks/useAuth";
import NavBar from "../Staff/SideNav/navBar";
import SideNavbar from "../Student/SideNav/SideNavbar";

const Banner = ({ name }) => {
  const { auth } = useAuth();
  return (
    <div className="bg-dark-purple text-gray-100 w-screen">
      <section className="container mx-auto flex flex-wrap items-center justify-between py-4">
        {auth.roles == 5151 ? (
          <NavBar />
        ) : auth.roles == 999 ? (
          <SideNavbar />
        ) : (
          ""
        )}

        <div className="flex items-center space-x-4">
          <img
            src="./images/librarybooks.png"
            alt="College Logo"
            className="h-12"
          />
          <h1 className="text-4xl font-bold leading-none sm:text-5xl Tablet:bg-blue-gray-300 Laptop:bg-red-400 mobile:bg-yellow-500 ipad:bg-brown-900">
            College Name
          </h1>
        </div>

        <div className="flex flex-wrap items-center space-x-4">
          <button className="py-2 px-4 text-lg font-semibold rounded bg-violet-500 text-white hover:bg-violet-600 transition duration-300 ease-in-out">
            Year
          </button>
          <div className="relative">
            <select className="block appearance-none w-full py-2 px-4 pr-8 leading-tight rounded-lg focus:outline-none bg-blue-900 text-white cursor-pointer">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5 7l5 5 5-5z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
