"use client";
import { useState, useEffect } from "react";

//DOM & Virtual DOM homework
// Assignment: use usestate hook to make todo app

export default function Home() {
  // let counter = 0;

  const [counter, setCounter] = useState(1); // usestate returns 2 things: a variable & function
  // usestate also re renders the component
  const [username, setName] = useState("old username");

  useEffect(() => {
    console.log("hello 1");
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json));
    setCounter(counter * 10);  
  }, []); // first argument is a callback and second is an array of dependencies
  // only runs once when the component mounts
  // mostly used for API calls

  useEffect(() => {
    console.log("hello 2");
    // setCounter(counter + 1);  
  }, [counter]); // this useeffect hook will run every time counter changes

  let handleIncreaseCounter = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  let handleDecreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  let handleName = () => {
    setName("new username");
  }

  return (
    <div>
      <div>Counter {counter}</div>
      <div>Name: {username}</div>
      <button onClick={handleIncreaseCounter}>Increment Counter</button>
      <button onClick={handleDecreaseCounter}>Decrement Counter</button>
      <button onClick={handleName}>Click Me</button>
    </div>
  );
}
