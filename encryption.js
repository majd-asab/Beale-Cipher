//modules
var fs = require("fs");


//Checking for command line arguments
if(process.argv.length < 3){
  console.log("Usage: node " + __filename + " SourceText + PlainText");
  process.exit(-1);
}

var textForSource = process.argv[2];
var textToEncrypt = process.argv[3];

//function to make a deep copy of an array
function createCopy(arrToCopy, newArray){
	var newArray = [];
	for(var i = 0; i < arrToCopy.length; i++){
		newArray.push(arrToCopy[i]);
		if(i == arrToCopy.length-1){
			return newArray;
		}
	}
}

function encrypt(plainText,sourceText){

	//Reading the source book (letters used to encrypt with) from buffer into utf8
	var source = fs.readFileSync(textForSource,'UTF8');

	// Splitting the words by whitespace and throwing them into an array
	var sourceWords = source.split(" ");
	var sourceFinal = [];
	for(var i = 0; i <sourceWords.length; i++){
	  var sourceLetter = sourceWords[i].split('')[0];
	  sourceFinal.push(sourceLetter);
	}
	 //console.log(sourceFinal);

	// Reading the text to encrypt different
	var plainText = fs.readFileSync(textToEncrypt, 'UTF8');
	var plainletter = plainText.replace(/[^a-zA-Z0-9]/g,'');
	var plainFinal = plainletter.split("");

	/***
	*Check first index,
	* find its match in source
	* get the index of the source match
	* return index + ","
	***/

	//make a copy of the source book text so we wont polute it.
	var sourceText = createCopy(sourceFinal, sourceText);
	
	//var sourceText = sourceFinal;
	var plainText = plainFinal;
	
	var usedArr = [];
	var encArr = [];
	for(var i = 0; i < plainText.length; i++){
	  var plainLetter = plainText[i];
	  for(var j = 0; j < sourceText.length; j++){
	    var sourceLetter = sourceText[j];
	    if(sourceLetter === plainLetter){
	      encArr.push(j);
	      delete sourceText[j];
	      break;
	    }else if( j === sourceText.length-1){ 
				for(var k = 0; k < sourceFinal.length; k++){
					if(sourceFinal[k] === plainLetter){
						encArr.push(k);
						break;
					}
		   	}
	 	 }
		}
	}
	return encArr.toString();

}

console.log(encrypt(textToEncrypt,textForSource));
