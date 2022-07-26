import axios from "axios";

const axiosBlog = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BLOG_API,
    headers: {
      'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BLOG_TOKEN}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
});

axiosBlog.interceptors.response.use(
    function (response) {
      return response;
    }, 
    function (error) {
      let res = error.response;
    //   if (res.status == 401) {
    //     window.location.href = “https://example.com/login”;
    //   }
      console.error("Looks like there was a problem. Status Code: " + res.status);
      return Promise.reject(error);
    }
);

export { 
    axiosBlog 
};