import React, { useState } from "react";
import Color from "./Color";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("#42a1b3");
  const [list, setList] = useState(new Values(color).all(8));
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(8);
      setList(colors);
      setError(false);
    } catch (error) {
      setError(true);
      console.log("error");
    }
  };

  return (
    <main>
      <section className="container">
        <h2>Color tints & shades</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="chooseColor">Choose a color:</label>
          <input
            id="chooseColor"
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            // className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
          {error ? <p>Please select a color</p> : null}
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
