import Users from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserService = {
  // current error with it parsing the inputted data correctly....

  // Create a new user
  async createUser({ name, email, password }) {
    console.log("Name: ", name, " | email: ", email, " | password: ", password);
    // See if email exists
    const userByEmail = await Users.findOne({ where: { email: email } });
    if (userByEmail) {
      const error = new Error("An account with this email already exists");
      error.status = 400;
      return error;
    }

    // See if username already exists
    const userByName = await Users.findOne({ where: { name: name } });
    if (userByName) {
      const error = new Error("An account with this name already exists");
      error.status = 400;
      return error;
    }

    // salt and hash password
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // create account
    await Users.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
  },

  async login(email, password) {
    const user = await Users.findOne({
      where: {
        email: email,
      },
    });
    if (!user) {
      const error = new Error("Email not found");
      error.status = 404;
      throw error;
    }
    // Check to see if user is an employee to gain access to system
    if (!user.user) {
      const error = new Error(
        "You are not an Employee. If you are please speak to an Administrator."
      );
      error.status = 403;
      throw error;
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      const error = new Error("Wrong Password");
      error.status = 400;
      throw error;
    }
    const userId = user.id;
    const name = user.name;
    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15s",
      }
    );

    const refreshToken = jwt.sign(
      { userId, name, email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );

    await this.updateRefreshToken(userId, refreshToken);

    return { accessToken, refreshToken };
  },

  // Get all users
  async getAllUsers() {
    try {
      const users = await Users.findAll({
        attributes: ["name", "email", "user", "admin", "id"],
      });
      return users;
    } catch (error) {
      throw error;
    }
  },

  // Get user by ID
  async getUserById(id) {
    try {
      const user = await Users.findByPk(id, {
        attributes: ["name", "email", "user", "admin"],
      });
      return user;
    } catch (error) {
      throw error;
    }
  },

  // Used to see if an accont that is registerings email already exists within the database.
  async emailExists(emailInput) {
    try {
      const email = Users.findOne({ where: { email: emailInput } });
      if (!email) {
        const error = new Error("An account with this email already exists");
        error.status = 400;
        return error;
      }
      return true;
    } catch (error) {
      throw error;
    }
  },

  async getUsersByPage(pageNumber) {
    const limit = 25;
    const offset = (pageNumber - 1) * limit;
    try {
      const users = await Users.findAll({
        attributes: ["name", "email", "user", "admin", "id"], // Returns only name, email, user, admin values
        order: [["createdAt", "DESC"]],
        limit: limit,
        offset: offset,
      });
      return users;
    } catch (error) {
      throw error;
    }
  },

  async isAdmin(id) {
    try {
      const admin = await User.findByPk(id);
      if (admin.admin) {
        return true;
      } else {
        const error = new Error("Forbidden: Not Admin");
        error.status = 403;
        throw error;
      }
    } catch (error) {
      throw error;
    }
  },

  // Update user by ID
  async updateUserById(id, updateData) {
    try {
      await Users.update(updateData, { where: { id: id } });
      return await this.getUserById(id);
    } catch (error) {
      throw error;
    }
  },

  async updateRefreshToken(userId, refreshToken) {
    try {
      await Users.update(
        { refresh_token: refreshToken },
        {
          where: {
            id: userId,
          },
        }
      );
    } catch (error) {
      throw error;
    }
  },

  // Delete user by ID
  async deleteUserById(id) {
    try {
      const user = await this.getUserById(id);
      if (user) {
        await user.destroy();
        return true;
      }
      return false;
    } catch (error) {
      throw error;
    }
  },

  async getUserByEmail(email) {
    Users.findOne();
  },
};

export default UserService;
