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
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) === true) {
    return false; /* Если параметр функции string, то преобразовать в number, иначе false */
  }
  else {
    let P = (percent / 100) / 12; /*Годовая ставка => месячная */
    let S = amount - contribution; /* Тело кредита */
    let paymentInMonths = (S * (P + (P / (((1 + P)** countMonths) - 1)))); /* Ежемесячная оплата */
    let totalPayment = Number((paymentInMonths * countMonths).toFixed(2)); /* Общая сумма выплат */
    return totalPayment
  }
}