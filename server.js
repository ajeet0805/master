const express = require("express");
//import fetch from "node-fetch";
//const fetch = require("node-fetch");
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Default route
app.get("/", (req, res) => {
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    console.log("Response:", data);
    res.send(data);
  })
  .catch((err) => {
    console.error("Error:", err.message);
  });
  
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});