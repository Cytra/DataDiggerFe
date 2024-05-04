import React, { useState } from 'react';
import { GoogleLogin as GoogleLoginComponent } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { navigate } from "gatsby";
import Backend from "../Backend/Backend";
import ErrorMessage from './ErrorMessage';
import { useUserContext  } from '../Context/userContext';

const GoogleLogin = () => {
    const [error, setError] = useState(null);
    const { updateUser, priceId, setPaymentId } = useUserContext();

    const handleGoogleSuccess = async (response) => {
        try {
            var googleData = jwtDecode(response.credential);

            const { email } = googleData;

            const backendUser = await Backend.login(email);

            if (backendUser == null) {
                setError("User does not exist - Please Register");
                return;
            }

            updateUser({
                id: backendUser.id,
                apiKey: backendUser.apiKey,
                membershipPlan: backendUser.membershipPlan,
                email: backendUser.email,
                created: backendUser.created
              });

            if(priceId !== ""){
                await generateStripeUrlOnPaymentFlow(backendUser.id);
                return;
            }

            navigate("/profile");

        } catch (error) {
            setError("Unable to login");
        }
    };

    const generateStripeUrlOnPaymentFlow = async (userId) => {
        try {    
            
          const url = await Backend.generateStripeUrl(priceId, userId);
    
          if (!url) {
            throw new Error("Failed to generate payment URL");
          }
    
          // Use navigate function from Gatsby to navigate to the URL
          setPaymentId("")
          navigate(url);
    
        } catch (error) {
          console.error("Error generating payment URL:", error);
        }
      }

    const handleGoogleFailure = (error) => {
        setError("Error when logging in");
    };


    return (
        <div className="login-form">
            <h2>Login with Google</h2>
            <div>
                <GoogleLoginComponent
                    size="large"
                    text="Login With Google"
                    width="400"
                    onSuccess={response => handleGoogleSuccess(response)}
                    onError={errorResponse => handleGoogleFailure(errorResponse)}
                />
                <div>
                    {error && <ErrorMessage message={error} />}
                </div>
            </div>
        </div>
    );
}

export default GoogleLogin;