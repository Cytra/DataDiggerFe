import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Error from "../components/Error/Error"
import Footer from "../components/_App/Footer"

const ErrorPage = () => {
  return (
    <Layout>
      <Navbar />

      <PageBanner
        pageTitle="Team"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Team"
      />

      <Error />

      <Footer />
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Team" />

export default ErrorPage
