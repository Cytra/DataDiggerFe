import React from "react"
import { useRecoilState } from "recoil"
import { collapsedState } from "../../utils/recoil-atoms"
import { Link } from "gatsby"
import logo from "../../images/logo.png"
import { useUserContext  } from "../Context/userContext"

const Navbar = () => {

  const { user } = useUserContext();

  const [collapsed, setCollapsed] = useRecoilState(collapsedState)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  React.useEffect(() => {
    let elementId = document.getElementById("navbar")
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky")
      } else {
        elementId.classList.remove("is-sticky")
      }
    })
  })

  const classOne = collapsed
    ? "collapse navbar-collapse"
    : "collapse navbar-collapse show"
  const classTwo = collapsed
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right"

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="rewy-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Link
                to="/"
                onClick={() => setCollapsed(true)}
                className="navbar-brand"
              >
                <img src={logo} alt="logo" />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">

                  <li className="nav-item">
                    <Link
                      to="/"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/pricing"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      Pricing
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/faq"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      FAQ
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/doc"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      Documentation
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to="/contact"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="nav-link"
                    >
                      Contact
                    </Link>
                  </li>

                  {user.email != null ? (

                    
                    <div className="others-option d-flex align-items-center">
                      <div className="option-item">
                         <Link className="default-btn" to="/profile" activeClassName="active" onClick={() => setCollapsed(true)}>
                         <i className="flaticon-right"></i> Profile{" "}
                      <span></span>
                       </Link>
                      </div>
                    </div>

                  ) : (
                    <li className="nav-item">
                      <Link to="/profile-authentication" className="nav-link">
                        Login/Register
                      </Link>
                    </li>
                  )}

                </ul>

                {/* <div className="others-option d-flex align-items-center">

                  <div className="option-item">
                    <Link
                      to="/contact"
                      activeClassName="active"
                      onClick={() => setCollapsed(true)}
                      className="default-btn"
                    >
                      <i className="flaticon-right"></i> Get Started{" "}
                      <span></span>
                    </Link>
                  </div>
                </div> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
