import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import cargoShip from "../images/cargoPlanes.jpg"
import Box from "../images/box.svg"

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

const Li = styled.li`
  padding-bottom: 8px;
  &:last-child {
    padding-bottom: 50px;
  }
  &:before {
    content: "";
    display: inline-block;
    height: 1em;
    width: 1em;
    background-image: url(${Box});
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 0.5em;
  }
`

const services = () => (
  <Layout>
    <SEO title="Services" />
    <div className="container px-5 sm:mx-5 md:mx-auto mt-5">
      <h1 className="text-4xl sm:text-6xl md:text-6xl text-gray-900 heading leading-none font-black mb-5">
        OUR SERVICES
      </h1>
      <div className="flex flex-col sm:flex-col md:flex-row ">
        <div className="container services justify-center sm:justify-between">
          <ul>
            {servicesArr.map(s => (
              <Li
                key={s.name}
                className="service text-base sm:text-lg md:text-xl text-black pl-2 leading-none sm:leading-snug md:leading-normal"
              >
                {s.name}
              </Li>
            ))}
          </ul>
        </div>
        <img className="w-full md:w-1/2 pb-24" src={cargoShip} />
      </div>
    </div>
  </Layout>
)

export default services
