import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import React from 'react'

const API = process.env.REACT_APP_API_URL;

function CandleDetails() {
    let { id } = useParams();
    let navigate = useNavigate();
    const [candle, setCandle] = useState({});

  useEffect(() => {
    axios.get(`${API}/candles/${id}`).then((response) => {
      setCandle(response.data.payload);
    });
  }, [id, navigate, API]);
  const deleteCandle = () => {
    axios
      .delete(`${API}/candles/${id}`)
      .then(() => {
        navigate(`/candles`);
      })
      .catch((c) => console.error("catch", c));
  };
  const handleDelete = () => {
    deleteCandle();
  };
  return (
    <div>
        <article>
            <h1>Luke's Candle</h1>
            <img src={candle.image} />
            <hr></hr>
            <h3>Name:{candle.name}</h3>
            <hr></hr>
            <h3>price: ${candle.price}</h3>
            <hr></hr>
            <h3>Category: {candle.category}</h3>
        <hr></hr>

        <div className="showNavigation">
          <div>
            {" "}
            <Link to={`/candles`}>
              <button>Back</button>
            </Link>
          </div>
          <div>
            <Link to={`/candles/${id}/edit`}>
              <button>Edit</button>
            </Link>
          </div>
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
        </article>
    </div>
  )
}

export default CandleDetails