
import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  const snacks = ["Chips", "Chocolate", "Soda"];

  return (
    <div>
      <h1>Vending Machine</h1>
      <ul>
        {snacks.map((snack, index) => (
          <li key={index}>
            <Link to={`/snack/${index}`}>{snack}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendingMachine;
