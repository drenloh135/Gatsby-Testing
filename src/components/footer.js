import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Github from "./imageComponents/githubPic"

const Footer = ({ siteTitle }) => (
  <header>
    <div
      style={{
        backgroundColor: "#383b3a",
        maxWidth: "100%",
        padding: "2rem 4rem",
      }}
    >
      {/* <div
        style={{
          width: "100%",
        }}
      >
        <a
          style={{
            maxWidth: "80px",
            margin: "auto",
            display: "block",
            float: "left",
          }}
        >
          <Github />
        </a>
        <a
          style={{
            maxWidth: "80px",
            margin: "auto",
            display: "block",
            float: "left",
          }}
        >
          <Github />
        </a>
        <div
          style={{
            maxWidth: "80px",
            margin: "auto",
            display: "inline-block",
          }}
        >
          <Github />
        </div>
      </div> */}

      <img src={Github} />
      <p
        style={{
          color: "#ffffff",
          textAlign: "center",
          fontFamily: "Quicksand",
          fontSize: "20px",
        }}
      >
        Darren Loh Yee Hui, Singapore <br />
        Copyright 2021. All rights reserved.
      </p>
    </div>
  </header>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: `Ello hehe`,
}

export default Footer
