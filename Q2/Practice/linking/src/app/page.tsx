import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <h2>Linking By Anchor Tag</h2>

      <a href="/about">About</a>
      <a href="/contact">Contact</a>


      <h2>Linking By Link Component</h2>
      
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>

    </div>
  );
}
