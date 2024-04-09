import "./App.css";
import { useState } from "react";
import LettersInputForm from "./LettersInputForm";
import Game from "./Game";

function App() {
  const [targetLetter, setTargetLetter] = useState("");
  const [letters, setLetters] = useState("");
  const [showForm, setShowForm] = useState(true);
  const [rankings, setRankings] = useState();
  return (
    <div className="main">
      <h1>Spelling Bee for Free!</h1>
      {showForm ? (
        <LettersInputForm
          setShowForm={setShowForm}
          setLetters={setLetters}
          setTargetLetter={setTargetLetter}
          setRankings={setRankings}
        ></LettersInputForm>
      ) : (
        <Game
          letters={letters}
          targetLetter={targetLetter}
          rankings={rankings}
        ></Game>
      )}
    </div>
  );
}

export default App;
