import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
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
    <Hero
      image={cargoShip}
      height="80vh"
      gradient="linear-gradient(90deg, #FFFFFF 0%, #6284FF 50%, #F37979 100%);"
      // pattern={bgiIsometricGrid}
    >
      <div className="container mx-auto pt-3">
        <div className="container p-10">
          <div className=" bg-black-seethrough p-8 rounded-md">
            <h2 className="text-4xl sm:text-6xl md:text-6xl  text-white heading leading-none font-black mb-10">
              OUR SERVICES
            </h2>
            <div className="container services mx-auto mb-10  justify-center sm:justify-between">
              {servicesArr.map(s => (
                <h2 key={s.name} className="text-xl text-white">
                  {s.name}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Hero>
  </Layout>
)

export default services
