import jwt from "jsonwebtoken";

export function authorize(allowedRoles) {
  return (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return console.log("unauthorized");
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!allowedRoles.includes(decoded.role)) {
        return console.log("unauthorized permission");
      }
      req.user = decoded;
      next();
    } catch (error) {
      console.log(error);
    }
  };
}
