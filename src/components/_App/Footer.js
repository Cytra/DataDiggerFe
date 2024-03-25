import React from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import footerMap from "../../images/footer-map.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-area bg-color">
      <div className="container">
        {/* <div className="row">
          
          <div className="col-lg-6 col-sm-6">
            <div className="single-footer-widget">
              <Link to="/" className="logo">
                <img src={logo} alt="logo" />
              </Link>
              <p>
              DataBridge API handles headless browsers and rotates proxies for you.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="single-footer-widget pl-5">
              <h3>Explore</h3>

              <ul className="footer-links-list">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/faq">Faq</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>

        </div> */}

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                Copyright @{currentYear} <strong>DataBridge</strong> All rights
                reserved{" "}
              </p>
            </div>

            <div className="col-lg-6 col-md-6">
              <ul>
              <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/faq">Faq</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                {/* <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/terms-of-service">Terms & Conditions</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-map">
        <img src={footerMap} alt="map" />
      </div>
    </footer>
  )
}

export default Footer
