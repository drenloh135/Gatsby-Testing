import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import DispPic from "./imageComponents/dispPic"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        backgroundColor: "#ffffff",
        maxWidth: "100%",
        padding: "4rem 4rem",
        marginBottom: `1.45rem`,
      }}
    >
      <div
        style={{
          maxWidth: "200px",
          margin: "auto",
        }}
      >
        <DispPic />
      </div>

      <p
        style={{
          marginTop: "50px",
          textAlign: "center",
          fontSize: "60px",
          fontFamily: "Quicksand",
          color: "#000000",
        }}
      >
        Hi, my name is{" "}
        <span
          style={{
            color: "#34e0d2",
          }}
        >
          Darren
        </span>
      </p>

      <p
        style={{
          marginTop: "80px",
          textAlign: "center",
          fontSize: "30px",
          color: "#17bdaf",
          fontFamily: "Quicksand",
        }}
      >
        I'm an aspiring Software Engineer.
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Ello hehe`,
}

export default Header
