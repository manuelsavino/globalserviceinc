import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
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
    <div className="container mx-auto">
      <h1 className="text-4xl mt-5 roboto text-center sm:text-left font-black">
        Our Services
      </h1>
      <div className="container services mx-auto mb-10  justify-center sm:justify-between">
        {servicesArr.map(s => (
          // <Card>
          //   {/* <img src="https://via.placeholder.com/150"></img> */}
          <h2 className="text-xl text">{s.name}</h2>
          // <p className="max-w-xs">{s.desc}</p>{" "}
          // </Card>
        ))}
      </div>
    </div>
  </Layout>
)

export default services
