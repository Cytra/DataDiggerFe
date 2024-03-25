import React from "react"
import { Link } from "gatsby"

const MembershipLevels = () => {
  return (
      <div className="membership-levels-area ptb-100">
        <div className="container">
          <div className="membership-levels-table table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th aria-hidden="true"></th>
                  <th>
                    <span className="price">FREE</span>
                    <span className="title">Silver Membership</span>
                  </th>
                  <th>
                    <span className="price">$49/mo</span>
                    <span className="title">Gold Membership</span>
                  </th>
                  <th>
                    <span className="price">$99/mo</span>
                    <span className="title">Diamond Membership</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>API Credits</td>
                  <td>500</td>
                  <td>10000</td>
                  <td>30000</td>
                </tr>

                <tr>
                  <td>JavaScript rendering</td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Screenshots</td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td>Priority Email Support</td>
                  <td className="item-none">
                    <i className="bx bx-x"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                  <td className="item-check">
                    <i className="bx bx-check"></i>
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td>
                    <Link to="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                  <td>
                    <Link to="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                  <td>
                    <Link to="#" className="select-btn">
                      Get it now
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  )
}

export default MembershipLevels
