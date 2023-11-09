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

  return (
    <div className="wrap">
      <h1 className="title">おみくじ</h1>
      <div className="in-wrap">
        <button onClick={generateRandomName} className="btn">
          ここをクリック！
        </button>
        <p key={animationKey} className={`kekka show`}>
          {randomName}
        </p>
      </div>
    </div>
  );
};

export default RandomNameGenerator;
