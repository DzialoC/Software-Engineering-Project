import UserService from "../services/user.service.js";

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

export const Login = async (req, res) => {
  try {
    console.log("hit");
    const { email, password } = req.body;
    console.log("hit2", email);
    console.log("hit3", req.body);
    if (!email || !password) {
      return res.status(400).json({ msg: "No information provided" });
    }
    const { accessToken, refreshToken } = await UserService.login(
      email,
      password
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false, // Use secure cookies in production
      sameSite: "Strict", // Helps against CSRF attacks
      maxAge: 24 * 60 * 60 * 1000, // 1D
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: false,
      sameSite: "Strict",
      maxAge: 60 * 60 * 1000, // 1h
    });

    res.send({
      message: "Login successful",
    });
  } catch (error) {
    res.status(error.status || 500).json({ msg: error.message });
  }
};

export const Logout = async (req, res) => {
  try {
    console.log("hello?");

    res.cookie("refreshToken", "none", {
      // set token to none and expire after 5 seconds
      expires: new Date(Date.now() + 5 * 1000),
      maxAge: 0,
      secure: false,
      sameSite: "Strict",
      httpOnly: true,
    });
    res.cookie("accessToken", "none", {
      expires: new Date(Date.now() + 5 * 1000),
      maxAge: 0,
      secure: false,
      sameSite: "Strict",
      httpOnly: true,
    });
    console.log("sending it out");
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(error.status || 500).json({ msg: error.message });
  }
};

export const GetAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.sendStatus(500);
  }
};

//Added by me, change if you need/want to ==========================================================

export const GetUserById = async (req, res) => {
  const id = req.body; //double check this, change if necessary: req.params.id
  try {
    const user = await UserService.getUserById(id);
    if (!user) {
      return res.sendStatus(204);
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by ID:", error);
    return res.sendStatus(500);
  }
};

//this is could be incorrectly implemented?? you should do this one.
export const EmailExists = async (req, res) => {
  const emailInput = req.body; // double check
  try {
    const condition = await UserService.emailExists(emailInput);
    if (!condition) {
      return condition; //returning the error?
    }
    return res.status(200).json({ msg: "This email is not currently used." }); //returns the true statement
  } catch (error) {
    console.error("Error checking if email exists in database:", error);
    return res.sendStatus(500);
  }
};

export const GetUsersByPage = async (req, res) => {
  const pageNumber = req.body; //double check
  try {
    const users = await UserService.getUsersByPage(pageNumber);
    if (!users) {
      return res.sendStatus(204);
    }
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users by page:", error);
    return res.sendStatus(500);
  }
};

export const UpdateUserById = async (req, res) => {
  const { id, updateData } = req.body; //double check
  try {
    const user = await UserService.updateUserById(id, updateData);
    if (!user) {
      return res.sendStatus(204);
    }
    return res.status(200).json(user);
  } catch (error) {
    console.error("Error updating user by id:", error);
    return res.sendStatus(500);
  }
};

export const DeleteUserById = async (req, res) => {
  const id = req.body; //double check
  try {
    const condition = await UserService.deleteUserById(id);
    if (!condition) {
      return res.status(500).json({ msg: "Failed to delete the user." });
    }
    return res.status(200).json({ msg: "User deleted successfully." });
  } catch (error) {
    console.error("Error deleting user by id:", error);
    return res.sendStatus(500);
  }
};
