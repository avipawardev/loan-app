const API_BASE_URL = import.meta.env.PROD 
  ? 'https://loan-app-kohg.onrender.com'
  : '';

export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });
    
    return response;
  } catch (error) {
    console.error('API call failed:', error);
    throw error;
  }
};

export default API_BASE_URL;