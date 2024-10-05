"use client"


import Image from "next/image";
import styles from "./page.module.css";
import { use } from "react";

export default function Home() {


  function sayHello(){
    console.log("hello");
  }

  return (
    <div >
      <button onClick={sayHello}>Click Me</button>
    </div>
  );
}
