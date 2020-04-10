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
              Reprehenderit duis commodo deserunt aliqua minim id do id. Ex
              veniam do quis ipsum. Elit sint nulla ipsum sint cupidatat magna.
              Excepteur aliquip nisi sit nisi eiusmod. Est reprehenderit ut enim
              laborum velit Lorem nostrud consectetur mollit dolore et ipsum.
              Aliqua eiusmod mollit mollit sunt nisi labore magna qui nostrud.
              Adipisicing fugiat nulla laborum quis velit quis ipsum consectetur
              do est laboris.
            </p>
            <br />
            <p className="text-white">
              Eu mollit laborum est ea eu tempor non mollit veniam velit anim
              esse. Deserunt tempor minim consequat veniam aliqua officia esse
              irure velit exercitation. Qui consectetur do anim esse nulla irure
              id ad qui dolor. Et nostrud laboris quis excepteur proident ipsum.
              Aliqua proident et aute sit deserunt. Consectetur sint quis aute
              eiusmod ad eiusmod. Amet qui et proident est nisi magna est velit
              amet. Labore in veniam pariatur commodo sunt id incididunt aliquip
              laborum mollit. Non tempor quis magna irure nulla Lorem et eu
              reprehenderit. Tempor nisi exercitation mollit fugiat laboris
              aliqua cillum eu proident deserunt duis. Qui mollit consectetur
              minim duis incididunt sunt reprehenderit est culpa magna eiusmod
              veniam consectetur. Ullamco magna elit pariatur veniam duis
              excepteur aliquip exercitation. Ex reprehenderit ad laborum aliqua
              anim adipisicing consectetur ex irure aliquip.
            </p>
          </div>
        </div>
      </div>
    </Hero>
  </Layout>
)

export default about
