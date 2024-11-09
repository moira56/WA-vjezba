import express from 'express';
import path from 'path';
import pizzeRouter from './routes/pizze.js';
import narudzbeRouter from './routes/narudzbe.js';
const app = express();

const PORT = 3001;

app.use(express.json());
app.use('/pizze', pizzeRouter);
app.use('/narudzbe', narudzbeRouter);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "about.html"));
})

app.get("/users", (req, res) => {
    const users = [
        { id: 1, ime: "Moira", prezime: "Čekada" },
        { id: 2, ime: "Monika", prezime: "Čekada" },
        { id: 3, ime: "Moira", prezime: "Monika" }
    ];
    res.json(users);
});

app.listen(PORT, error => {
    if (error) {
        console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
    } else {
        console.log(`Server dela na http://localhost:${PORT}`);
    }
});
