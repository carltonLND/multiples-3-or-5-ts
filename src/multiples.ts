function multiples(endNum: number): number {
  if (endNum <= 0) {
    return 0;
  }

  let sum: number = 0;
  for (let num = 1; num < endNum; num++) {
    if (num % 3 === 0 || num % 5 === 0) {
      sum += num;
    }
  }

  return sum;
}

export default multiples;
