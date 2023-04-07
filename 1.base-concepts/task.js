"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = Math.pow(b, 2) - 4 * a * c;
  if (discriminant < 0) {
    arr;
  } else if (discriminant === 0) {
    arr.push(-b / (2 * a));
  } else {
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a))
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a))
    console.log(arr)
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmount;
  if (isNaN(percent)) {
  return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
} else if (isNaN(contribution)) {
  return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
} else if (isNaN(amount)) {
  return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
} 	
let returnAmountBank = amount - contribution;	/*тело кредита*/ 
let date1 = new Date();	
let diff = Date.parse(date) - Date.parse(date1); /*  */
let creditTerm = Math.ceil(diff / 1000 / 60 / 60 / 24 / 30.5); 	/* срок кредитования, округление*/ 	
let P = percent / 12 / 100; 	/* процентная ставка */ 
let monthlyFee = returnAmountBank * (P + (P / (((1 + P) ** creditTerm) - 1))); 	/*ежемесячная оплата*/ 
    totalAmount = creditTerm * monthlyFee; /*общая сумма*/ 		
  return Number(totalAmount.toFixed(2));	
}