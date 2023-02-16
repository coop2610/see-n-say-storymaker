// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var newSentence;
var buttonNoun = document.querySelector('button#noun');
var buttonVerb = document.querySelector('button#verb');
var buttonAdjective = document.querySelector('button#adjective');
var buttonNounTwo = document.querySelector('button#noun2');
var buttonPlaces = document.querySelector('button#places');
var buttonAll = document.querySelector('button#all');
var buttonSpeakNow = document.querySelector('button#speak');

var randomNumber = Math.floor(Math.random() * 7) - 1;
 
//below is original
//var speakButton = document.querySelector('button');

/* Arrays
---------------------------------------------------- */
var nounArray = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var verbArray = ['sat on', 'ate', 'danced with', 'saw', 'does\'t like', 'kissed'];
var adjectiveArray = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var nounTwoArray = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var placesArray = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */

buttonNoun.onclick = function(){
	var noun = nounArray[randomNumber];
	newSentence = noun;
	speakNow(noun);
	console.log(newSentence);
}

buttonVerb.onclick = function(){
	var verb = verbArray[randomNumber];
	newSentence =+ ` ${verb}`;
	speakNow(verb);
	console.log(newSentence);
}

buttonAdjective.onclick = function(){
	var adjective = adjectiveArray[randomNumber];
	newSentence =+ ` ${adjective}`;
	speakNow(adjective);
	console.log(newSentence);
}

buttonNounTwo.onclick = function(){
	var nounTwo = nounTwoArray[randomNumber];
	newSentence =+ ` ${nounTwo}`;
	speakNow(nounTwo);
	console.log(newSentence);
}

buttonPlaces.onclick = function(){
	var places = placesArray[randomNumber];
	newSentence =+ ` ${places}`;
	speakNow(places);
}

buttonAll.onclick = function(){
	var noun = nounArray[randomNumber];
	var verb = verbArray[randomNumber];
	var adjective = adjectiveArray[randomNumber];
	var nounTwo = nounTwoArray[randomNumber];
	var places = placesArray[randomNumber];
	newSentence = `${noun} ${verb} ${adjective} ${nounTwo} ${places}`;
	
	console.log(newSentence);
}
buttonSpeakNow.onclick = function(){
	speakNow(newSentence);
}
/*
//below is original
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
*/
