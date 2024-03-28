import React from "react"
import ServiceIcon1 from "../../images/services/service-icon1.png"
import ServiceIcon8 from "../../images/services/service-icon8.png"
import ServiceIcon5 from "../../images/services/service-icon5.png"
import ServiceShape4 from "../../images/services/service-shape4.png"

const Services = () => {
  return (
    <>
      <section className="services-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Features</h2>
            {/* <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p> */}
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={ServiceIcon1} alt="Service Icon" />
                </div>
                <h3>
                  Real browser rendering
                </h3>
                <p>
                We manage thousands of headless instances using the 
                latest Chrome version. Focus on extracting the data 
                you need, not dealing with inefficient headless browsers.
                </p>

                <div className="shape">
                  <img src={ServiceShape4} alt="Service Shape" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={ServiceIcon8} alt="Service Icon" />
                </div>
                <h3>
                Render JavaScript
                </h3>
                <p>
                With JavaScript rendering, a simple parameter 
                enables you to scrape any web page, even 
                single-page applications using React, AngularJS, 
                Vue.js, or any other libraries.
                </p>

                <div className="shape">
                  <img src={ServiceShape4} alt="Service Shape" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item">
                <div className="icon">
                  <img src={ServiceIcon5} alt="Service Icon" />
                </div>
                <h3>
                Rotate proxies
                </h3>
                <p>
                  Rotate proxies to bypass rate limiting
                </p>
                <div className="shape">
                  <img src={ServiceShape4} alt="Service Shape" />
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item wow fadeInUp">
                <div className="icon">
                  <img src={ServiceIcon10} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Data Visualization</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <img src={ServiceShape4} alt="Service Shape" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item wow fadeInUp">
                <div className="icon">
                  <img src={ServiceIcon11} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Securities Research</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <img src={ServiceShape4} alt="Service Shape" />
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12">
              <div className="single-services-box-item wow fadeInUp">
                <div className="icon">
                  <img src={ServiceIcon12} alt="Service Icon" />
                </div>
                <h3>
                  <Link to="/services/service-details">Data Governance</Link>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod ut labore et dolore magna aliqua.
                </p>

                <Link to="/services/service-details" className="learn-more-btn">
                  <i className="flaticon-right"></i> Learn More
                </Link>
                <div className="shape">
                  <img src={ServiceShape4} alt="Service Shape" />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
