import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"
import MembershipLevels from "../components/MembershipLevels/MembershipLevels"

const PricingPage = () => {
    return (
        <Layout>
            <Navbar />

            <PageBanner
                pageTitle="Pricing"
                homePageText="Home"
                homePageUrl="/"
                activePageText="Pricing"
            />

            <MembershipLevels />
            <Footer />
        </Layout>
    )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Pricing" />

export default PricingPage