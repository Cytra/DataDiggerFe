import React from "react";
import { useUser } from "../Context/userContext";

const Profile = () => {
    const { user, updateUser } = useUser();

    const handleUnsubscribe = () => {
        updateUser({ ...user, membershipPlan: null, subscriptionStatus: 'inactive' });
    };

    return (
        <>
            <div className="Profile">
                <h2>Profile</h2>
                <p>User Email: {user.email}</p>
                <p>API Key: {user.apiKey}</p>
                <p>Membership Plan: {user.membershipPlan}</p>
                <button  type="submit" onClick={handleUnsubscribe}>Unsubscribe</button>
            </div>
        </>
    );
};

export default Profile;