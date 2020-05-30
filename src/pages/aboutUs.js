import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import cargoShip from "../images/cargoShip.jpg"

const about = () => (
  <Layout>
    <SEO title="About us" />
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
              ABOUT US
            </h2>
            <p className="text-white">
              GLOBE SERVICES INC. With over 30 years of experience in the
              Logistics and Transportation arenas, our personnel is one of the
              most qualified in today’s Industry. We custom tailor the
              customer’s needs to fit every budget without compromising safety &
              security.
            </p>
            <br />
            <p className="text-white">
              GLOBE SERVICES INC.has an effective system of transportation
              logistics and management. Using cutting edge technology, we
              improve response time and coordination of services. Our
              outstanding customer satisfaction record clearly reinforces our
              claim that GLOBE SERVICES INC. is the nation’s finest.
            </p>
            <br />
            <p className="text-white">
              GLOBE SERVICES INC. currently employs professional personnel, and
              a superb office staff. Therefore, no job is too big or too small.
              We run a background check and conduct random drug-screens on all
              of our employees. At GLOBE SERVICES INC., safety & security is our
              biggest concern.
            </p>

            <br />
            <p className="text-white">
              GLOBE SERVICES INC. is a US Customs Broker licensed with CBP, US
              Department of Transportation, the Transportation Security
              Administration and IATA certified Dangerous Goods
            </p>

            <br />
            <p className="text-white">
              GLOBE SERVICES INC. is a member of the US Customs Brokers and
              Forwarders Association and is frequently recognized for integrity
              and reliability. Also is insured and bonded
            </p>
          </div>
        </div>
      </div>
    </Hero>
  </Layout>
)

export default about
