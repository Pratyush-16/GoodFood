import React from "react";
import { useState } from "react";
import "./styles.css";

const cuisinesList = {
  Indian: [
    {
      name: "Chole-Bhature"
    },
    {
      name: "Rajma-Chawal"
    },
    {
      name: "Biryani"
    },
    {
      name: "Paneer Butter Masala"
    }
  ],
  Chinese: [
    {
      name: "Mango Chilli Chicken"
    },
    {
      name: "Stir Fried Mushroom With Cashewnuts"
    },
    {
      name: "Tofu With Vegetables In Black Bean Sauce"
    },
    {
      name: "Garlic Soya Chicken"
    },
    {
      name: "Asian BBQ Chicken"
    }
  ],

  Continental: [
    {
      Recipe: "Crispy Calamari Rings"
    },
    {
      name: "Prawn Pie"
    },
    {
      name: "Baked Mushrooms And Capsicum,"
    },
    {
      name: "Chicken Piccata With Bread Salad"
    },
    {
      name: "Mushroom And Herb Filled Tomatoes"
    }
  ],

  Italian: [
    {
      name: "Rissoto"
    },
    {
      name: "Sphagetti"
    },
    {
      name: "Aglio Olio"
    },
    {
      name: "Pizza with Feta Cheese"
    }
  ]
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
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
