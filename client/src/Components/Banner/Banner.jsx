import useAuth from "../../Hooks/useAuth";
import NavBar from "../Staff/SideNav/navBar";
import SideNavbar from "../Student/SideNav/SideNavbar";

const Banner = ({ name }) => {
  const { auth } = useAuth();
  return (
    <div className="bg-dark-purple text-gray-100">
      <section className="container mx-auto flex items-center justify-between py-4">

      {auth.roles ==5151 ?(

<NavBar/>
):auth.roles ==999 ?(

<SideNavbar/>
):""
}
        
        <div className="flex items-center space-x-4">
          <img
            src="./images/librarybooks.png"
            alt="College Logo"
            className="h-12"
          />
          <h1 className="text-4xl font-bold leading-none sm:text-5xl">
            College Name
          </h1>
        </div>

        <div className="flex flex-wrap items-center space-x-4">
          <button className="py-2 px-4 text-lg font-semibold rounded bg-violet-500 text-white hover:bg-violet-600">
            Year
          </button>
          <div>
            <select className="block rounded-lg py-2 px-4 pr-8 leading-tight focus:outline-none bg-blue-900 text-white">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </select>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Banner;
