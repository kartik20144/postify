
let BASE_URL = "https://postify-1.onrender.com/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "http://localhost:3000/";
}

module.exports = { BASE_URL };