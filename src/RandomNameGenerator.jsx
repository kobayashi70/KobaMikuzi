import React, { useState } from "react";
import "./App.css";

const RandomNameGenerator = () => {
  const [randomName, setRandomName] = useState("");
  const [animationKey, setAnimationKey] = useState(0);

  const names = [
    "ウルトラGOD吉",
    "ハイパー吉",
    "スーパー吉",
    "大吉",
    "吉",
    "中吉",
    "小吉",
    "末吉",
    "凶",
    "大凶",
    "超大凶",
    "スーパーメガ大凶",
  ];

  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomGeneratedName = names[randomIndex];

    setAnimationKey(animationKey + 1);

    setTimeout(() => {
      setRandomName(randomGeneratedName);
    }, 100);
  };

  const getResultClass = (result) => {
    if (result.includes("ウルトラGOD吉") || result.includes("ハイパー吉") || result.includes("スーパー吉") || result.includes("大吉")) {
      return "result-ultra-good";
    } else if (result.includes("凶") || result.includes("大凶") || result.includes("超大凶") || result.includes("スーパーメガ大凶")) {
      return "result-ultra-bad";
    } else {
      return "result-neutral";
    }
  };
  

  return (
    <div className="wrap">
      <h1 className="title">おみくじ</h1>
      <div className="in-wrap">
        {/* <button onClick={generateRandomName} className="btn">
          ここをクリック！
        </button> */}
        <img 
              src="/omikuji.png" 
              alt="ここをクリック"
              onClick={generateRandomName}
              className="btn"/>
        <div className="kekka-wrap">
          <p key={animationKey} className={`kekka show ${getResultClass(randomName)}`}>
            {randomName}
          </p>
        </div>
      </div>
      <div className="list-wrap">
        <h2>おみくじ順番</h2>
        <ul>
          <li className="list-rank">
            <span className="list-color">☝</span>ウルトラGOD吉
          </li>
          <li>ハイパー吉</li>
          <li>スーパー吉</li>
          <li>大吉</li>
          <li>吉</li>
          <li className="list-rank list-rank-x">
            {" "}
            <span className="list-color">良</span> 中吉
          </li>
          <li className="list-rank list-rank-x">
            {" "}
            <span className="list-color">悪</span>小吉
          </li>
          <li>末吉</li>
          <li>凶</li>
          <li>大凶</li>
          <li>超大凶</li>
          <li className="list-rank">
            {" "}
            <span className="list-color">☟</span> スーパーメガ大凶
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RandomNameGenerator;
