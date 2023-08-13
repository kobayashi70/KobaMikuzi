import React, { useState } from "react";

const RandomNameGenerator = () => {
  const [randomName, setRandomName] = useState("");

  const names = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];

  const generateRandomName = () => {
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomGeneratedName = names[randomIndex];
    setRandomName(randomGeneratedName);
  };

  return (
    <div className="wrap">
      <h1 className="title">おみくじ！！</h1>
      <div className="in-wrap">
        <button onClick={generateRandomName} className="btn">
          ここをクリック！
        </button>
        <p className="kekka">{randomName}</p>
      </div>
    </div>
  );
};

export default RandomNameGenerator;
