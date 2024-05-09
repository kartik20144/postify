let BASE_URL = "https://postify-1.onrender.com/";
https://postify-1.onrender.com/
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:4000/";
}

export { BASE_URL };
