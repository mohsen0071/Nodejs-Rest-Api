const express = require("express");
const app = express();
const phones = require("./data");

app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).json("Phone Catalog Server.");
});

app.get("/api/phones", (req, res) => {
    res.status(200).json(phones);
});

app.get("/api/phones/:id", (req, res) => {
    const phone = phones.find((p) => p.id === parseInt(req.params.id));
    if (!phone)
        res.status(404).send("The phone with the given ID was not found.");
    res.status(200).json(phone);
});

module.exports = app;
