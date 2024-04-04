function isPresent(sentence: string): boolean {
  let present = sentence.indexOf("code") !== -1;
  return present;
}

let sentence2 = "i love to code";
console.log(isPresent(sentence2));
