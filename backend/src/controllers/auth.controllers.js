import { generateToken } from "../lib/utils.js";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    // Collect data from the request 
    const { username, email, password } = req.body;

    console.log(req.body); 

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required"});
        }

        const emailExists = await User.findOne({email});

        if (emailExists) return res.status(400).json({ message: "Email already exists"});

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters"});
        }

        // Hash Password before store it at the DB
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new User
        const newUser = new User({
            email: email,
            username: username,
            password: hashedPassword
        })

        if (newUser) {
            generateToken(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                email: newUser.email,
                username: newUser.username,
            });
        } else {
            res.status(400).json({ message: "Invalid user data" });
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ message: "Internal Server Error"});
    }
};

export const login = (req, res) => {
    res.send("login route")
};

export const logout = (req, res) => {
    res.send("logout route")
};
