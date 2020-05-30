import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import { Link } from "gatsby"

import cargo from "../images/cargo.jpg"
import bgiIsometricGrid from "../images/bgiIsometricGrid.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero
      image={cargo}
      height="50vh"
      gradient="linear-gradient(to right, #9cecfb, #65c7f7, #0052d4)"
      pattern={bgiIsometricGrid}
    >
      <div className="container mx-auto pt-3">
        <div className="container p-10">
          <h2 className="text-4xl sm:text-6xl md:text-6xl  text-white heading leading-none font-black mb-10">
            We not only promise to deliver exceprional service; we promise a
            pleasurable experience
          </h2>
          <Link
            to="/contact"
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Hero>
    <div className="container mx-auto my-5 m p-10 shadow-xl rounded-md">
      <p>
        <strong>GLOBE SERVICES INC.</strong> is the Integrated Logistics
        purveyor of choice across the land. We are ready to handle complex
        logistics with in house, Dangerous Goods specialists that perform in
        compliance with IATA and 49 CFR, Inspections, packing and labeling.
        Also, US Customs Broker and bonded carrier capable of coordinating the
        movement of Bonded and domestic freight between plants, ports,
        warehouses, or any destination. Our coordinated services allows the
        handling of any cargo between locations and bring products to market.
        Whether transcontinental or regional, we have an integrated plan to meet
        your needs. We are proud to offer specialized services cater to meet
        your individual needs.
      </p>
      <p className="mt-3">
        From our centrally located office in Doral, Florida. We are a CTPAT,
        IAC, US Customs, IATA certified company that coordinates your requests
        with speed and precision. Our on-time and safety records are remarkable
        and illustrate why GLOBE SERVICES INC. is regarded as one of the
        nation's finest. GLOBE SERVICES INC. can give you a competitive
        advantage. Ensure that your cargo is there on time, every time.
      </p>
    </div>
  </Layout>
)

export default IndexPage
