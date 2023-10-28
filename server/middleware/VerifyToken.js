import jwt from "jsonwebtoken";
import * as userContoller from "../controllers/users.controller.js";

// .env should have access token created
// TODO: employ refreshToken method through controller then to service

const verifyToken = async (req, res, next) => {
  console.log("HERE IS NEXT :", next);
  const accessToken = req.cookies.accessToken;
  const refreshToken = req.cookies.refreshToken;

  if (!accessToken && !refreshToken) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Ensure tokens are properly formatted JWTs
  if (!isJWT(accessToken) || !isJWT(refreshToken)) {
    return res.status(401).json({ message: "Invalid token format" });
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    // Handle specific JWT errors
    if (error.name === "TokenExpiredError") {
      // Access token has expired, try to refresh it using the refresh token
      try {
        const newTokens = await refreshTokens(refreshToken);
        res.cookie("accessToken", newTokens.accessToken, {
          httpOnly: true,
          secure: true,
        }); // Set secure flag
        const decoded = jwt.verify(
          newTokens.accessToken,
          process.env.ACCESS_TOKEN_SECRET
        );
        req.user = decoded;
        next();
      } catch (refreshError) {
        return res.status(401).json({ message: "Invalid refresh token" });
      }
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid access token" });
    } else {
      // Handle other potential JWT errors
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

// Function to check if a string is a valid JWT
function isJWT(str) {
  const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/;
  return jwtRegex.test(str);
}

export default verifyToken;
