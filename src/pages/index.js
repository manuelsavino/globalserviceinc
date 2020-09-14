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
          {/* <Link
            to="/contact"
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-5 rounded"
          >
            Contact Us
          </Link> */}
        </div>
      </div>
    </Hero>
    <div className="container mx-auto my-5 m p-10 shadow-xl rounded-md">
      <p style={{ textIndent: "35px" }}>
        From our centrally located office in Doral, Florida{" "}
        <strong>Globe Services Inc.</strong> has become one of South Florida’s
        premier Integrated Logistics Providers offering a selection of full
        service and concierge import and export services. With over 30 years of
        experience in the Logistics and Transportation areas, our personnel are
        one of the most qualified in across the industry. We custom tailor our
        services to match our customer’s budget without compromising safety &
        security. We have improved response time and streamlined the import
        process for our clients while allowing them to save money, time and
        headaches by handling all things in house.
      </p>
      <p className="mt-3">
        We are a CTPAT, IAC, US Customs, IATA certified company that coordinates
        your requests with speed and precision. Our on-time deliveries, customer
        satisfaction, and safety records are remarkable and illustrate why we
        are regarded as one of the nation's finest, we ensure that your cargo is
        there on time, every time. Whether transcontinental or regional, we have
        an integrated plan to meet your needs.
      </p>
      <p className="mt-3">
        We pride ourselves in employing professional personnel and office staff
        and run background checks on all employees as well as conduct random
        drug-screens. Safety &amp; security is our biggest concern and
        maintaining the integrity of our client’s products and information is
        our number one priority.
      </p>
    </div>
  </Layout>
)

export default IndexPage
