const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // 1. Get token from the "Authorization" header
  const authHeader = req.header("Authorization");

  if (!authHeader) {
    return res.status(401).json({ error: "No token, authorization denied" });
  }

  // 2. The header format is "Bearer <token>", so we split it
  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token format incorrect" });
  }

  try {
    // 3. Verify the token using our JWT_SECRET
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 4. Attach the user's data (ID, email) to the request object
    req.user = decoded;

    // 5. Tell Express: "Everything is good, proceed to the next function!"
    next();
  } catch (err) {
    res.status(401).json({ error: "Token is not valid" });
  }
};

module.exports = authMiddleware;
