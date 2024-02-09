

const Banner = ({name}) => {
  return (
    <div>
        <section className="bg-dark-purple text-gray-100 flex items-center justify-evenly">
          <div className=" flex justify-center">
            <img
              src="./images/librarybooks.png"
              alt="College Logo"
              className="h-12"
            />

            <h1 className="text-4xl font-bold leading-none sm:text-5xl">
              College Name knk



            </h1>
        </div>
            <div className="flex flex-wrap justify-center items-center mt-8">
              <button className=" py-1 m-1 text-2xl font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
                Year
              </button>
              <div>
                <select className="block rounded-lg appearance-none w-full  py-2 px-4 pr-8  leading-tight focus:outline-none bg-blue-900 text-white">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
           {name}
      </section>
    </div>
  )
}

export default Banner