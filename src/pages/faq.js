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

const FAQPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="FAQ"
        homePageText="Home"
        homePageUrl="/"
        activePageText="FAQ"
      />

      <div className="ptb-100">
        <div className="container">
          <div className="faq-accordion">
            <Accordion allowZeroExpanded preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q1. What happens if a request fails?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  We only charge for successful requests, i.e returning with a 200 or 404 status code.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q2. I'm not a developer, can you create custom scraping scripts for me?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  We don't create custom scraping scripts, 
                  however we will gladly write some code 
                  snippets helping you to use our most powerful features:
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q3. What is an API Credit?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Each plan gives a certain amount of API credits per month.
                   Depending on the parameters you use with your API calls 
                   it will cost you from one to several credits. By default, 
                   each request costs 5 credits because JavaScript rendering 
                   is enabled by default. Learn more about requests costs.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q4. What happens if I run out of credits before the end of my current subscription?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  No worries, we got you covered. If you temporarily 
                  need more credits, you can do two things. Either 
                  upgrade your plan for the current month. You will 
                  be able to downgrade it later whenever you want. 
                  Or you can early renew your current subscription in two clicks.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Q5. Can I cancel my plan any time?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Yes, you can cancel your subscription plan at 
                  any time. It can be done in less than 30 seconds 
                  from your dashboard.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      <StartProject />

      <Footer />

    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="FAQ" />

export default FAQPage
