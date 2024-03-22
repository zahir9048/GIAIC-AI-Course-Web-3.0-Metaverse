type Shape = {
    kind: "circle" | "rectangle";
    radius?: number; // Only for circles
    width?: number; // Only for rectangles
    height?: number; // Only for rectangles
};


let circle: Shape = {
    kind: "circle",
    radius: 5
};

let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};

console.log(circle); 
console.log(rectangle); 
