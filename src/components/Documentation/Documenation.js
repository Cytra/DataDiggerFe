import React from "react"
import starIcon from "../../images/star-icon.png"
import history1 from "../../images/history/history1.jpg"

const Documenation = () => {
  return (
    <>
      <section className="history-area ptb-100 bg-fafafb">
        <div className="container">
          <div className="section-title">
            <span className="sub-title">
              <img src={starIcon} alt="about" />
              Documentation
            </span>
            <h2>History Begins in 2010</h2>
          </div>

          <ol className="timeline history-timeline">
            <li className="timeline-block">
              <div className="timeline-date">
                <span>2010</span>
                February 20
                <sup>th</sup>
              </div>

              <div className="timeline-icon">
                <span className="dot-badge"></span>
              </div>

              <div className="timeline-content">
                <div className="row align-items-center">
                  <div className="col-lg-7 col-md-12">
                    <div className="content">
                      <h3>Founded</h3>
                      <p>
Documentation page paragraph
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-5 col-md-12">
                    <div className="image">
                      <img src={history1} alt="about" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </>
  )
}

export default Documenation
