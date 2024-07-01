import React from "react"
import { Link } from "gatsby"
import Backend from "../Backend/Backend";
import { navigate } from "gatsby";
import { useUserContext  } from "../Context/userContext"

const MembershipLevels = () => {

  const { setPaymentId, getUser } = useUserContext();

  const paymentFlow = async (priceId) => {
    try {

      const user = getUser();
      console.log(user);
      if(user.Id === null){
        setPaymentId(priceId);
        navigate("/profile-authentication")
        return;
      }

      const url = await Backend.generateStripeUrl(priceId, user.id);
      console.log(url);

      if (!url) {
        throw new Error("Failed to generate payment URL");
      }

      // Use navigate function from Gatsby to navigate to the URL
      navigate(url);

    } catch (error) {
      console.error("Error generating payment URL:", error);
    }
  };
  
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
                    <span className="price">$29/mo</span>
                    <span className="title">Gold Membership</span>
                  </th>
                  <th>
                    <span className="price">$59/mo</span>
                    <span className="title">Diamond Membership</span>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>API Credits</td>
                  <td>500</td>
                  <td>5000</td>
                  <td>15000</td>
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
                    <Link to="#" className="select-btn" >
                      Get it now
                    </Link>
                  </td>
                  <td>
                    
                    <Link to="#" className="select-btn" onClick={() => paymentFlow("price_1PXpBhCM7ZpocpvZaNLtDCk4")}>
                      Get it now
                    </Link>
                  </td>
                  <td>
                    <Link to="#" className="select-btn" onClick={() => paymentFlow("price_1PXpCMCM7ZpocpvZFvHfvBp8")}>
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
