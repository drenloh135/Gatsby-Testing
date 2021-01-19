import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const ProjectPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>These are my Projects</h1>
    <div>
      <h2>Weather App</h2>
      <p>
        Words Words Words Words Words Words Words Words Words Words Words Words
      </p>
    </div>
    <div>
      <h2>Name App</h2>
      <p>
        Words Words Words Words Words Words Words Words Words Words Words Words
      </p>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default ProjectPage
