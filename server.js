const express = require("express");
const app = express();
app.set("port", process.env.PORT || 3001);
const axios = require("axios");
require("dotenv").config();

const API_ENDPOINT = process.env.REACT_API_ENDPOINT;

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api", async (req, res) => {
  const response = await axios.get(API_ENDPOINT);
  res.send(response.data);
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
