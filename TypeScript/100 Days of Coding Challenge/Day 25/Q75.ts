function useCompoundOperators() {
  let x = 4;
  console.log("Initial value of x:", x);

  x += 2;
  console.log("After addition value of x:", x);

  x -= 1;
  console.log("After subtraction value of x:", x);

  x *= 3;
  console.log("After multiplication value of x:", x);

  x /= 2;
  console.log("After division value of x:", x);
}

useCompoundOperators();
