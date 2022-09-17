import { Link } from "react-router-dom";
import React from "react";
// import axios from "axios";
// import { useEffect, useState } from 'react'
// const API = process.env.REACT_APP_API_URL;

function Candle({ candle }) {
  return (
   <div>
    <Link to={`/candles/${candle.id}`}>
        <span>
            <img src={candle.image} alt={candle.name} height={200} width="300"></img>
        </span>
    </Link>
    <h3>Name: {candle.name}</h3>
    <h3>Price: ${candle.price}</h3>
    <h3>Category: {candle.category}</h3>
   </div>
  );
}

export default Candle;