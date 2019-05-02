import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "@fortawesome/fontawesome-free/css/all.min.css"

import Layout from "../components/layout"

import SEO from "../components/seo"
import Intro from "../components/intro"
import Services from "../components/services"
import Digital from "../components/digital"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <div>
      {" "}
      <Intro />
      <Services />
      <Digital />
    </div>
  </Layout>
)

export default IndexPage
