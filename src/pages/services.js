import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/Card"
const servicesArr = [
  {
    name: "Service Title",
    desc:
      "Est ex deserunt consequat tempor in mollit proident ullamco labore occaecat exercitation aliqua.",
  },
  {
    name: "Service Title 2",
    desc: "Cillum cillum pariatur amet mollit esse aliqua fugiat veniam et.",
  },
  {
    name: "Service Title 2",
    desc: "Eu reprehenderit est et in ea proident anim consequat.",
  },
  {
    name: "Service Title 2",
    desc:
      "Minim ullamco ad enim ut laboris enim laborum esse mollit commodo sint.",
  },
  {
    name: "Service Title 2",
    desc:
      "Veniam officia ut non Lorem non sunt ipsum do reprehenderit voluptate ad magna magna.",
  },
  {
    name: "Service Title 2",
    desc: "Fugiat fugiat veniam magna cillum ipsum amet est consectetur.",
  },
  {
    name: "Service Title 2",
    desc: "Adipisicing incididunt deserunt sunt sunt aute ea.",
  },
  {
    name: "Service Title 2",
    desc: "Fugiat fugiat veniam magna cillum ipsum amet est consectetur.",
  },
]

const services = () => (
  <Layout>
    <SEO title="Services" />
    <div className="container mx-auto">
      <h1 className="text-4xl mt-5 roboto text-center sm:text-left font-black">
        Our Services
      </h1>
      <div className="container services mx-auto mb-10 flex flex-wrap justify-center sm:justify-between">
        {servicesArr.map(s => (
          <Card>
            <img src="https://via.placeholder.com/150"></img>
            <h2 className="text-lg">{s.name}</h2>
            <p className="max-w-xs">{s.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  </Layout>
)

export default services
