import { redirect } from 'next/navigation'

export default async function getSearchResults(options: any) {
    // Define the base URL
    const baseURL = 'http://biblio.ma/lum6/pmb/library-api/public/api/notices';
  
    // Convert the parameters object into a query string
    const queryString = Object.keys(options)
      .filter(key => options[key] !== undefined && options[key] !== null && options[key] !== "")
      .map(key => {
        if (Array.isArray(options[key])) {
          return options[key].map((value: any) => `${encodeURIComponent(key)}[]=${encodeURIComponent(value)}`).join('&');
        } else {
          return `${encodeURIComponent(key)}=${encodeURIComponent(options[key])}`;
        }
      })
      .join('&');
  
    // Construct the full URL with parameters
    const url = `${baseURL}?${queryString}`;
    let res;

    try {
        res = await fetch(url);
      
        if (!res.ok) {
          console.log('failed to fetch data');
          console.log(res);
          redirect('/not-found');
        }

        return res.json();
    } catch (error) {
        return {error: error};
    }
  
  
  }
  