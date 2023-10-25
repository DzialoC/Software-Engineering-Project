import Users from '../models/user.model.js';


const UserService = {
    // Create a new user
    async createUser(userData) {
        try {
            const user = await Users.create(userData);
            return user;
        } catch (error) {
            throw error;
        }
    },

    // Get all users
    async getAllUsers() {
        try {
            const users = await Users.findAll({
                attributes: ['name', 'email', 'user', 'admin', 'id']
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
                attributes: ['name', 'email', 'user', 'admin']
            });
            return user;
        } catch (error) {
            throw error;
        }
    },

    async getUsersByPage(pageNumber) {
        const limit = 25;
        const offset = (pageNumber - 1) * limit;
        try {
            const users = await Users.findAll({
                attributes: ['name', 'email', 'user', 'admin', 'id'],  // Returns only name, email, user, admin values
                order: [['createdAt' , 'DESC']],
                limit: limit,
                offset: offset
            });
            return users;
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

    async updateToken(refreshToken) {
        try {

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
        Users.findOne()
    }






}

export default UserService;
