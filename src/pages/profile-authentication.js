import React from "react"
import Layout from "../components/_App/layout"
import Seo from "../components/_App/seo"
import Navbar from "../components/_App/Navbar"
import PageBanner from "../components/Common/PageBanner"
import GoogleLoginForm from "../components/ProfileAuthentication/GoogleLogin"
import GoogleRegisterForm from "../components/ProfileAuthentication/GoogleRegisterForm"
import Footer from "../components/_App/Footer"

const ProfileAuthenticationPage = () => {
  return (
    <Layout>

      <Navbar />

      <PageBanner
        pageTitle="Profile Authentication"
        homePageText="Home"
        homePageUrl="/"
        activePageText="Profile Authentication"
      />

      <section className="profile-authentication-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              {/* <LoginForm /> */}
              <GoogleLoginForm/>
            </div>

            <div className="col-lg-6 col-md-12">
              {/* <RegisterForm /> */}
              <GoogleRegisterForm/>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
    </Layout>
  )
}

export const Head = () => <Seo title="Profile Authentication" />

export default ProfileAuthenticationPage
