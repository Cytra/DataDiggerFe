import React, { useState } from 'react';
import { GoogleLogin as GoogleLoginComponent } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import { navigate } from "gatsby";
import Backend from "./Backend"; 
import ErrorMessage from './ErrorMessage';
import { useUser } from '../Context/userContext';

const RegsiterLogin = () => {
    const { updateUser } = useUser();
    const [error, setError] = useState(null);

    const handleGoogleSuccess = async (response) => {
        try {
            var googleData = jwtDecode(response.credential);

            const { email } = googleData;
    
            const backendUser = await Backend.register(email);

            if (backendUser == null) {
                setError("Unable to Register");
                return;
            }

            updateUser({
                apiKey: backendUser.apiKey,
                membershipPlan: backendUser.membershipPlan,
                email: backendUser.email,
                created: backendUser.created
              });

            console.log(backendUser);

            navigate("/profile");

          } catch (error) {
            setError("Unable to register");
          }
    };

    const handleGoogleFailure = (error) => {
        console.error('Google login error:', error);
    };

    return (
        <div className="login-form">
            <h2>Register with Google</h2>
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

export default RegsiterLogin;