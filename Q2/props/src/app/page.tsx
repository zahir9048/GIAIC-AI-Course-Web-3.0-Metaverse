import Image from "next/image";
import styles from "./page.module.css";
import Student from "./components/students";


export default function Home() {

  let n = "xyz";
  let a = 2456463;

  let obj = {
    name: "civic",
    model: "2020"
  }

  return (
    <div >
      <h1>Home Page</h1>

      {/* <Student name = {n} age = {a} /> */}
      <Student object = {obj} />
    </div>
  );
}
