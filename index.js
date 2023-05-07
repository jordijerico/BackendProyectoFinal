const express = require('express');
const db = require("./db");
const app = express();
const router = require('./router');
const cors = require('cors');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

let corsOptions = {//CONFIGURO OPCIONES DE CORS
    origin: "*",
};

app.use(cors(corsOptions));
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

