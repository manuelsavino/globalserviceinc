import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import cargoShip from "../images/cargoPlanes.jpg"
import Box from "../images/box.svg"
import { StaticQuery, graphql } from "gatsby"

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

const services = () => {
  return (
    <StaticQuery
      query={graphql`
        query Services {
          allSanityService(sort: { order: DESC, fields: _createdAt }) {
            edges {
              node {
                id
                title
                _createdAt
              }
            }
          }
        }
      `}
      render={({ allSanityService }) => (
        <Layout>
          <SEO title="Services" />
          <div className="container px-5 sm:mx-5 md:mx-auto mt-5">
            <h1 className="text-4xl sm:text-6xl md:text-6xl text-gray-900 heading leading-none font-black mb-5">
              OUR SERVICES
            </h1>
            <div className="flex flex-col sm:flex-col md:flex-row ">
              <div className="container services justify-center sm:justify-between">
                <ul>
                  {allSanityService.edges.map(s => (
                    <Li
                      key={s.node.id}
                      className="service text-base sm:text-lg md:text-xl text-black pl-2 leading-none sm:leading-snug md:leading-normal"
                    >
                      {s.node.title}
                    </Li>
                  ))}
                  {console.log(allSanityService)}
                </ul>
              </div>
              <img
                alt="cargo being loaded into a plane"
                className="w-full md:w-1/2 pb-24"
                src={cargoShip}
              />
            </div>
          </div>
        </Layout>
      )}
    />
  )
}

export default services
