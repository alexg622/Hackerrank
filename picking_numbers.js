// passed first two test cases in progress 
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
    a = readLine().split(' ');
    a = a.map(Number);
    var idNumbers = giveNumbersId(a);
    console.log(pickingNumbers(idNumbers).length);
    
}
function NumberWithId(number, id) {
  this.number = number,
  this.id = id;
}
function giveNumbersId(array){
  numbersWithIdArray = [];
  var counter = 1;
  array.forEach(function(num){
    var number = new NumberWithId(num, counter);
    numbersWithIdArray.push(number);
    counter ++;
  });
  return numbersWithIdArray;
}
function pickingNumbers(array) {
  var absoluteNumber = 0; 
  var answerArray = [];
  for (i=0; i<array.length; i++) {
    for (b=i+1; b<array.length; b++) {
      absoluteNumber = Math.abs(array[i].number - array[b].number);
      if (absoluteNumber <= 1 && answerArray.includes(array[i].id) === false && answerArray.includes(array[b].id) === false ) {
        answerArray.push(array[i].id);
      }
    }
  }
  return answerArray;
}