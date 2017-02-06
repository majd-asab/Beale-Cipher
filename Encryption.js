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
var usedKeySpace = []
var encArr = [];
for(var i = 0; i < plainFinal.length; i++){
  plainLetter = plainFinal[i];
  for(var j = 0; j < sourceCopy.length; j++){
    sourceLetter = sourceCopy[j];
    console.log(sourceCopy[j]+ " "+j);
    if(sourceLetter === plainLetter && (usedKeySpace.indexOf(sourceLetter) === -1)){
      console.log(usedKeySpace);
      var tempLetter = j;
      encArr.push(tempLetter);
      usedKeySpace.push(sourceLetter); //add to the array of used letters
      //break;
    }
    else if(j === sourceCopy.length-1){
      for(k = 0;k<usedKeySpace.length;k++){
        //find all indicies where the element in sourceCopy[j] is found in usedkey space and add them deletion array array
        if(sourceCopy[j] === usedKeySpace[k]){
          delete usedKeySpace[i];
        }
      }
    }
  }
}
return encArr.toString();
}
console.log(encrypt());

/***
* get the first index from encrypted sourced
* match the number to the index of the source
* get the value of that index
***/
 var encrypted = encrypt();

function decrypt(){

var decArr = [];
var numbersSplit = encrypted.split(',');

for(var i = 0; i < numbersSplit.length; i++){
  var num = numbersSplit[i];
  for(var j = 0; j< sourceFinal.length; j++){
    var sourceIndex = j;
    if(sourceIndex == num){
      var tempLetter = sourceFinal[j];
      decArr.push(tempLetter);
    }
  }
}
return decArr.toString();
}
console.log(decrypt());

/***
*uppercase
*take the rest of the characters
* start at random place in text
***/
