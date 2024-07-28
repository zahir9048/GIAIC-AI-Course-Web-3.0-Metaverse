//                                      0      1      2
// var tuple: [number, string, boolean] = [1 ,"hello", true];
// tuple[1] = 'bye';

// var secondElement = tuple[1];
// console.log(secondElement);

// const failingResponse = ["Not Found", 404];

// but you will need to declare its type as a tuple.



//                                           0                1
// const passingResponse: [string, number] = ['{"name":"xyz"}', 200];

// ///              true
// if (passingResponse[1] === 200) {
//   const localInfo = JSON.parse(passingResponse[0]);
//   console.log(localInfo);
// }

// passingResponse[2];


type StaffAccount = [number, string, string, string?];

const staff: StaffAccount[] = [
//  staff[0][0]
    [0, "xyz", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"]
  ];


type PayStubs = [StaffAccount, ...number[]];

const payStubs: PayStubs[] = [
//   0        1
  [staff[0], 250],
  [staff[1], 250, 260],
  [staff[2], 300, 300, 300],
];

//                          250               250             300        
const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
const monthThreePayments = payStubs[2][2];



function calculatePayForEmployee(id: number, ...args: [...number[]]): void{
    console.log(id);
    console.log(args);
};

///                         0               250
calculatePayForEmployee(staff[0][0], payStubs[0][1]);

//                          1              250             260
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);