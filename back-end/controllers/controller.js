const express = require("express");
const candles = express.Router();
const {
    getAllCandles,
    getCandle,
    createCandle,
    deleteCandle,
    updateCandle
  } = require("../queries/Candles.js");
  const { checkName, validateUrl } = require("../validations/checkCandles.js")

  // candles.use("/:candleId/reviews", reviewsController);
//   INDEX PAGE
  candles.get('/', async (req , res) => {
    const allCandles = await getAllCandles();

    if (allCandles[0]) {

        res.status(200).json({payload: allCandles, success: true});
      } else {
        res.status(500).json({ error: "server error!" });
      }
    
  })
// SHOW
  candles.get("/:id", async (req, res) => {
    const { id } = req.params;
    const candle = await getCandle(id);
    if (candle) {
      res.json({payload: candle, success: true});
    } else {
      res.status(404).json({ payload: "not found", success:false, error: "Candle mot found" });
    }
  });
//   CREATE
candles.post("/", checkName, async (req, res) => {
     
    try {
      const candle = await createCandle(req.body);
      res.json({payload: candle, success: true})
    } catch (error) {
        res.status(404).json({ payload: "not found", success:false, error: "Candle not found" });
    }
  });
//   DELETE
candles.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedCandle = await deleteCandle(id);
    
    if (deletedCandle.id) {
      res.status(200).json({payload: deletedCandle, success: true})
    } else {
      res.status(404).json({ payload: "not found", success:false, error: "Candle mot found" });
    }
  });

//   UPDATE

candles.put("/:id", async (req, res) => {
    const { id } = req.params;
  
    const updatedCandle = await updateCandle(req.body, id);
    if (updatedCandle.id) {
      res.json(updatedCandle);
    } else {
      res.status(404).json({ payload: "not found", success:false, error: "Candle mot found" });
    }
  })

  module.exports = candles;
