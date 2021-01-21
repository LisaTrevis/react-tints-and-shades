import React, { useState } from "react";
import Color from "./Color";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let colors = new Values(color).all(8);
    setList(colors);
  };

  return (
    <main>
      <section className="container">
        <h2>Color tints & shades</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="chooseColor">Choose a color:</label>
          <input
            id="chooseColor"
            className="input-color"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color);
          return <Color key={index} {...color} index={index} hex={color.hex} />;
        })}
      </section>
    </main>
  );
}

export default App;
