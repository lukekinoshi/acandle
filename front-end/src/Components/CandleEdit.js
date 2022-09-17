import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {Button, Form} from 'react-bootstrap'

const API = process.env.REACT_APP_API_URL;

function CandleEdit() {
    let { id } = useParams();
    let navigate = useNavigate();
    const [candle, setCandle] = useState({
        name: "",
        price: "",
        image: "",
        price: "",
      });

      const updateCandle = (updatedCandle) => {
        axios
          .put(`${API}/candles/${id}`, updatedCandle)
          .then(
            () => {
              navigate(`/candles/${id}`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };
      const handleTextChange = (event) => {
        setCandle({ ...candle, [event.target.id]: event.target.value });
      };
      useEffect(() => {
        axios.get(`${API}/candles/${id}`).then(
          (response) => setCandle(response.data),
          (error) => navigate(`/not-found`)
        );
      }, [id, navigate]);
      const handleSubmit = (event) => {
        event.preventDefault();
        updateCandle(candle, id);
      };
  return (
    <div className='Edit'>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
        <Form.Label htmlFor="name">Name:</Form.Label>
        <Form.Control
          id="name"
          value={candle.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Candle"
          required
        />
        </Form.Group>
        <br></br>
        <Form.Group>
          <Form.Label htmlFor="image">ImageURL:</Form.Label>
        <Form.Control
          id="image"
          type="text"
          pattern="http[s]*://.+"
          required
          value={candle.image}
          placeholder="http://"
          onChange={handleTextChange}
        />
        </Form.Group>
        <br></br>
        <Form.Group>
        <Form.Label htmlFor="price">price:</Form.Label>
        <Form.Control
          id="price"
          type="text"
          name="price"
          value={candle.price}
          placeholder="$$"
          onChange={handleTextChange}
        />
        </Form.Group>
        <br></br>
        <Form.Group>
        <Form.Label htmlFor="category">Category:</Form.Label>
        <Form.Control
          id="category"
          type="text"
          name="category"
          value={candle.category}
          placeholder="Romance, inspirational, ..."
          onChange={handleTextChange}
        />
        </Form.Group>
        <br></br>
 <input type="submit" />
     
</Form>
<Link to={`/candles/${id}`}>
        <Button variant='success'>Nevermind!</Button>
      </Link>

    </div>
  )
}

export default CandleEdit