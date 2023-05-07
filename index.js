const express = require('express');
const db = require("./db");
const app = express();
const router = require('./router');
const cors = require('cors');


app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
    return res.send("Hola, página de prueba!")
})


const PORT = 4000;

db.then(() => {
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message));

