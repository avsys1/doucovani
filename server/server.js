/* Použití knihovny */
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "doucko",
  password: "zii7RaeT2Aeda6",
  database: "doucko",
});
/* Založení instance serveru */
const server = express();

/* Povolujeme našemu localhostu, aby dostával a zasílal requesty. */
server.use(cors({ origin: "http://localhost:3000" }));

/* Řekneme serveru, jak má načítat data z post a put requestů */
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

/*
 * Server začíná poslouchat na adrese /test GET HTTP request, pokud jej dostane, spustí funkci
 * Funkce následně zale "Ahoj"! zpět
 */
server.get("/test", (req, res) => {
  res.send("Ahoj!");
});

server.post("/tutorRequest", (req, res) => {
  const keys = Object.keys(req?.body);
  const values = Object.values(req?.body);

  const updatedValues = values.map((value) => {
    if (value == "yes") return true;
    if (value == "no") return false;
    return value;
  });

  connection.query(
    "INSERT into demo(" + keys.join(",") + ") values(?)",
    [updatedValues],
    (err, results) => {
      if (err) console.log(err);
      console.log(results);
    }
  );
  res.send("Ahoj!");
});

/* Nechám server poslouchat na portu 3001 */
server.listen(3001, () => {
  console.log("Server běží!");
});
