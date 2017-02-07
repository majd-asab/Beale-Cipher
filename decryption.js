//****modules
var fs = require("fs");


//****Checking for CLA
if(process.argv.length < 3){
  console.log("Usage: node " + __filename + " SourceText + PlainText");
  process.exit(-1);
}

var textForSource = process.argv[2];
var textToDecrypt = process.argv[3];



function decrypt(cipherText,sourceText){
	var source = fs.readFileSync(textForSource,'UTF8');

	//**** Split the words by whitespace and throw it in array****//
	var sourceWords = source.split(" ");
	var sourceFinal = []
	for(var i = 0; i < sourceWords.length; i++){
	  var sourceLetter = sourceWords[i].split('')[0];
	  sourceFinal.push(sourceLetter);
	}
	 //console.log(sourceFinal);

	//**** Reading the text to decypt 
	var cipherText = fs.readFileSync(textToDecrypt, 'UTF8');
	var cipherLetter = cipherText.replace(/[^a-zA-Z0-9]/g,'');
	var cipherFinal = cipherLetter.split("");




	sourceText = sourceFinal;
	var decArr = [];
	var numbersSplit = cipherText.split(',');

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

