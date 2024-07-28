//synchronous code sequence

// console.log("hello there")

// let j = 0;

// for(let i=0; i<1000000000000000; i++){
//           j = j + i;
// }

// console.log("I am zahir")
// console.log("i am student")



//setTimeout function (asynchronous)

// console.log("I") 

// setTimeout(function(){
//   console.log("eat")

// },2000); 
// // 1 sec = 1000 milisecond

// console.log("icecream")


// console.log("I") 

// setTimeout(()=>{   
//     console.log("eat");


//     setTimeout(()=>{
//       console.log("icecram") // callback hell

//       setTimeout(()=>{
//         console.log("thank you") // callback hell

//         setTimeout(()=>{
//           console.log("icecram") 
//       },1000)

//     },1000)


//   },2000)

    
// },1000)




// callbacks

// function orderPizza(prepareCb: any){
//     console.log("Placing order...")
//     setTimeout(()=>{
//         console.log("order placed");
//         prepareCb();
//     },3000)
//     console.log("ending orderPizza")
// }

// function preparePizza(){
//     console.log("Preparing pizza...");
//     setTimeout(()=>{
//         console.log("Pizza is being prepared! 🍕")
//     }, 3000)
    
// }

// orderPizza(preparePizza)


// // same example with delivery callback
// function orderPizza(prepareCb: any, deliveryCb:any){
//     console.log("Placing order...")
//     setTimeout(()=>{
//         console.log("order placed");
//         prepareCb(deliveryCb);
//     },3000)

// }

// function preparePizza(deliveryCb:any){
//     console.log("Preparing pizza...");
//     setTimeout(()=>{
//         console.log("Pizza is being prepared! 🍕")
//         deliveryCb();
//     }, 3000)
// }

// function delivery(){
//     setTimeout(()=>{
//         console.log("Lo Khao...")
//     }, 5000)
// }

// orderPizza(preparePizza, delivery) //  function inside function



// home work
// type Fn = ()=>void;

// function greet(cb:Fn){
//     cb();
// }

// greet(()=>(console.log("hello")))

// Promises

// function orderPizzaPromise() {
//   console.log("Placing order...");
  
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("Order Placed.");
//       resolve("");
//     }, 3000);
//   });
// }

// function preparePizza() {
//   console.log("Preparing pizza...");
  
//   return new Promise((resolve,reject) => {
//     setTimeout(() => {
//       console.log("Pizza is being prepared! 🍕");
//       resolve("");

//   });
// }

// function delivery() {
//   setTimeout(() => {
//     console.log("Lo Khao...");
//   }, 5000);
// }



// orderPizzaPromise()
// .then(preparePizza)
// .then(()=>{
//   delivery();
// })
// .catch((error)=>{
//   console.log(error);
// });


// .then
// orderPizzaPromise()
// .then(preparePizza)
// .then(delivery)
// .catch((error)=>{
//   console.log(error);
//   console.log("pizza nhi mila")
// });



//await keyword //synchronous execution
// let result = await orderPizzaPromise();
// let result2 = await preparePizza();

// console.log(result)
// console.log(result2)

// console.log("hello")




//asynchronous functions
async function pizza(){

  //synchronously 

  try{
    await orderPizzaPromise();
    await preparePizza();
    await delivery();

  }
  catch(error){
    console.log(error)
  }

}

pizza();
console.log("hello")



async function orderAndPreparePizza() {
  await orderPizzaPromise();
  await preparePizza();
  await delivery();
  return "resolved"
}

function orderPizzaPromise() {
  return new Promise((resolve) => {
    console.log("Placing order...");
    setTimeout(() => {
      console.log("Order Placed.");
      resolve("");
    }, 3000);
  });
}

function preparePizza() {
  return new Promise((resolve) => {
    console.log("Preparing pizza...");
    setTimeout(() => {
      console.log("Pizza is being prepared! 🍕");
      resolve("");
    }, 3000);
  });
}

function delivery() {
  setTimeout(() => {
    console.log("Lo Khao...🍕");
  }, 3000);
}

orderAndPreparePizza()
.then((data)=>{
  console.log(data)
});

console.log("it should print first...");
