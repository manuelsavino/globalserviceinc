import React, { useState } from "react"
import "hamburgers/dist/hamburgers.min.css"
import "./layout.css"
import { Link } from "gatsby"
import Glove from "../images/worldwide.svg"

export default function Navigation() {
  const [opened, toggleNav] = useState(false)
  return (
    <div className="bg-black ">
      <nav className="flex container mx-auto items-center justify-between flex-wrap bg-black p-3">
        <div className="flex  items-center flex-shrink-0 text-white mr-6">
          <img
            alt="globe services inc logo"
            className="w-10 mr-3"
            src={Glove}
          />

          <span class="font-semibold text-xl tracking-tight">
            GLOBE SERVICES INC
          </span>
        </div>
        <div className="block md:hidden">
          <button
            onClick={() => {
              toggleNav(!opened)
              // opened === true ? disableScroll.off() : disableScroll.on()
            }}
            className={`hamburger hamburger--3dx p-1 ${
              opened ? "is-active" : ""
            }`}
            type="button"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div
          className={`w-full md:flex md:items-center md:w-auto ${
            opened ? "" : "hidden"
          }`}
        >
          <div class="text-lg md:flex-grow">
            <Link
              to="/"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-teal-500 mr-4 "
            >
              Home
            </Link>
            <Link
              to="/contact"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-teal-500 mr-4 "
            >
              Contact
            </Link>
            <Link
              to="/services"
              className="block mt-4 md:inline-block md:mt-0 text-white hover:text-teal-500 "
            >
              Services
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
