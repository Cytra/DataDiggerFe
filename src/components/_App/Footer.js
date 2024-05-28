import React from "react"
import { Link } from "gatsby"
import footerMap from "../../images/footer-map.png"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-area bg-color">
      <div className="container">

        <div className="footer-bottom-area">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6">
              <p>
                Copyright @{currentYear} <strong>ScrapePal</strong> All rights
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

                <li>
                  <Link to="/privacy-policy/">Privacy Policy</Link>
                </li>

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
