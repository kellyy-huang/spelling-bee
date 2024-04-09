import { useEffect, useState } from "react";
import "./App.css";

export default function Game({ targetLetter, letters, rankings }) {
  const [points, setPoints] = useState(0);
  const [currentWord, setCurrentWord] = useState("");
  const [answers, setAnswers] = useState([]);
  const [currentRanking, setCurrentRanking] = useState("");
  function addLetter(letter) {
    const newString = currentWord.concat(letter);
    setCurrentWord(newString);
  }
  function clearLetters() {
    setCurrentWord("");
  }
  function submitAnswer() {
    setAnswers([...answers, currentWord]);
    addPoints();
    clearLetters();
  }
  function LetterButtons() {
    const arrayedLetters = letters.split("");
    const buttons = [];
    arrayedLetters.forEach((letter) => {
      buttons.push(
        <button type="button" onClick={() => addLetter(letter)} key={letter}>
          {letter}
        </button>
      );
    });
    return (
      <form className="letter-buttons">
        <button
          className="target-letter"
          type="button"
          onClick={() => addLetter(targetLetter)}
        >
          {targetLetter}
        </button>
        {buttons}
      </form>
    );
  }
  function CurrentWord() {
    return <h1>{currentWord}</h1>;
  }
  function Answers() {
    const words = answers.map((ans) => {
      return <h3>{ans}</h3>;
    });
    return <div className="answerBank">{words}</div>;
  }
  function Clear() {
    return (
      <button type="button" onClick={clearLetters}>
        Clear
      </button>
    );
  }
  function SubmitWord() {
    return (
      <button
        type="button"
        onClick={submitAnswer}
        disabled={currentWord.length <= 3}
      >
        Submit Word
      </button>
    );
  }
  function PointValue() {
    return (
      <div>
        <h1>{points}</h1>
        <h3>{currentRanking}</h3>
      </div>
    );
  }
  function addPoints() {
    if (currentWord.length === 4) {
      const newPoints = points + 1;
      setPoints(newPoints);
    } else if (currentWord.length > 4) {
      const newPoints = points + currentWord.length;
      setPoints(newPoints);
    }
  }

  useEffect(() => {
    const rankingPoints = Object.values(rankings);
    for (let i = 0; i < rankingPoints.length; i++) {
      if (points >= rankingPoints[i] && points < rankingPoints[i + 1]) {
        const level = Object.keys(rankings).find((key) =>
          rankings[key].includes(rankingPoints[i])
        );
        console.log("points: ", points, "rank: ", level);
        setCurrentRanking(level);
      }
    }
  }, [points, rankings]);

  return (
    <div className="game">
      <PointValue></PointValue>
      <Answers></Answers>
      <CurrentWord></CurrentWord>
      <LetterButtons></LetterButtons>
      <Clear></Clear>
      <SubmitWord></SubmitWord>
    </div>
  );
}
