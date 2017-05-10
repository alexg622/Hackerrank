function addMultiples(num, numTwo, BigNum){
  numArray = [];
  for (i=0; i<bigNum; i++){
    if (i % num === 0) {
      numArray.push(i);
    }
    else if (i % numTwo === 0){
      numArray.push(i);
    }
  }
  var sum = numArray.reduce(function(num, sum){
    return num + sum;
  }, 0);
  return sum;
}