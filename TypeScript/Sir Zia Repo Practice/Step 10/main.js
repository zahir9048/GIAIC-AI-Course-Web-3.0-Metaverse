//                                      0      1      2
// var tuple: [number, string, boolean] = [1 ,"hello", true];
// tuple[1] = 'bye';
const staff = [
    //  staff[0][0]
    [0, "xyz", "adankwo.e@"],
    [1, "Kanokwan", "kanokwan.s@"],
    [2, "Aneurin", "aneurin.s@", "Supervisor"]
];
const payStubs = [
    //   0        1
    [staff[0], 250],
    [staff[1], 250, 260],
    [staff[2], 300, 300, 300],
];
//                          250               250             300        
// const monthOnePayments = payStubs[0][1] + payStubs[1][1] + payStubs[2][1];
// const monthTwoPayments = payStubs[1][2] + payStubs[2][2];
// const monthThreePayments = payStubs[2][2];
function calculatePayForEmployee(id, ...args) {
    console.log(id);
    console.log(args);
}
;
///                         1             250            260
calculatePayForEmployee(staff[1][0], payStubs[1][1], payStubs[1][2]);
export {};
