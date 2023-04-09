function getArrayParams(...arr) {
  let min, max, sum, avg;

  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  min = Math.min(...arr);
  max = Math.max(...arr);
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum
}


function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  return max - min
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sumOddElement += arr[i];
    } else if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    }
  }
  let diff = sumEvenElement - sumOddElement;
  return diff;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }
  let aver = sumEvenElement / countEvenElement;
  return aver;
  
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for(let i = 0; i < arrOfArr.length; i++){
      const result = func(...arrOfArr[i]);
      if (result > maxWorkerResult) {
        maxWorkerResult = result;
      }
      }
      return maxWorkerResult
}
