import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/imageComponents/image"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="mainBody">
      <div className="sectionBody">
        <div className="buttons">
          {" "}
          <Link className="buttonText" to="/page-2/">
            About me
          </Link>{" "}
        </div>
      </div>
      <div className="sectionBody">
        <div className="buttons">
          {" "}
          <Link className="buttonText" to="/page-2/">
            Projects
          </Link>{" "}
        </div>
      </div>
      <div className="sectionBody">
        <div className="buttons">
          {" "}
          <Link className="buttonText" to="/page-2/">
            Work Experience
          </Link>{" "}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
