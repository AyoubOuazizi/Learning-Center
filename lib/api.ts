import axios from 'axios';
import Router from "next/navigation";

// const baseURL = process.env.NEXT_PUBLIC_API_URL || "";
const baseURL = "http://biblio.ma/lum6/pmb/library-api/public/api/notices" || "";

export const api = axios.create({
  baseURL, // Replace with your API base URL
  headers: {}
});

/*
// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Modify the request config here (add headers, authentication tokens)
    const accessToken: undefined | string = JWTToken.getToken();//JSON.parse(localStorage?.getItem("token"));
    
    console.log(accessToken)

    // If token is present add it to request's Authorization Header
    if (accessToken) {
      if (config.headers) config.headers.token = accessToken;
    }
    return config;
  },
  (error) => {
    // Handle request errors here

    return Promise.reject(error);
  }
);
// End of Request interceptor
*/


// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Modify the response data here
    return response;
  },
  (error) => {
    // Handle response errors here
    console.log('ERROR FROM AXIOS :', error)
    if(error.response.status === 404) {
      // console.log('error 404 detected')
      return Router.redirect('/not-found')
    }
    return Promise.reject(error);
  }
);
// End of Response interceptor

export default api;
