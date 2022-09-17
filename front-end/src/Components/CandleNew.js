import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from 'react'

const API = process.env.REACT_APP_API_URL;

function CandleNew() {
    let navigate = useNavigate();
    const addCandle = (newCandle) => {
        axios
          .post(`${API}/candles`, newCandle)
          .then(
            () => {
              navigate(`/candles`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };
      const [candle, setCandle] = useState({
        name: "",
        price: "",
        image: "",
        category: "",
      });
      const handleTextChange = (event) => {
        setCandle({ ...candle, [event.target.id]: event.target.value });
      };
      const handleSubmit = (event) => {
        event.preventDefault();
        addCandle(candle);
      };
  return (
    <div className="New">
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={candle.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
        <hr></hr>
        <label htmlFor="name">Price:</label>
        <input
          id="price"
          value={candle.price}
          type="text"
          onChange={handleTextChange}
          placeholder="Price of candle"
          required
        />
        <br></br>
        <hr></hr>
        <label htmlFor="image">Image:</label>
        <input
          id="image"
          value={candle.image}
          type="text"
          onChange={handleTextChange}
          placeholder="Nimageof the candle"
          required
        />
        <br></br>
        <hr></hr>
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          value={candle.category}
          type="text"
          onChange={handleTextChange}
          placeholder="Category of Candle"
          required
        />
        <br></br>
        <hr></hr>
        <input type="submit" />
        </form>
    </div>
  )
}

export default CandleNew