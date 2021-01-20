import React from "react"
import { navigate } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/imageComponents/image"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mainBody">
      <p className="text">
        <span
          style={{
            color: "white",
          }}
        >
          Click
        </span>{" "}
        to find out more about me!
      </p>
      <div className="sectionBody">
        <button
          className="buttons"
          onClick={() => {
            navigate("/about-me")
          }}
        >
          About me
        </button>
      </div>
      <div className="sectionBody">
        <button
          className="buttons"
          onClick={() => {
            navigate("/projects")
          }}
        >
          Projects
        </button>
      </div>
      <div className="sectionBody">
        <button
          className="buttons"
          onClick={() => {
            navigate("/work-experience")
          }}
        >
          Work Experience
        </button>
      </div>
    </div>
  </Layout>
)

export default IndexPage
