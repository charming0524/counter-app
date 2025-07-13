"use client";
import React, { useState } from "react";
import "./App.css";
import Button from "./components/button/index";

export default function Home() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 1);
  }

  function decreaseCounter() {
    setCount(count - 1);
  }

  return (
    <div className="wrapperContainer">
      <div className="counterHeader">Adeola's Counter App</div>
      <div className="counterContainer">
        <Button title={"Increase"} onclick={increaseCounter} />

        <div>count : {count} </div>

        <Button title={"Decrease"} onclick={decreaseCounter} />
      </div>
    </div>
  );
}
