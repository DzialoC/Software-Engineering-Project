import jwt from "jsonwebtoken";
import UserService from "../services/user.service.js";

export const verifyAndRefresh = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  const accessToken = authHeader && authHeader.split(" ")[1];
  console.log(accessToken);
  // Ensure tokens are properly formatted JWTs
  if (accessToken !== undefined) {
    try {
      const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
      console.log(decoded);
      req.user = decoded;
      next();
    } catch (error) {
      console.log(error);
      // Handle specific JWT errors
      if (error.name === "TokenExpiredError") {
        // Access token has expired, try to refresh it using the refresh token
        const newTokens = await UserService.refreshTokens(accessToken);
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
      } else if (error.name === "JsonWebTokenError") {
        req.user = null;
      } else {
        // Handle other potential JWT errors
        return res.status(500).json({ message: "Internal server error" });
      }
    }
    try {
      const authHeader = req.headers.authorization;
      const accessToken = authHeader && authHeader.split(" ")[1];
      // Token consist of {refreshToken, accessToken}
      const newAccessToken = await UserService.refreshTokens(accessToken);
      console.log(newAccessToken);
      res.header("Authorization", "Bearer " + newAccessToken);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }
  next();
};
