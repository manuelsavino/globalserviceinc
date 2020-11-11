import React, { useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { navigate } from "gatsby-link"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Contact = () => {
  const [data, setData] = useState({ datadata: "test" })

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...data,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <Layout>
      <SEO title="Contact Us" />
      <div className="container px-5 sm:mx-5 md:mx-auto mt-5">
        <h1 className="text-4xl sm:text-6xl md:text-6xl text-gray-900 heading leading-none font-black mb-5">
          CONTACT US
        </h1>
        <div className="flex flex-col-reverse sm:flex-col md:flex-row">
          <iframe
            height="550"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            className="w-full md:w-1/2 mb-10"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-80.38160081952812%2C25.795952598229025%2C-80.37451978772879%2C25.800019263152144&amp;layer=mapnik&amp;marker=25.797985948130673%2C-80.37806030362844"
          ></iframe>

          <form
            className="w-full md:w-1/2 md:ml-5"
            method="post"
            onSubmit={handleSubmit}
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            action="/"
          >
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  name="firstName"
                  placeholder="Jane"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  E-mail
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Message
                </label>
                <textarea
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  name="message"
                ></textarea>
              </div>
            </div>
            <div className="md:flex md:items-center">
              <div className="md:w-1/3">
                <button
                  className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Send
                </button>
              </div>
              <div className="md:w-2/3"></div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
