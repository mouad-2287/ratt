const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// ===== Connexion MongoDB =====
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connecté"))
.catch(err => console.log(err));

// ===== MODELE =====
const User = mongoose.model("User", {
    name: String,
    email: String
});

// ===== ROUTES =====

// Ajouter utilisateur
app.post("/api/users", async (req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email
        });

        await user.save();
        res.json(user);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Lire utilisateurs
app.get("/api/users", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// ===== LANCER SERVEUR =====
app.listen(process.env.PORT, () => {
    console.log("Serveur lancé sur http://localhost:" + process.env.PORT);
});