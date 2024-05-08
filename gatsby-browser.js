/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/
 */

// You can delete this file if you're not using it

import './src/styles/css/bootstrap.min.css';
import "./src/styles/css/animate.min.css"
import "./src/styles/css/boxicons.min.css"
import "./src/styles/css/flaticon.css"
import 'react-accessible-accordion/dist/fancy-example.css'
import 'react-18-image-lightbox/style.css';
import "/node_modules/aos/dist/aos.css";
import "swiper/css"
import "swiper/css/bundle"

// Global styles
import "./src/styles/css/style.css" 
import "./src/styles/css/responsive.css" 

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