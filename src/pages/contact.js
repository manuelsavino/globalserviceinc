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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  })

  const [validate, setValidate] = useState({
    firstName: null,
    lastName: null,
    email: null,
  })

  const handleChange = e => {
    if (e.target.value !== "") {
      setValidate({ ...validate, [e.target.name]: false })
    }
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (
      formData.firstName !== "" &&
      formData.lastName !== "" &&
      formData.email !== ""
    ) {
      setValidate({})
      const form = e.target
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": form.getAttribute("name"),
          ...formData,
        }),
      })
        .then(() => navigate(form.getAttribute("action")))
        .catch(error => alert(error))
    } else {
      const validateTemp = { firstName: null, lastName: null, email: null }

      if (formData.firstName === "") {
        validateTemp.firstName = true
      }
      if (formData.lastName === "") {
        validateTemp.lastName = true
      }
      if (formData.email === "") {
        validateTemp.email = true
      }
      setValidate(validateTemp)
    }
  }

  return (
    <Layout>
      {console.log(formData)}
      <SEO title="Contact Us" />
      <div className="container px-5 sm:mx-5 md:mx-auto mt-5">
        <h1 className="text-4xl sm:text-6xl md:text-6xl text-gray-900 heading leading-none font-black mb-5">
          CONTACT US
        </h1>
        <div className="flex flex-col-reverse sm:flex-col md:flex-row">
          <iframe
            title="map"
            height="550"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            className="w-full md:w-1/2 mb-10"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-80.38160081952812%2C25.795952598229025%2C-80.37451978772879%2C25.800019263152144&amp;layer=mapnik&amp;marker=25.797985948130673%2C-80.37806030362844"
          ></iframe>

          <form
            className="mb-4 w-full md:w-1/2 md:ml-5"
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
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                    validate.firstName ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="firstName"
                  placeholder="Jane"
                  value={formData.firstName}
                  onChange={handleChange}
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
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                    validate.lastName ? "border-red-500" : ""
                  }`}
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
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
                  className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${
                    validate.email ? "border-red-500" : ""
                  }`}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4  leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
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
