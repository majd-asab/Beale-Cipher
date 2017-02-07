//****modules
var fs = require("fs");


//****Checking for CLA
if(process.argv.length < 3){
  console.log("Usage: node " + __filename + " SourceText + PlainText");
  process.exit(-1);
}

var textForSource = process.argv[2];
var textToEncrypt = process.argv[3];


//****Reading plain text

var source = fs.readFileSync(textForSource,'UTF8');

//**** Split the words by whitespace and throw it in array****//
var sourceWords = source.split(" ");
var sourceFinal = []
for(var i = 0; i <sourceWords.length; i++){
  var sourceLetter = sourceWords[i].split('')[0];
  sourceFinal.push(sourceLetter);
}
 //console.log(sourceFinal);

//**** Reading the text to encrypt different
var plainText = fs.readFileSync(textToEncrypt, 'UTF8');
var plainletter = plainText.replace(/[^a-zA-Z0-9]/g,'');
var plainFinal = plainletter.split("");





/***
*Check first index,
* find its match in source
* get the index of the source match
* return index + ","
***/

function encrypt(){

var sourceCopy = sourceFinal;
var encArr = [];
for(var i = 0; i < plainFinal.length; i++){
  plainLetter = plainFinal[i];
  for(var j = 0; j < sourceCopy.length; j++){
    sourceLetter = sourceCopy[j];
    if(sourceLetter === plainLetter){
      var tempLetter = j;
      encArr.push(tempLetter);
      break;
    }
   
  }
}
return encArr.toString();
}
console.log(encrypt());

