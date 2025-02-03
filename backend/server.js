const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

/*----------------------------DATA-BASE-----------------------------------*/
const dataBase = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "logindb"
});

dataBase.connect(err => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL successfully!");
    }
});

/*------------------------------CHECK-EMAIL-------------------------------*/
app.post("/check-email", (req, res) => {
    const { email } = req.body;

    // Validate email format
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
    }

    const sql = "SELECT * FROM users WHERE email = ?";
    dataBase.query(sql, [email], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Internal server error during email check" });
        }

        if (result.length > 0) {
            res.json({ exists: true });
        } else {
            res.json({ exists: false });
        }
    });
});

/*--------------------------------SIGNUP----------------------------------*/
app.post("/signup", (req, res) => {
    const { username, email, password, confirmPassword } = req.body;

    if (!username || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: "Passwords do not match" });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
    }

    // Hash the password
    bcryptjs.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error("Password hashing error:", err);
            return res.status(500).json({ error: "Internal server error during password hashing" });
        }

        const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        dataBase.query(sql, [username, email, hashedPassword], (err, result) => {
            if (err) {
                console.error("Database error:", err);
                return res.status(400).json({ error: "User already exists or database error" });
            }

            res.json({ message: "User registered successfully!" });
        });
    });
});

/*--------------------------------LOGIN----------------------------------*/
app.post("/login", (req, res) => {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    const sql = "SELECT * FROM users WHERE email = ?";
    dataBase.query(sql, [email], (err, result) => {
        if (err) {
            console.error("Database error:", err);
            return res.status(500).json({ error: "Internal server error during login" });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        const user = result[0];
        bcryptjs.compare(password, user.password, (err, match) => {
            if (err) {
                console.error("Password comparison error:", err);
                return res.status(500).json({ error: "Internal server error during password check" });
            }

            if (!match) {
                return res.status(401).json({ error: "Incorrect password!" });
            }

            const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1d" });
            res.json({ message: "Login successful!", token });
        });
    });
});

/*-------------------------------SERVER--------------------------------------*/
app.listen(5000, () => {
    console.log("Server running on port 5000");
});