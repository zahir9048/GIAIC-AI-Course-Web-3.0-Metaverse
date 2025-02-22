'use client'
import Image from "next/image";
import { use } from "react";

export default function Home() {

  const handleClickEvent = () =>{
    alert("hello");
  }
  return (
    <div className="flex justify-center items-center">
      <button onClick={handleClickEvent} className="p-3 rounded-2xl bg-blue-800/70">Click Me</button>
    </div>
  );
}
