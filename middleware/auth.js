const jwt = require("jsonwebtoken");
const secret = require("../config/keys").jwtSecret;

module.exports = function(req, res, next) {
  // Get token from header
  const token = req.header("x-auth-token");
  // console.log(token, "TOKEN");
  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: "No token, auth denied" });
  }

  try {
    const decoded = jwt.verify(token, secret);

    req.user = decoded.user;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({ msg: "Token is not valid" });
  }
};
