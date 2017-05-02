process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var theAnswer = answer(arr)
    for (d=0; d<theAnswer.length; d++) {
        console.log(theAnswer[d])
    }
}

function helpSort(a, b){
  return a - b ;
}
function lowestNumber(array){
  var lowNumber = array.sort(helpSort)[0];
  return lowNumber;
}

function cutSticks(array){
  var lowNumber = lowestNumber(array)
  for (i=0; i<array.length; i++){
    var newNumber = array[i] - lowNumber
    array.splice(i, 1, newNumber)
  }
  return array
}
function takeOutSticks(array) {
  for (i=0; i<array.length; i++) {
    if (array[i] <= 0) {
      array.splice(i, 1)
      i -= 1 
    }
  }
  return array.length 
}
function answer(array) {
  var answerArray = [array.length] 
  for (c=0; c<=array.length; c++) {
    var newArray = cutSticks(array)
    answerArray.push(takeOutSticks(newArray))
  }
  return answerArray
}
