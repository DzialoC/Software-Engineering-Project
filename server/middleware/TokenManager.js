import jwt from "jsonwebtoken";
import UserService from "../services/user.service.js";

class TokenManager {
  static instance;

  constructor() {
    if (TokenManager.instance) {
      return TokenManager.instance;
    }
    TokenManager.instance = this;

    this.verifyToken = this.verifyToken.bind(this);
    this.refreshToken = this.refreshToken.bind(this);
    this.verifyAndRefreshToken = this.verifyAndRefreshToken.bind(this);
  }

  async verifyToken(req, res, next) {
    console.log(req.headers);
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided 1" });
    }

    const accessToken = authHeader && authHeader.split(" ")[1];

    if (!accessToken) {
      return res.status(401).json({ message: "No token provided 2" });
    }

    // Ensure tokens are properly formatted JWTs
    if (!this.isJWT(accessToken)) {
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
          const newTokens = await UserService.refreshTokens(refreshToken);
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
  }

  async refreshToken(req, res) {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader) return res.sendStatus(401);

      const accessToken = authHeader && authHeader.split(" ")[1];
      // Token consist of {refreshToken, accessToken}
      const newAccessToken = await UserService.refreshTokens(accessToken);
      if (!newAccessToken) return res.sendStatus(403);

      res.setHeader("Authorization", "Bearer " + newAccessToken);

      // Send the new access token to the client
      res.json({ message: "Token refreshed" });
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  }

  isJWT(str) {
    const jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/;
    return jwtRegex.test(str);
  }

  async verifyAndRefreshToken(req, res, next) {
    await this.verifyToken(req, res, async () => {
      await this.refreshToken(req, res);
      next();
    });
  }
}

const tokenManager = new TokenManager();

export default tokenManager;
