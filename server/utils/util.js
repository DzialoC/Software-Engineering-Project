import jwt from "jsonwebtoken";
import UserService from "../services/user.service.js";
// will be used for form data entrys and updates to automatically assign the user to the form
// User will already be verified by middleware therefor no error checking need?

const util = {
  getUserIdByAccessToken(req) {
    const { accessToken } = req.cookies;
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    return decoded.userId;
  },

  async isAdmin(req) {
    const user = this.getUserIdByAccessToken(req);
    const verified = await UserService.isAdmin(user);
    if (verified) {
      return true;
    } else {
      return false;
    }
  },

  reformatDate(startDate, endDate) {
    const formattedStartDate = new Date(startDate).toISOString();
    const formattedEndDate = new Date(endDate).toISOString();
    return { formattedStartDate, formattedEndDate };
  },
};

export default util;
