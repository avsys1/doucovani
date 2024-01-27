/* Použití knihovny */
const express = require("express");
const cors = require("cors");
/* Založení instance serveru */
const server = express();

/* Povolujeme našemu localhostu, aby dostával a zasílal requesty. */
server.use(cors({ origin: "http://localhost:3000" }));

/*
 * Server začíná poslouchat na adrese /test GET HTTP request, pokud jej dostane, spustí funkci
 * Funkce následně zale "Ahoj"! zpět
 */
server.get("/test", (req, res) => {
  res.send("Ahoj!");
});

/* Nechám server poslouchat na portu 3001 */
server.listen(3001, () => {
  console.log("Server běží!");
});
