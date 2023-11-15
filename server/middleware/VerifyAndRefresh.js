import jwt from "jsonwebtoken";
import UserService from "../services/user.service.js";

export const verifyAndRefresh = async (req, res, next) => {
  const excludedPaths = ["/login"];

  if (excludedPaths.includes(req.path)) {
    return next();
  }

  const { accessToken } = req.cookies;
  console.log("Tokenz : ", accessToken);
  if (accessToken) {
    console.log("Current req path: ", req.path);
  }

  // Ensure tokens are properly formatted JWTs
  if (accessToken !== undefined) {
    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
      const newAccessToken = await UserService.updateAccessToken(
        decoded.userId,
        decoded.name,
        decoded.email
      );
      res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        maxAge: 60 * 60 * 1000, // 1h
      });
      req.user = decoded;
      next();
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        // Handle expired token
        console.log("Token has expired");
        // Optionally send a response or initiate a token refresh process
      } else if (error instanceof jwt.JsonWebTokenError) {
        // Handle invalid token
        console.log("Token is invalid");
        // Send an appropriate response
      } else if (error instanceof jwt.NotBeforeError) {
        // Handle not active token
        console.log("Token not active yet");
        // Send an appropriate response
      } else {
        // Handle other types of errors
        console.log("Error verifying token:", error.message);
        // Send an appropriate response
      }
    }
  }
};
