import React from "react";
import { UserContextProvider  } from "./src/components/Context/userContext";
import { GoogleOAuthProvider } from '@react-oauth/google';

export const wrapRootElement = ({ element }) => {
    return <UserContextProvider>
            <GoogleOAuthProvider clientId="1038931837392-r7jjta7vovupq1cm9j6ik0gnjj5q1vvk.apps.googleusercontent.com">
            {element}
            </GoogleOAuthProvider>
            </UserContextProvider>
    
};