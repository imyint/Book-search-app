const express = require("express");
const axios = require("axios");
const cors = require("cors");
const wishlistRoutes = require("./routes/wishlist");
const userRoutes = require("./routes/user");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/wishlist", wishlistRoutes);
app.use("/user", userRoutes);

dotenv.config();

app.get("/books", async (req, res) => {
  try {
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${req.query.q}&startIndex=0&maxResults=20`;
    const results = await axios(URL);
    res.status(200).send(results.data);
  } catch (err) {
    res.status(400).send(`Error: ${err}`);
  }
});

app.listen(4000, () => {
  console.log("App is listening on port 4000");
});
