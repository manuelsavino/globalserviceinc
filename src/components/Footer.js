import React from "react"
import Glove from "../images/worldwide.svg"
import IG from "../images/instagram.svg"
import FB from "../images/facebook.svg"
import LI from "../images/linkedin.svg"

export default function Footer() {
  return (
    <footer className="footer flex justify-center">
      <div className="container flex justify-center flex-col items-center mt-2">
        <h1 className="logo text-white text-lg sm:text-xl ml-3 font-black flex items-center mb-3">
          <img src={Glove} className="w-6 mr-3"></img>GLOBE SERVICES INC
        </h1>
        <p className="text-white">2672 NW 112 Ave</p>
        <p className="text-white">Miami, FL 33172</p>
        <a href="tel:305-431-3714" className="text-white">
          305-431-3714
        </a>
        <div className="flex mt-2">
          <a className="mr-2" href="https://www.linkedin.com">
            <img src={LI} className="w-5" />
          </a>
          <a className="mr-2" href="https://www.instagram.com">
            <img src={IG} className="w-5" />
          </a>
          <a href="https://www.facebook.com">
            <img src={FB} className="w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
