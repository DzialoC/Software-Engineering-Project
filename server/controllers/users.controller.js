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
    const { email, password } = req.body;
    const { accessToken } = await UserService.login(email, password);

    // Set the access token in the Authorization header
    res.setHeader("Authorization", "Bearer " + accessToken);
    console.log(accessToken);
    res.json({ message: "Login successful" });
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const Logout = async (req, res) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) return res.sendStatus(204);

  res.clearCookie("accessToken");
  return res.sendStatus(200);
};

export const GetAllUsers = async (req, res) => {
  try {
    const users = await UserService.getAllUsers();
    if (!users) {
      return res.sendStatus(204);
    }
    return res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.sendStatus(500);
  }
};


//Added by me, change if you need/want to ==========================================================

export const GetUserById = async(req, res) => {
  const id = req.body; //double check this, change if necessary: req.params.id
  try{
    const user = await UserService.getUserById(id);
    if(!user){
      return res.sendStatus(204);
    }
    return res.status(200).json(user);
  } catch(error){
    console.error("Error fetching user by ID:", error);
    return res.sendStatus(500);    
  }
};

//this is could be incorrectly implemented?? you should do this one.
export const EmailExists = async(req, res) => {
  const emailInput = req.body; // double check
  try{
    const condition = await UserService.emailExists(emailInput);
    if(!condition){
      return condition; //returning the error?
    }
    return res.status(200).json({msg: "This email is not currently used."}); //returns the true statement
  } catch(error){
    console.error("Error checking if email exists in database:", error);
    return res.sendStatus(500);
  }
};

export const GetUsersByPage = async(req, res) => {
  const pageNumber = req.body; //double check
  try{
    const users = await UserService.getUsersByPage(pageNumber);
    if(!users){
      return res.sendStatus(204);
    }
    return res.status(200).json(users);
  } catch(error){
    console.error("Error fetching users by page:", error);
    return res.sendStatus(500);    
  }
};

export const UpdateUserById = async(req, res) => {
  const { id, updateData } = req.body; //double check
  try{
    const user = await UserService.updateUserById(id, updateData);
    if(!user){
      return res.sendStatus(204);
    }
    return res.status(200).json(user);
  } catch(error){
    console.error("Error updating user by id:", error);
    return res.sendStatus(500);    
  }
};

export const DeleteUserById = async(req, res) => {
  const id = req.body; //double check
  try{
    const condition = await UserService.deleteUserById(id);
    if(!condition){
      return res.status(500).json({msg: "Failed to delete the user."});
    }
    return res.status(200).json({msg: "User deleted successfully."});
  } catch(error){
    console.error("Error deleting user by id:", error);
    return res.sendStatus(500);    
  }
};

//functions that need to implemented: refreshtokens, isAdmin, getUserByEmail.


