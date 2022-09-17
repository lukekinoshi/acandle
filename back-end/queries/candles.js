const db = require("../db/dbConfig.js");
const getAllCandles = async () => {
    try {
   
      const allCandles = await db.any("SELECT * FROM candles");
      return allCandles;
    } catch (err) {
      return err;
    }
  };

  const getCandle = async (id) => {
    try {
      
      const oneCandle = await db.one("SELECT * FROM candles WHERE id=$1", id);
      return oneCandle;
    } catch (error) {
    
      return error;
    }
  };
  const createCandle = async (candle) => {
    const { name, price, image, category } = candle;
    try {
      const newCandle = await db.one(
        "INSERT INTO candles (name, price, image, category) VALUES ($1, $2, $3, $4) RETURNING *",
        [name, price,  image ,category ]
      );
      return newCandle;
    } catch (error) {
      return error;
    }
  };
  const deleteCandle = async (id) => {
    try {
      const deletedCandle = await db.one("DELETE FROM candles WHERE id = $1 RETURNING *", id);
      return deletedCandle;
    } catch (err) {
      return err;
    }
  };

  const updateCandle = async (candle, id) => {
    const { name,price, image, category  } = candle;
    try {
     
      const updatedCandle = await db.one("UPDATE candles SET name = $1, price = $2, image = $3, category = $4 WHERE id = $5 RETURNING *",
      
      [name, price, image ,category, id]);
      return updatedCandle;
    } catch (err) {
      return err;
    }
  }
  module.exports = { 
    getAllCandles, 
    getCandle, 
    createCandle, 
    deleteCandle,
    updateCandle
  };