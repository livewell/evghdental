//Practice jQuery File

$(function() {
	//
});

function myMax(listOfNumbers) {
	var max = 0;

	for(var i=0; i < listOfNumbers.length; i++){
		if (listOfNumbers[i] > max){
			max = listOfNumbers[i];
		}
	}

	return max;
}

function vowelCount(word) {
	var vowels = 0;
	var isVowel = function(c){
		if (c === 'a' || c === 'o' || c === 'u' || c === 'i' || c === 'e'){
			return true;
		}
		else 
			return false;
	}

	for (var i=0 ; i < word.length; i++){
		if (isVowel(word[i])) {
			vowels++;
		}
	}

	return vowels; 

}

function reverse(word) {
	var reversed = "";

	for (var i = word.length-1; i >= 0; i--) {
		reversed += word[i];
	}

	return reversed;
}