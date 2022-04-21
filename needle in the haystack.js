function findNeedle(haystack) {
    // your code here
    let index
    for (i=0; i<haystack.length; i++) {
      if (haystack[i] === 'needle') {
        index = i
        return "found the needle at position " + index
      }
    }
  }