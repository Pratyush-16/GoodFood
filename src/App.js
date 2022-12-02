import React from "react";
import { useState } from "react";
import "./styles.css";

const cuisinesList = {
  Indian: [
    {
      name: "Chole-Bhature",
      rating: "4.9/5",
    },
    {
      name: "Rajma-Chawal",
      rating: "4.8/5",
    },
    {
      name: "Biryani",
      rating: "4.8/5",
    },
    {
      name: "Paneer Butter Masala",
      rating: "4.7/5",
    },
  ],
  Chinese: [
    {
      name: "Mango Chilli Chicken",
      rating: "4.9/5",
    },
    {
      name: "Stir Fried Mushroom With Cashewnuts",
      rating: "4.8/5",
    },
    {
      name: "Tofu With Vegetables In Black Bean Sauce",
      rating: "4.5/5",
    },
    {
      name: "Garlic Soya Chicken",
      rating: "4.7/5",
    },
    {
      name: "Asian BBQ Chicken",
      rating: "4.8/5",
    },
  ],

  Continental: [
    {
      name: "Crispy Calamari Rings",
      rating: "4.7/5",
    },
    {
      name: "Prawn Pie",
      rating: "4.8/5",
    },
    {
      name: "Baked Mushrooms And Capsicum,",
      rating: "4.7/5",
    },
    {
      name: "Chicken Piccata With Bread Salad",
      rating: "4.9/5",
    },
    {
      name: "Mushroom And Herb Filled Tomatoes",
      rating: "4.5/5",
    },
  ],

  Italian: [
    {
      name: "Rissoto",
      rating: "4.7/5",
    },
    {
      name: "Sphagetti",
      rating: "4.9/5",
    },
    {
      name: "Aglio Olio",
      rating: "4.8/5",
    },
    {
      name: "Pizza ",
      rating: "495/5",
    },
  ],
};

var cuisinesWeKnow = Object.keys(cuisinesList);

export default function App() {
  var [cuisine, setCuisine] = useState("Indian");

  function clickHandler(cuisine) {
    setCuisine(cuisine);
  }

  return (
    <div className="App">
      <h1 className="heading"> Good Food </h1>
      <p> Find some food recommendation from famous cuisines.</p>
      <div>
        {cuisinesWeKnow.map((cuisinesWeKnow) => (
          <button
            onClick={() => {
              clickHandler(cuisinesWeKnow);
            }}
          >
            {cuisinesWeKnow}
          </button>
        ))}
      </div>
      <hr />

      <div className="container">
        <ul>
          {cuisinesList[cuisine].map((food) => (
            <li key={food.name}>
              <p className="name">{food.name} </p>
              <p className="name">{food.rating} </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
