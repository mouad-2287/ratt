const express = require("express");
const cors = require("cors");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// route test
app.get("/", (req, res) => {
  res.send("API fonctionne !");
});

// port
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});