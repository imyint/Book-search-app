const router = require("express").Router();
const wishlist = [];

router.get("/", (req, res) => {
  try {
    res.status(200).send(wishlist);
  } catch (err) {
    res.status(400).send(`Error: ${err}`);
  }
});

router.post("/", (req, res) => {
  try {
    const book = req.body;
    if (!wishlist.some((item) => item.id === book.id)) {
      wishlist.push(book);
    }
    res.status(200).send(wishlist);
  } catch (err) {
    res.status(400).send(`Error: ${err}`);
  }
});

router.delete("/", (req, res) => {
  try {
    const book = req.body["id"];
    const index = wishlist.findIndex((item) => item.id === book);
    wishlist.splice(index, 1);
    res.status(200).send(wishlist);
  } catch (err) {
    res.status(400).send(`Error: ${err}`);
  }
});

module.exports = router;
