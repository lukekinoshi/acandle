import axios from "axios";
import { useState, useEffect } from "react";
import Candle from "../Components/Candle";
import React from 'react'


const API = process.env.REACT_APP_API_URL;
function Candles() {
    const [candles, setCandles] = useState([])
  useEffect(() => {
    axios
      .get(`${API}/candles`)
      .then((response) => setCandles(response.data.payload))
      .catch((c) => console.warn("catch", c));
  }, []);
  return (
    <div>

<section>
        <table>
          <thead>
            <tr>
              <th></th>
              <h1>CANDLES FOR SALE!!!</h1>
            </tr>
          </thead>
          <tbody>
            <section className="candless">
            {candles.map((candle) => {
              return <Candle key={candle.id} candle={candle} />;
            })}
            </section>
          </tbody>
        </table>
      </section>
    </div>
  )
}

export default Candles