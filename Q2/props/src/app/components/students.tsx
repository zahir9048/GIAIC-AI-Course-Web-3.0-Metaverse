


export default function Student(data:any) {


    // let name = "zahir";
    // let age = 24;

    return (
      <div >
        <h1>Student Details</h1>

        {/*            parameter ka naam . prop ka naam         */}
        {/* <h3>Name: {data.name}</h3>
        <h3>Age: {data.age}</h3> */}

          <h1>Car Name: {data.object.name}</h1>
          <h1>Car Model: {data.object.model}</h1>

      </div>
    );
  }