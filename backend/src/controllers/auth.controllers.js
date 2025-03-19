import { generateToken } from "../lib/utils.js";
import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    res.send("signup route");
};

export const login = (req, res) => {
    res.send("login route")
};

export const logout = (req, res) => {
    res.send("logout route")
};
