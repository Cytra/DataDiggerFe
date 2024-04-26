import User from "./User";
const backendUrl = process.env.BACKEND_URL;

const Backend = {
  login: async (email: string) => {
    try {
      const response = await fetch(`${backendUrl}/api/v1/user/login/${email}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
  
      if (response.ok) {
        const userObject = await response.json();
  
        const user: User = {
          id: userObject.id,
          membershipPlan: userObject.membershipPlan,
          email: userObject.email,
          created: userObject.created,
          apiKey: userObject.apiKey,
        };
        return user;
      } else {

        return null;
      }
    } catch (error) {
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
  
        const user: User = {
          id: userObject.id,
          membershipPlan: userObject.membershipPlan,
          email: userObject.email,
          created: userObject.created,
          apiKey: userObject.apiKey,
        };
        return user;
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  },
}



export default Backend;