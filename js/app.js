/*

	Assignment 1 | COMP1073-02 Client-Side JavaScript

	Group Members: 
	Abimbola Fasawe - 200472319
	Amanda Cooper - 200507894 

*/


/* ---------------------- Variables ---------------------- */
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
var printSentence = document.querySelector('p#sentence');

var randomNumber = Math.floor(Math.random() * 7) - 1;

/* ---------------------- Arrays ---------------------- */
var nounArray = ['The turkey', 'Mom', 'Dad', 'The dog', 'My teacher', 'The elephant', 'The cat'];
var verbArray = ['sat on', 'ate', 'danced with', 'saw', 'doesn\'t like', 'kissed'];
var adjectiveArray = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var nounTwoArray = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var placesArray = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

/* ---------------------- Speak Function ---------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* ---------------------- Event Listeners ---------------------- */
/*
	Button functions
		- select random index from corresponsing array
		- add to newSentence var
		- send to speakNow function

*/
buttonNoun.onclick = function(){
	var noun = nounArray[randomNumber];
	newSentence = noun;
	speakNow(noun);
}

buttonVerb.onclick = function(){
	var verb = verbArray[randomNumber];
	newSentence += ` ${verb}`;
	speakNow(verb);
}

buttonAdjective.onclick = function(){
	var adjective = adjectiveArray[randomNumber];
	newSentence += ` ${adjective}`;
	speakNow(adjective);
}

buttonNounTwo.onclick = function(){
	var nounTwo = nounTwoArray[randomNumber];
	newSentence += ` ${nounTwo}`;
	speakNow(nounTwo);
}

buttonPlaces.onclick = function(){
	var places = placesArray[randomNumber];
	newSentence += ` ${places}.`;
	speakNow(places);
}

buttonAll.onclick = function(){
	var noun = nounArray[randomNumber];
	var verb = verbArray[randomNumber];
	var adjective = adjectiveArray[randomNumber];
	var nounTwo = nounTwoArray[randomNumber];
	var places = placesArray[randomNumber];
	newSentence = `${noun} ${verb} ${adjective} ${nounTwo} ${places}.`;
}

buttonSpeakNow.onclick = function(){
	speakNow(newSentence);
	printSentence.textContent = newSentence;
}

