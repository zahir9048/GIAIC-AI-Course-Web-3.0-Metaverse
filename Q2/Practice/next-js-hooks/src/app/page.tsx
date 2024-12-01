"use client"

import { useState, useEffect } from "react";

export default function Home() {

  let [count, setCount] = useState(0);
  let [name, setName] = useState("ahmed");
  let [background, setBackground] = useState("#FFF");

  useEffect(()=>{
    console.log("component mounted");
    if(count !== 0){
      let randomColor = getRandomHexColor();
      setBackground(randomColor);
    }
    // fetch api
    // animation
  }, [count, name]);  

  function getRandomHexColor(): string {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor.padStart(6, '0')}`;
  }

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  }

  const handleDecrement = () => {
    if(count > 0){
      setCount(prevCount => prevCount - 1);
    }
  }
  
  return (
    <>
      <div style={{backgroundColor: background}} className= "flex w-full h-[600px] justify-center items-center">
        {name}
       <button onClick={()=>{setName("zahir")}}>Change name</button>
        <button onClick={handleDecrement} className="bg-red-700 px-4 py-1 rounded-[10px] text-[24px]">-</button>
        <p className="mx-3 text-[34px]">{count}</p>
        <button onClick={handleIncrement} className="bg-blue-700 px-4 py-1 rounded-[10px] text-[24px]">+</button>
      </div>
    </>
  );
}
