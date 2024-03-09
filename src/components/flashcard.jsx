import "./flashcard.css";
import { useState } from "react";

function Flashcard({ title, text }) {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className={`flashcard ${flipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="front">
        <h2>{title}</h2>
      </div>
      <div className="back">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Flashcard;
