import express from "express";

const app = express();
const port = 5001;

app.get('/', (req, res) => res.send('Servidor creado!!'))

app.listen(port, () => 
    console.log(`App listening on port ${port}!`
    ))