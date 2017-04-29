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
    var unsorted = [];
    for(var unsorted_i = 0; unsorted_i < n; unsorted_i++){
       unsorted[unsorted_i] = readLine();
    }
numbersArray = makeStringsNumbers(unsorted);
function sortNum(a, b) {
  return a - b;
}
sortedNumbersArray = numbersArray.sort(sortNum);
sortedNumbersArray.forEach(function(num){
  console.log(num);
});

}

function makeStringsNumbers(array){
  numbersHolder = [];
  array.forEach(function(string){
    numbersHolder.push(parseInt(string));
  });
  return numbersHolder;
}