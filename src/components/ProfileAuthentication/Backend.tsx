import User from "./User";
const backendUrl = process.env.BACKEND_URL;

const Backend = {
  login: async (email: string) => {
    console.log("login")
    try {
      const response = await fetch(`${backendUrl}/api/v1/user/login/${email}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
  
      if (response.ok) {
        const userObject = await response.json();
        console.log('User object:', userObject);
  
        const user: User = {
          id: userObject.id,
          membershipPlan: userObject.membershipPlan,
          email: userObject.email,
          created: userObject.created,
          apiKey: userObject.apiKey,
        };
        return user;
      } else {
        console.error('Client does not exist in the backend.');
        return null;
      }
    } catch (error) {
      console.error('Error during API call:', error);
      return null;
    }
  },
  register: async (email: string) => {
    const apiUrl = `${backendUrl}/api/v1/user/register`;

    const requestData = {
      email: email,
      membershipPlan: 1,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json-patch+json'
        },
        body: JSON.stringify(requestData),
      });
  
      if (response.ok) {
        const userObject = await response.json();
        console.log('User registered successfully:', userObject);
  
        const user: User = {
          id: userObject.id,
          membershipPlan: userObject.membershipPlan,
          email: userObject.email,
          created: userObject.created,
          apiKey: userObject.apiKey,
        };
        return user;
      } else {
        console.error('Error during user registration.');
        return null;
      }
    } catch (error) {
      console.error('Error during API call:', error);
      return null;
    }
  },
}



export default Backend;