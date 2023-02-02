const router = require("express").Router();
const jwt = require("jsonwebtoken");
const CryptoJS = require("crypto-js");

const users = [];

router.post("/register", (req, res) => {
  try {
    const newUser = {
      username: req.body.username,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASSWORD_KEY
      ).toString(),
    };
    users.push(newUser);
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send(`Error: ${process.env.PASSWORD_KEY}`);
  }
});

router.post("/login", (req, res) => {
  res.send(users);
  const user = users.find((user) => {
    return user.username === req.body.username;
  });
  if (!user) {
    res.status(404).send(`Wrong username or password`);
    return;
  }
  const decryptedPassword = CryptoJS.AES.decrypt(
    user.password,
    process.env.PASSWORD_KEY
  ).toString(CryptoJS.enc.Utf8);

  if (decryptedPassword !== user.password) {
    res.send(here);
    res.status(404).send(`Wrong username or password`);
    return;
  }

  //generate JWT token
  const accessToken = jwt.sign(
    { username: user.username },
    process.env.JWT_KEY
  );
  res.status(200).send(accessToken);
});

// router.get("./", authentication, (req, res) => {
//   const user = req.user;
// });

function authentication(req, res, next) {
  const authHeader = req.headers("authorization");
  const token = authHeader.split(" ")[1];
  if (token == null) {
    return res.status(400);
  }
  jwt.verify(token, process.env.JWT_KEY, (err, user) => {
    if (err) {
      return res.send(400);
    }
    req.user = user;
    next();
  });
}

module.exports = router;
