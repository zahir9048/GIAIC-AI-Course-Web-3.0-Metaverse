import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {

  const name = "Zahir Khan";

  return (
    <div >
      <h1>My Name is {name}</h1>
    </div>
  );
}
