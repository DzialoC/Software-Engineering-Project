import UserService from "../services/user.service.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      attributes: ["id", "name", "email"],
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

// reworked and good
export const Register = async (req, res) => {
  const { name, email, password, confPassword } = req.body;
  // Check if passwords match
  if (password !== confPassword)
    return res
      .status(400)
      .json({ msg: "Password and Confirm Password do not match" });

  try {
    // Use UserService to create user
    await UserService.createUser({ name, email, password });

    res.json({ msg: "Registration Successful" });
  } catch (error) {
    console.log(error);
    if (
      error.message === "An account with this email already exists" ||
      error.message === "An account with this name already exists"
    ) {
      return res.status(400).json({ msg: error.message });
    }
    res.status(500).json({ msg: "Server error, Please try again." });
  }
};

//
export const Login = async (req, res) => {
  try {
    // console.log("Response Before: ", res);
    // console.log("This is the req : \n", req);
    const { email, password } = req.body;
    const { accessToken, refreshToken } = await UserService.login(
      email,
      password
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
    // console.log("Response: ", res);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);

  const user = await Users.findAll({
    where: {
      refresh_token: refreshToken,
    },
  });
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id;
  await UserService.updateRefreshToken(userId, refreshToken);
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};

// needs to be completed
export const refreshTokens = async (req, res) => {
  const token = req.body;
};
