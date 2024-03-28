import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import Banner from "../components/Index/Banner"
import Services from "../components/BigDataAnalysisStartup/Services"
import Testimonials from "../components/BigDataAnalysisStartup/Testimonials"
import Footer from "../components/_App/Footer"

const IndexPage = () => (
  <Layout>

    <Navbar />

    <Banner />

    <Services />

    <Testimonials />

    <Footer />

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
