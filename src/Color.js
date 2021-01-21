import React, { useState, useEffect } from "react";

const Color = ({ rgb, weight, index, hex, type }) => {
  const [alert, setAlert] = useState(false);
  // Turn rgb array into a string for background color
  const bgc = rgb.join(",");
  // Set up const to copy to clipboard
  const hexValue = `#${hex}`;

  const changeAlert = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      className={`color ${type === "shade" && "color-light"}`}
      style={{ backgroundColor: `rgb(${bgc})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {(!alert && (
        <button className="btn" type="button" onClick={changeAlert}>
          Copy to clipboard
        </button>
      )) ||
        (alert && <p className="alert">Copied to clipboard!</p>)}
    </article>
  );
};

export default Color;
