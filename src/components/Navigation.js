import React, { useState } from "react"
import "hamburgers/dist/hamburgers.min.css"
import "./layout.css"
import disableScroll from "disable-scroll"
import { Link } from "gatsby"
import Glove from "../images/worldwide.svg"

export default function Navigation() {
  const [opened, toggleNav] = useState(false)
  return (
    <div class="nav">
      <div className="innerNav">
        <Link
          to="/"
          className="roboto text-white text-lg sm:text-3xl ml-3 font-black flex"
        >
          <img src={Glove} className="w-6 mr-3"></img>GLOBE SERVICES INC
        </Link>
        <div class="subNav desktopNav">
          <Link to="/">Home</Link>
          <Link to="/aboutUs">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button
          onClick={() => {
            toggleNav(!opened)
            opened === true ? disableScroll.off() : disableScroll.on()
          }}
          className={`hamburger hamburger--3dx ${opened ? "is-active" : ""}`}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
      <div className={`mobSideBar ${opened ? "toggleSideBar" : ""}`}>
        <div className="subNav sideBar">
          <Link
            onClick={() => {
              disableScroll.off()
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => {
              disableScroll.off()
            }}
            to="/aboutUs"
          >
            About Us
          </Link>
          <Link
            onClick={() => {
              disableScroll.off()
            }}
            to="/services"
          >
            Services
          </Link>
          <Link
            onClick={() => {
              disableScroll.off()
            }}
            to="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  )
}
