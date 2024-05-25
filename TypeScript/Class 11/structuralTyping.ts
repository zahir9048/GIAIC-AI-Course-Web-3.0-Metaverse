interface Ball {
  diameter: number;
  radius: number;
}
interface Sphere {
  diameter: number;
}

let ball: Ball = {
  diameter: 10,
  radius: 5,
};
let sphere: Sphere = {
  diameter: 20,
};

sphere = ball;
// ball = sphere;
console.log(sphere);

// interface Tube {
//   diameter: number;
//   length: number;
// }

// let tube: Tube = {
//     diameter: 12,
//     length: 3
// };

// // tube = ball;
// ball = tube;
