import jwt from "jsonwebtoken";
// will be used for form data entrys and updates to automatically assign the user to the form
// User will already be verified by middleware therefor no error checking need?

const util = {
  getUserIdByAccessToken(req) {
    const { accessToken } = req.cookies;
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    return decoded.userId;
  },
};

export default util;
