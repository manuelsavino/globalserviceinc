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
      height="80vh"
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
  </Layout>
)

export default IndexPage
