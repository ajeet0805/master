const express = require("express");
//import fetch from "node-fetch";
//const fetch = require("node-fetch");
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(cors());// Allow all origin
// app.use(cors({
//   origin: [
//     "http://localhost:3000",       // for local dev
//     "https://front-end-ea7z.vercel.app/" // your Vercel frontend
//   ],
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));
// Default route
app.get("/", (req, res) => {
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    //console.log("Response:", data);
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