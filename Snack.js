
import React from "react";
import { Link } from "react-router-dom";

const Snack = ({ match }) => {
  const snacks = ["Chips", "Chocolate", "Soda"];
  const snackId = match.params.id;
  const snack = snacks[snackId];

  return (
    <div>
      <h1>{snack}</h1>
      <p>This is the {snack} snack!</p>
      <Link to="/">Back to Vending Machine</Link>
    </div>
  );
};

export default Snack;
