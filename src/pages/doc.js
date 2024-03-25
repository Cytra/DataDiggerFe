import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"
import StartProject from "../components/Common/StartProject"
import Footer from "../components/_App/Footer"
import Documenation from "../components/Documentation/Documenation"

const DocPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Documentation"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Doc"
      />

      <Documenation />

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Doc" />

export default DocPage
