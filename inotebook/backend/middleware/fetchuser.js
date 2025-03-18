const jwt = require("jsonwebtoken");
const JWT_SECRET = "ayeshaisagoodgirl";

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }

  try {
    console.log(token); // Check if token is coming correctly
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    console.error(error); // Log the error to see the actual problem
    return res
      .status(401)
      .send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
