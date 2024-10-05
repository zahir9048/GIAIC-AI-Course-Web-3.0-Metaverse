"use client";
import { useEffect } from "react";

export default function Student(props: any) {
  useEffect(() => {
    console.log(props);
  }); 

  return (
    <>  
      <h1>Name: {props.name}</h1>
      <h1>Age: {props.age}</h1>
    </>
  );
}
