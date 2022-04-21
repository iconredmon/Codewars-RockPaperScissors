function squareSum(numbers){
    let squaredArr = []
    let squaredSum = 0
    numbers.forEach(x => squaredArr.push(Math.pow(x,2)))
      
      for (i=0; i<squaredArr.length;i++) {
        squaredSum+=squaredArr[i]
      }
      
      return squaredSum
    }