// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = '';
var buttonNoun = document.querySelector('button#noun');
var buttonVerb = document.querySelector('button#verb');
var buttonAdjective = document.querySelector('button#adjective');
var buttonNounTwo = document.querySelector('button#noun2');
var buttonPlaces = document.querySelector('button#places');
var buttonAll = document.querySelector('button#all');

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

var newSentence = [];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

// need a function to grab one value from each array
function fullSentence(){
	
}
// need a function for each array to grab value independently
/*function selectNoun(){
	newSentence = newSentence.push(noun);
}	var noun = nounArray[randomNumber];
*/

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak

buttonNoun.onclick = function(){
	var noun = nounArray[randomNumber];
	newSentence = newSentence.push(noun);
	speakNow(newSentence);
}

//below is original
speakButton.onclick = function() {
	speakNow(textToSpeak);
}
