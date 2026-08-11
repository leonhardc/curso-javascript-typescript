import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ errors: "Authorization header is required" });
  }
  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(401).json({ errors: "Token is required" });
  }
  try {
    // eslint-disable-next-line no-undef
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = decoded;
    req.userId = id;
    req.userEmail = email;
    next();
  // eslint-disable-next-line no-unused-vars
  } catch (e) {
    return res.status(401).json({ errors: "Invalid token" });
  }
}
