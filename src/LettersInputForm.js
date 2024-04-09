import { useState } from "react";
export default function LettersInputForm({
  setShowForm,
  setLetters,
  setTargetLetter,
  setRankings,
}) {
  const [targetValue, setTargetValue] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [goodStart, setGoodStart] = useState(0);
  const [movingUp, setMovingUp] = useState(0);
  const [good, setGood] = useState(0);
  const [solid, setSolid] = useState(0);
  const [nice, setNice] = useState(0);
  const [great, setGreat] = useState(0);
  const [amazing, setAmazing] = useState(0);
  const [genius, setGenius] = useState(0);
  const handleTargetValue = (event) => {
    setTargetValue(event.target.value);
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleGoodStart = (event) => {
    setGoodStart(event.target.value);
  };
  const handleMovingUp = (event) => {
    setMovingUp(event.target.value);
  };
  const handleGood = (event) => {
    setGood(event.target.value);
  };
  const handleSolid = (event) => {
    setSolid(event.target.value);
  };
  const handleNice = (event) => {
    setNice(event.target.value);
  };
  const handleGreat = (event) => {
    setGreat(event.target.value);
  };
  const handleAmazing = (event) => {
    setAmazing(event.target.value);
  };
  const handleGenius = (event) => {
    setGenius(event.target.value);
  };
  function collectRankings() {
    const rankings = {
      goodStart: goodStart,
      movingUp: movingUp,
      good: good,
      solid: solid,
      nice: nice,
      great: great,
      amazing: amazing,
      genius: genius,
    };
    setRankings(rankings);
  }
  function submitForm() {
    setLetters(inputValue);
    setTargetLetter(targetValue);
    collectRankings();
    setShowForm(false);
  }
  return (
    <form>
      <label>
        target letter
        <input
          type="text"
          value={targetValue}
          onChange={handleTargetValue}
        ></input>
      </label>
      <label>
        additional letters
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <label>
        good start
        <input type="text" value={goodStart} onChange={handleGoodStart} />
      </label>
      <label>
        moving up
        <input type="text" value={movingUp} onChange={handleMovingUp} />
      </label>
      <label>
        good
        <input type="text" value={good} onChange={handleGood} />
      </label>
      <label>
        moving up
        <input type="text" value={solid} onChange={handleSolid} />
      </label>
      <label>
        nice
        <input type="text" value={nice} onChange={handleNice} />
      </label>
      <label>
        great
        <input type="text" value={great} onChange={handleGreat} />
      </label>
      <label>
        amazing
        <input type="text" value={amazing} onChange={handleAmazing} />
      </label>
      <label>
        genius
        <input type="text" value={genius} onChange={handleGenius} />
      </label>
      <button onClick={submitForm}>Submit</button>
    </form>
  );
}
