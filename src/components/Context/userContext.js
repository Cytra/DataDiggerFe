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
    created: null
  };

  const [user, setUser] = useState(initialUserState);

  // Example function to update user data
  const updateUser = (newUser) => {
    setUser(newUser);
  };

  // Function to logout and clear user settings
  const logout = () => {
    setUser(initialUserState); // Reset user to initial state
    // Perform any other logout actions (e.g., clear tokens, redirect)
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};