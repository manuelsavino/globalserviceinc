import React from "react"
import PropTypes from "prop-types"
import Navigation from "./Navigation"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
