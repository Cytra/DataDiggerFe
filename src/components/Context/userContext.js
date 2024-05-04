import React, { createContext, useState, useContext } from 'react';

// Define a user context
const UserContext = createContext();

// Custom hook to consume the user context

export function useUserContext() {
  return useContext(UserContext);
}

export const UserContextProvider = ({ children }) => {
  const initialUserState = {
    apiKey: null,
    membershipPlan: null,
    email: null,
    created: null,
    Id: null
  };

  const [user, setUser] = useState(initialUserState);
  const [priceId, setPriceId] = useState("");

  // Example function to update user data
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  const setPaymentId = (priceId) => {
    setPriceId(priceId)
  }

  const getUser = () => {
    return user;
  }

  // Function to logout and clear user settings
  const logout = () => {
    setUser(initialUserState); // Reset user to initial state
    // Perform any other logout actions (e.g., clear tokens, redirect)
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout, setPaymentId, priceId, getUser }}>
      {children}
    </UserContext.Provider>
  );
};