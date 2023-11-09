const isAuthenticated = async (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message:
        "You have made a request against to an endpoint that requires tenant authentication and have not provided a JWT.",
    });
  }
  next();
};

export default isAuthenticated;
