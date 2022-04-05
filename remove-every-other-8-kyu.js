function removeEveryOther(arr){
    //your code here
    let returnArr = []
    for (i=0; i<arr.length; i++) {
      if (i%2===0) {returnArr.push(arr[i])}
    }
    return returnArr
  }