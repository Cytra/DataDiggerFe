import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import Footer from "../components/_App/Footer"
import privacyPolicy from "../images/privacy-policy.jpg"

const PrivacyPolicyPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Privacy Policy"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Privacy Policy"
      />

      <section className="privacy-policy-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12">
              <div className="privacy-policy-content">
                <img src={privacyPolicy} alt="privacyPolicy" />
                <p>
                  <i>
                    This Privacy Policy was last updated on May 28, 20224.
                  </i>
                </p>
                <h3>Information Collection And Use</h3>
                <blockquote className="blockquote">
                  <p>
                  We collect several different types of information for various purposes to provide and improve our Service to you.
                  </p>
                </blockquote>
                <h3>Types of Data Collected</h3>
                <p>
                Personal Data While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:

Email address First name and last name Phone number Address, State, Province, ZIP/Postal code, City Cookies and Usage Data Usage Data We may also collect information how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>
                <h3>Tracking & Cookies Data</h3>
                <p>
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.

Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.

You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.

Examples of Cookies we use:

Session Cookies. We use Session Cookies to operate our Service. Preference Cookies. We use Preference Cookies to remember your preferences and various settings. Security Cookies. We use Security Cookies for security purposes.
                </p>
                <h3>Use of Data</h3>
                <p>
                </p>
                WeS uses the collected data for various purposes:

To provide and maintain the Service To notify you about changes to our Service To allow you to participate in interactive features of our Service when you choose to do so To provide customer care and support To provide analysis or valuable information so that we can improve the Service To monitor the usage of the Service To detect, prevent and address technical issues
                <h3>5. Your Choices About the Use of Your Data</h3>
                <p>
                </p>

                <h3>Transfer Of Data</h3>
                <p>
                Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.

If you are located outside France and choose to provide information to us, please note that we transfer the data, including Personal Data, to France and process it there.

Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.

We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
                </p>

                <h3>Disclosure Of Data</h3>
                <p>
                Legal Requirements may disclose your Personal Data in the good faith belief that such action is necessary to:

To comply with a legal obligation To protect and defend the rights or out property To prevent or investigate possible wrongdoing in connection with the Service To protect the personal safety of users of the Service or the public To protect against legal liability
                </p>

                <h3>Security Of Data</h3>
                <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                </p>

                <h3>Service Providers</h3>
                <p>
                We may employ third party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.

These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
                </p>

                <h3>Links To Other Sites</h3>
                <p>
                Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit.

We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services
                </p>

                <h3>Children's Privacy</h3>
                <p>
                Our Service does not address anyone under the age of 18 ("Children").

We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
                </p>

                <h3>Changes To This Privacy Policy</h3>
                <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.

We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the "effective date" at the top of this Privacy Policy.

You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Privacy Policy" />

export default PrivacyPolicyPage
