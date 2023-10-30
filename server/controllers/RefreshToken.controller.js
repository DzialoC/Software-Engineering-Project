import UserService from "../services/user.service.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    // Token consist of {refreshToken, accessToken}
    const tokens = await UserService.refreshTokens(refreshToken);
    if (!tokens) return res.sendStatus(403);

    // Set the new fresh token as a cookie
    res.cookie("refreshToken", tokens.refreshToken, {
      htttpOnly: true,
    });

    // Send the new access token to the client
    res.json({ accessToken: tokens.accessToken });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};
