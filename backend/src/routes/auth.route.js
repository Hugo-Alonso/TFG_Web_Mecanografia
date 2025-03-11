import express from "express";

const router = express.Router();

router.get("/signup", (req, res) => {
      res.send("signup route")
});

router.get("/login",(req, res) => {
    res.send("login route")
});

router.get("/logout", (req, res) => {
    res.send("logout route")
});

router.get("/wordtest", (req, res) => {
    res.send("wordtest route")
});

router.get("/timetest", (req, res) => {
    res.send("timetest route")
});

router.get("/customtest", (req, res) => {
    res.send("customtest route")
});

export default router;