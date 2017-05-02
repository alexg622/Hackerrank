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
    var q = parseInt(readLine());
    for(var a0 = 0; a0 < q; a0++){
        var x_temp = readLine().split(' ');
        var x = parseInt(x_temp[0]);
        var y = parseInt(x_temp[1]);
        var z = parseInt(x_temp[2]);
        console.log(catChaseMouse(x_temp))
    }
}
function catChaseMouse(positions) {
  var catA = Math.abs(parseInt(positions[0]) - parseInt(positions[2]));
  var catB = Math.abs(parseInt(positions[1]) - parseInt(positions[2]));
  if (catA === catB){
    return "Mouse C";
  }
  else if (catA < catB) {
    return "Cat A";
  }
  else {
    return "Cat B";
  }
}