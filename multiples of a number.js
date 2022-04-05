function findMultiples(integer, limit) {
    //your code here
    let returnArr = []
    let counter = 1
    while (integer*counter <= limit) {
      returnArr.push(integer*counter)
      counter++
    
    }
    return returnArr  
  }
  