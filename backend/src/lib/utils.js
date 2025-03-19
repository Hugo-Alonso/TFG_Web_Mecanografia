import jwt from 'jsonwebtoken';

export const generateToken = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "5d"
    }) 

    res.cookie("jwt", token, {
        maxAge: 5 * 24 * 60 * 60 * 1000, 
        httpOnly: true, // To prevent XSS attacks (Cross-site Scripting Attacks)
        sameSite: "strict", // To prevent CSRF attacks (Cross-site Request Forgery Attacks)
        secure: process.env.NODE_ENV !== "development"
    });

    return token;
}