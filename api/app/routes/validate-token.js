const jwt = require('jsonwebtoken')

// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
    const authorizationHeader = req.header("auth-token")
    if(authorizationHeader){
      const token = authorizationHeader.replace("Bearer ", "")
      try {
        const decoded = jwt.verify(token, TOKEN_SECRET);
        req.user = decoded;
        next();
      } catch (err) {
        console.error(err);
        return res.status(401).json({ success: false, message: "Invalid token" });
      }
    }
    else{
      return res
        .status(401)
        .json({ success: false, message: "Invalid authorization header" });
    }
}

module.exports = verifyToken;