import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import cargoShip from "../images/cargoPlanes.jpg"
const servicesArr = [
  { name: "US Customs Licensed Broker" },
  { name: "Bonded freight transportation" },
  { name: "IATA Certified instructor" },
  { name: "Dangerous Goods inspection, packing, labeling and supplies" },
  { name: "Hazardous Materials transportation" },
  { name: "Expedited service" },
  { name: "Round-the-clock service" },
  { name: "Real time status updates using GPS" },
  { name: "Specialized shipping" },
  { name: "Next day and dedicated services" },
  { name: "Flatbed transportation" },
  { name: "Drop deck services" },
  { name: "Van Trailers" },
  { name: "Advanced dispatching capabilities" },
]

const services = () => (
  <Layout>
    <SEO title="Services" />
    <div className="container  mx-auto mt-5">
      <h1 className="text-4xl sm:text-6xl md:text-6xl text-gray-900 heading leading-none font-black mb-5">
        OUR SERVICES
      </h1>
      <div className="flex flex-col sm:flex-col md:flex-row mb-5">
        <div className="container services mx-auto mb-10 md-py-4 justify-center sm:justify-between">
          {servicesArr.map(s => (
            <p key={s.name} className="text-xl text-blac">
              {s.name}
            </p>
          ))}
        </div>
        <img className="w-full md:w-1/2" src={cargoShip} />
      </div>
    </div>
  </Layout>
)

export default services
