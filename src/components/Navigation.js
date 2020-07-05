import React, { useState } from "react"
import "hamburgers/dist/hamburgers.min.css"
import "./layout.css"
import disableScroll from "disable-scroll"
import { Link } from "gatsby"
import Glove from "../images/worldwide.svg"

export default function Navigation() {
  const [opened, toggleNav] = useState(false)
  return (
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <img className="w-10 mr-3" src={Glove} />

        <span class="font-semibold text-xl tracking-tight">
          GLOBE SERVICES INC
        </span>
      </div>
      <div class="block md:hidden">
        <button
          onClick={() => {
            toggleNav(!opened)
            opened === true ? disableScroll.off() : disableScroll.on()
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
        class={`w-full md:flex md:items-center md:w-auto ${
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
            to="/aboutUs"
            className="block mt-4 md:inline-block md:mt-0 text-white hover:text-teal-500 mr-4 "
          >
            About
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
  )
}
