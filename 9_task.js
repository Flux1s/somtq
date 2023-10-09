const creditRub = 200000;
const interestRatePerc = 10;
const loanTermYear = 2;
let overpaid = (creditRub * interestRatePerc / 100) * loanTermYear;
let totalPayment = creditRub + overpaid;

console.log(totalPayment)
console.log(overpaid)
