const API_BASE_URL = import.meta.env.PROD 
  ? 'https://loan-app-kohg.onrender.com'
  : '';

export const apiCall = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`;
  return fetch(url, options);
};

export default API_BASE_URL;