import React from "react"
import Glove from "../images/worldwideb.svg"
import FooterLogo from "../images/footerLogos.png"

export default function Footer() {
  return (
    <footer className="footer flex justify-center border-t-4 border-blue-600 ">
      <div className="container flex mx-auto justify-center flex-col items-center mt-2">
        <h1 className="logo text-lg sm:text-xl ml-3 font-black flex items-center mb-3">
          <img src={Glove} className="w-6 mr-3"></img>GLOBE SERVICES INC
        </h1>
        <p>2672 NW 112 Ave</p>
        <p>Miami, FL 33172</p>
        <a href="tel:305-431-3714">305-431-3714</a>
        <div className="flex mt-2">
          <img alt="logos of partners" src={FooterLogo} />
        </div>
        <div className="flex mt-2">
          <p>
            Site by <a href="https://www.manuels.dev">manuels.dev</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
