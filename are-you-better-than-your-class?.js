function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let initialVal = 0
  let sumOfTotalPoints = classPoints.reduce((acc, c)=> acc + c, initialVal);
  let sumWithYourPoints = sumOfTotalPoints + yourPoints
  let classAvg = sumWithYourPoints/(classPoints.length+1)
  return yourPoints>classAvg
}

