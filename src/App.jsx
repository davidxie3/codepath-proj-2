import Flashcard from './components/flashcard'
import { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [feedback, setFeedback] = useState("");

  const cardPairs = [
    {title: "Mercedes", text: "Lewis Hamilton and George Russel"},
    {title: "Ferrari", text: "Charles Leclerc and Carlos Sainz"},
    {title: "Red Bull", text: "Max Verstappen and Sergio Perez"},
    {title: "Williams", text: "Alex Albon and Logan Saergent"},
    {title: "Mclaren", text: "Lando Norris and Oscar Piastri"},
    {title: "Haas", text: "Nico Hulkenberg and Kevin Magnussen"},
    {title: "Alpine", text: "Pierre Gasly and Esteban Ocon"},
    {title: "Kick Sauber", text: "Zhou Guanyu and Valteri Bottas"},
    {title: "Aston Martin", text: "Fernando Alonso and Lance Stroll"},
    {title: "Visa CashApp Red Bull", text: "Daniel Ricciardo and Yuki Tsunoda"}
  ];

  useEffect(() => {
    setFeedback(""); // Reset feedback to blank whenever currentPairIndex changes
  }, [currentPairIndex]);

  const handlePrevClick = () => {
    setCurrentPairIndex(prevIndex => (prevIndex === 0 ? cardPairs.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentPairIndex(prevIndex => (prevIndex === cardPairs.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSubmitGuess = () => {
    const correctAnswer = cardPairs[currentPairIndex].text.toLowerCase();
    console.log({userInput});
    console.log({correctAnswer});
    if(userInput.toLowerCase() === correctAnswer){
      setFeedback('Correct!');
    } else { 
      setFeedback('Incorrect!');
    }
  };

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <>
      <div className="main">
        <h1> 2024 Formula One Team and Drivers!</h1>
        <Flashcard title={cardPairs[currentPairIndex].title} text={cardPairs[currentPairIndex].text} />
        <div className="input">
          <label>
            Guess The Driver Pairing: <input name="userInput" onChange={handleInputChange}/>
          </label>
          <button onClick={handleSubmitGuess}>Submit Guess</button>
          <p>{feedback}</p>
        </div>
      </div>
      <div className="button-container">
        <button onClick={handlePrevClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </>
  )
}

export default App;
