import jwt from "jsonwebtoken";
import Users from "../models/user.model.js";

class TokenManager {
  static instance;

  constructor() {
    if (TokenManager.instance) {
      return TokenManager.instance;
    }
    TokenManager.instance = this;
  }

  async verifyToken(req, res, next) {
    // ... (put the contents of your verifyToken function here)
  }

  async refreshToken(req, res) {
    // ... (put the contents of your refreshToken function here)
  }

  isJWT(str) {
    // ... (put the contents of your isJWT function here)
  }
}

const tokenManager = new TokenManager();

export default tokenManager;
