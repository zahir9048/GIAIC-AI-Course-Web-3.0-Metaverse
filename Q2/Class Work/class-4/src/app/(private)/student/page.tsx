// import Student from "../../../components/Student";


import Student from "@/components/Student";

export default function StudentPage() {
  const name = "Zahir Khan";
  const age = 23;

  // console.log(Student);

  return (
    <div>
      <h1>Student Page</h1>

      {/* <h1>Name: {name}</h1>
        <h1>Age: {age}</h1>
        */}

      <Student name={name} age={age} />
    </div>
  );
}
