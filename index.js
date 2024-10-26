const express = require("express");
const path = require("path");
const app = express();

const PORT = 3001;

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/users", (req, res) => {
    const users = [
        { id: 1, ime: "Moira", prezime: "Čekada" },
        { id: 2, ime: "Monika", prezime: "Čekada" },
        { id: 3, ime: "Moira", prezime: "Monika" }
    ];
    res.json(users);
});

