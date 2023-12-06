import UserService from "../services/user.service.js";
import util from "../utils/util.js";

const isAdmin = async (req, res, next) => {
  try {
    // Get user ID from access token
    const user = util.getUserIdByAccessToken(req);

    // Check if the user is an admin
    const verified = await UserService.isAdmin(user);
    if (!verified) {
      return res.status(403).json({
        success: false,
        message: "Access denied. You do not have the necessary permissions.",
      });
    }

    // Proceed to the next middleware if the user is an admin
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export default isAdmin;
