function charsChanged(string) {
  var charsChangedHolder = 0;
  var counter = 1; 
  for (i=0; i<string.length; i++) {
    if (counter === 1 && string[i] != "S") {
      charsChangedHolder += 1;
    }
    else if (counter === 2 && string[i] != "O") {
      charsChangedHolder += 1;
    }
    else if (counter === 3 && string[i] != "S") {
      charsChangedHolder += 1;  
    }
    if (counter === 3) {
      counter = 1; 
    }
    else {
      counter += 1;
    }
  }
  return charsChangedHolder;
}
function main() {
    var S = readLine();
    console.log(charsChanged(S))
}