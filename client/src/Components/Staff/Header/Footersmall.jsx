import React from 'react'

const Footersmall = () => {
  return (
    <div> <footer className="block py-4 ">
    <div className="container mx-auto px-4">
      <hr className="mb-4 border-b-1 border-blueGray-200" />
      <div className="flex flex-wrap items-center md:justify-between justify-center">
        <div className="w-full md:w-4/12 px-4">
          <div className="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © {new Date().getFullYear()}{" "}
            <a
              href="https://www.creative-tim.com"
              className="text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1"
            >
              Eelon Team
            </a>
          </div>
        </div>
        <div className="w-full md:w-8/12 px-4">
          <ul className="flex flex-wrap list-none md:justify-end  justify-center">
            <li>
              <a
href='#'                className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
              >
                Eelon Tech
              </a>
            </li>
            <li>
              <a
              href='#'
                className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
              >
                About Us
              </a>
            </li>
      
            <li>
              <a href='#'
                className="text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
              >
                Visit
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer></div>
  )
}

export default Footersmall