///! Esercizio

// Creiamo il nostro blog personale e giorno dopo giorno lo potremo arricchire con nuove funzionalità sulla base di quello che impareremo.

// Creiamo il progetto base con una rotta / che ritorna un testo semplice con scritto ”Server del mio blog”

// Creiamo un array dove inserire una lista di almeno 5 post, per ognuno indicare titolo, contenuto, immagine e tags (tags è un array di stringhe)

// Creiamo poi una rotta /bacheca che restituisca un oggetto json con la lista dei post.

//- Configuriamo gli asset statici sull’applicazione in modo che si possano visualizzare le immagini associate ad ogni post.

// Testare su postman

// import
const express = require('express');
const app = express();
const port = 3000;

const posts = [
    {
      titolo: "Torta Paesana",
      contenuto: "La torta paesana è un dolce tipico della tradizione lombarda, realizzato con pane raffermo, latte, cacao, uvetta e pinoli.",
      immagine: "/images/torta_paesana.jpeg",
      tags: ["dolce", "tradizione", "cioccolato", "pane raffermo"]
    },
    {
      titolo: "Pasta alla Barbabietola",
      contenuto: "Un primo piatto colorato e originale, preparato con crema di barbabietola, ricotta salata e pistacchi per un contrasto di sapori perfetto.",
      immagine: "/images/pasta_barbabietola.jpeg",
      tags: ["primo", "barbabietola", "vegetariano", "cremoso"]
    },
    {
      titolo: "Pane Fritto Dolce",
      contenuto: "Una ricetta semplice e golosa, perfetta per riutilizzare il pane avanzato: fette di pane fritte e ricoperte di zucchero e cannella.",
      immagine: "/images/pane_fritto_dolce.jpeg",
      tags: ["dolce", "pane", "riciclo", "frittura"]
    },
    {
      titolo: "Crackers alla Barbabietola",
      contenuto: "Snack croccante e sano, preparato con farina, semi misti e barbabietola per un tocco di colore e sapore unici.",
      immagine: "/images/cracker_barbabietola.jpeg",
      tags: ["snack", "salato", "barbabietola", "croccante"]
    },
    {
      titolo: "Ciambellone Classico",
      contenuto: "Un dolce soffice e profumato, perfetto per la colazione o la merenda, realizzato con ingredienti semplici come farina, uova e zucchero.",
      immagine: "/images/ciambellone.jpeg",
      tags: ["dolce", "colazione", "ciambellone", "merenda"]
    }
  ];

// per pescare file statici da "public" (images/nome_foto.jpeg)
app.use(express.static('public'));

// rotta get a '/' (ipotetica home)
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

app.get('/bacheca', (req, res) => {
    res.json(posts);
});

// per avviare il server
app.listen(port, () => {
    console.log(port);
});

