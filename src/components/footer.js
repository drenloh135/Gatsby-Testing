import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Github from "./imageComponents/githubPic"
import LinkedIn from "./imageComponents/linkedinPic"
import Insta from "./imageComponents/instaPic"
import Home from "./imageComponents/homePic"
import UpArrow from "./imageComponents/uparrowPic"

import "./footer.css"

const Footer = ({ siteTitle }) => (
  <header>
    <div className="footerBody">
      <div className="upArrow jump">
        <UpArrow />
      </div>
      <div className="iconRow">
        <div className="iconHolder jump">
          <a href="https://github.com/drenloh135">
            {" "}
            <Github />
          </a>
        </div>
        <div className="iconHolder jump">
          <a href="https://www.linkedin.com/in/darren-loh-a65a76178/">
            <LinkedIn />
          </a>
        </div>
        <div className="iconHolder jump">
          <a href="https://www.instagram.com/darrenlohyh/?hl=en">
            <Insta />
          </a>
        </div>
        <div className="iconHolder jump">
          <Link to="/">
            <Home />
          </Link>
        </div>
      </div>

      <p className="copyright">
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
