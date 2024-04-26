import React, { useState } from "react";
import { useUserContext  } from "../Context/userContext";

const Profile = () => {
    const { user, updateUser, logout } = useUserContext();
    const [activeSection, setActiveSection] = useState('profileInfo'); // Default active section

    const handleUnsubscribe = () => {
        updateUser({ ...user, membershipPlan: null, subscriptionStatus: 'inactive' });
    };

    const handleSectionChange = (section) => {
        setActiveSection(section);
    };

    const handleLogout = () => {
        logout();
        // Redirect or perform other logout actions as needed
    };

    return (
        <div className="ProfileContainer">
            <div className="Sidebar">
                <button onClick={() => handleSectionChange('profileInfo')}>Profile Info</button>
                {/* <button onClick={() => handleSectionChange('subscriptions')}>Subscriptions</button> */}
                <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="ProfileContent">
                {activeSection === 'profileInfo' && (
                    <div className="Profile">
                        <h2>Profile</h2>
                        <p>User Email: {user.email}</p>
                        <p>API Key: {user.apiKey}</p>
                        <p>Membership Plan: {user.membershipPlan}</p>
                        {/* <p>Created: {user.created}</p> */}
                    </div>
                )}
                {/* {activeSection === 'subscriptions' && (
                    <div className="Subscriptions">
  
                    </div>
                )} */}
            </div>
        </div>
    );
};

export default Profile;