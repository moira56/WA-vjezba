import express from "express"
const router = express.Router();

const pizze = [
    { id: 1, naziv: 'Margherita', cijena: 6.5 },
    { id: 2, naziv: 'Capricciosa', cijena: 8.0 },
    { id: 3, naziv: 'Quattro formaggi', cijena: 10.0 },
    { id: 4, naziv: 'Šunka sir', cijena: 7.0 },
    { id: 5, naziv: 'Vegetariana', cijena: 9.0 }
];

router.get('/pizze', (req, res) => {
    res.json(pizze);
});

app.get('/pizze/:id', (req, res) => {
    const id_pizza = req.params.id;
    if (isNaN(id_pizza)){
        res.json({ message: 'Proslijedili ste parametar id koji nije broj!' });
        return;
    }

    const pizza = pizze.find(pizza => pizza.id == id_pizza);
    if (pizza) {
        res.json(pizza);
    } else {
        res.json({ message: 'Pizza s traženim ID-em ne postoji.' });
    }
});
router.put('/:id', (req, res) => {
    let id_pizza_req = req.params.id;
    let tijelo_zahtjeva = req.body;
    if (isNaN(id_pizza_req)) {
        res.json({ message: 'Proslijedili ste parametar id koji nije broj!' });
        return;
    }
    let index = pizze.findIndex(pizza => pizza.id == id_pizza_req);
    pizze[index] = tijelo_zahtjeva;
    return res.json({message:'Ažurirano!'})
});
router.patch('/:id', (req, res) => {
    let id_pizza_req = req.params.id;
    let tijelo_zahtjeva = req.body;

    if (isNaN(id_pizza_req)) {
        res.json({ message: 'Proslijedili ste parametar id koji nije broj!' });
        return;
    }

    let index = pizze.findIndex(pizza => pizza.id == id_pizza_req);
    let kljucevi_objekta = Object.keys(tijelo_zahtjeva);
    
    console.log(kljucevi_objekta);

    for (let kljuc of kljucevi_objekta) {
        if (pizze[index][kljuc] != tijelo_zahtjeva[kljuc]) {
        pizze[index][kljuc] = tijelo_zahtjeva[kljuc]
    } else {
        pizze[index][kljuc] = pizze[index][kljuc];
    };

    pizze[index][kljuc]=tijelo_zahtjeva[kljuc];
    }

    pizze[index] = tijelo_zahtjeva;
    console.log(pizze);
    
    return res.json({message:'Ažurirano!',azurirani_podatak: tijelo_zahtjeva})
});

router.delete('/:id', (req, res) => {
    const id_pizza = req.params.id;
    const index = pizze.findIndex(pizza => pizza.id == id_pizza);
    
    if (index !== -1) {
        pizze.splice(index, 1);
        res.json({ message: 'Pizza uspješno obrisana.' });
    } else {
        res.json({ message: 'Pizza s traženim ID-em ne postoji.' });
    }
});
export default router;