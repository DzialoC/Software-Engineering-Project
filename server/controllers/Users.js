import UserService from "../services/user.service";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
 
export const getUsers = async(req, res) => {
    try {
        const users = await Users.findAll({
            attributes:['id','name','email']
        });
        res.json(users);
    } catch (error) {
        console.log(error);
    }
}

export const Register = async(req, res) => {
    const { name, email, password, confPassword } = req.body;
    // Check if passwords match
    if(password !== confPassword) return res.status(400).json({msg: "Password and Confirm Password do not match"});

    try {
        // Check for existing user by email
        const userByEmail = await Users.findOne({where: {email: email}
        });
        if (userByEmail) {
            return res.status(400).json({msg: "An account with this email already exists"});
        }

        // Check for existing user by name
        // (Remove this if username doesn't need to be unique)
        const userByName = await Users.findOne({where: {name: name }
        });
        if (userByName) {
            return res.status(400).json({msg: "An account with this name already exists"});
        }

        // If no existing user found, proceed with registration
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        await UserService.createUser({
            name: name,
            email: email,
            password: hashPassword
        });

        res.json({msg: "Registration Successful"});

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Server error"});
    }
}
 
export const Login = async(req, res) => {
    try {
        const user = await UserService.findAll({
            where:{
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password);
        if(!match) return res.status(400).json({msg: "Wrong Password"});
        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
            expiresIn: '15s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: '1d'
        });
        await UserService.updateToken({refresh_token: refreshToken},{
            where:{
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000
        });
        res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Email not found"});
    }
}
 
export const Logout = async(req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if(!refreshToken) return res.sendStatus(204);
    const user = await Users.findAll({
        where:{
            refresh_token: refreshToken
        }
    });
    if(!user[0]) return res.sendStatus(204);
    const userId = user[0].id;
    await Users.update({refresh_token: null},{
        where:{
            id: userId
        }
    });
    res.clearCookie('refreshToken');
    return res.sendStatus(200);
}