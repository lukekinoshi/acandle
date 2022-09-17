const express = require('express');
const cors = require("cors");
const app = express();
// CONTROLLERS
const candlesController = require("./controllers/controller.js");
app.use(express.json());
app.use(cors());
app.use("/candles", candlesController);
app.get('/', (req, res) => {
    res.send("welcome to my candles website - this route brought to you by Luke")
});
app.get("*", (req, res) => {
    res.status(404).send("page not found - this is from line 20 by the way")
})

module.exports = app;