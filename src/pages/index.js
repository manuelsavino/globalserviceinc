import React, { useEffect, useRef } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as THREE from "three"
import GLOBE from "../vanta.globe.min.js"
import useHomePageData from "../queries/useHomePageData"
import styled from "styled-components"

const BlockContent = require("@sanity/block-content-to-react")

function Index() {
  const vantaRef = useRef()
  const data = useHomePageData().edges[0].node

  useEffect(() => {
    GLOBE({
      el: vantaRef.current,
      THREE: THREE,
      color: "white",
      backgroundColor: 0x1a5dc0,
      mouseControls: false,
      touchControls: false,
    })
  })

  const About = styled.div`
    & > div > p {
      margin-top: 15px;
    }
  `

  return (
    <Layout>
      <SEO title="Home" />
      <div ref={vantaRef} style={{ width: "100vw", height: "500px" }}>
        <div className="container mx-auto pt-3">
          <div className="container p-10 w-2/3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl  text-white heading leading-none font-black mb-10">
              {data.headline}
            </h2>
          </div>
        </div>
      </div>
      <About className="container mx-auto my-5 m p-10 shadow-xl rounded-md">
        <BlockContent blocks={data._rawAbout} />
      </About>
    </Layout>
  )
}

export default Index
