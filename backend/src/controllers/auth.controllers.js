import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    // Collect data from the request 
    const { username, email, password } = req.body;

    try {
        if (!username || !email || !password) {
            return res.status(400).json({ message: "Todos los campos son necesarios"});
        }

        const emailExists = await User.findOne({email});

        if (emailExists) return res.status(400).json({ message: "Email ya utilizado"});

        if (password.length < 6) {
            return res.status(400).json({ message: "La contraseña debe tener almenos 6 caracteres"});
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
            res.status(400).json({ message: "Datos de usuario invalidos" });
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ message: "Error interno del servidor"});
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Todos los campos son necesarios"});
        }

        // Recover User from database
        const user = await User.findOne({email});

        if (!user) {
            return res.status(400).json({ mesage: "Email no válido" })
        }

        const correctPassword = await bcrypt.compare(password, user.password);

        if (!correctPassword) {
            return res.status(400).json({ mesage: "Contraseña incorrecta" })
        } 

        generateToken(user._id, res)

        res.status(200).json({
            _id: user._id,
            email: user.email,
            username: user.username,
        })

    } catch (error) {
        console.log("Error in login controller", error.message);
        res.status(500).json({ message: "Error interno del servidor"});
    }
};

export const logout = (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 });
        res.status(200).json({ message: "Sesión cerrada correctamente" });
    } catch (error) {
        console.log("Error in logout controller", error.message);
        res.status(500).json({ message: "Error interno del servidor" });
    }
};

export const checkAuth = (req, res) => {
    try {
        res.status(200).json(req.user);
    } catch (error) {
        console.log("Error in chechAuth controller", error.message);
        res.status(500).json({ message: "Error interno del servidor"});
    }
}
