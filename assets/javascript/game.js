var words = ["attractive", "dusty", "kind", "quirky", "dumb","intelligent", "humorous", "caring", "loving", "gregarious", "exhuberant", "outgoing", "loud","demonstrative", "renaissance","assertive", "fashionsita", "chubby", "leader", "aries","coppertone"];
var letters = ["a", "b", "c", "d", "e","f","g", "h", "i", "j", "k", "l", "m","n", "o", "p","q","r", "s", "t","u", "v", "w", "x", "y", "z",];
var score =
var wordPick = words[Math.floor(Math.random() * words.length)];
 // when the word first appears it wil be blank using the answerLength. then the for loop will show dashes for the letters length
var answerLength = [];
for (var i=0; i < wordPick.length; i++) {answerLength[i] = "_";
}
var remainingLetters = wordPick.length

// show player progress 
while (remainingLetters > 0 ){alert (answerLength.join(" "));
// document.onekeyup = function(event) {var letter = string.fromCharCode(event.keycode).toLowerCase();alert (letter);}  This needs to be adjusted to document write  either guess or 
var guess = prompt("What do you know about Nki? Guess a letter!");
if (guess === letters) {prompt("Please choose a single lower-case letter.")
}//
 //valid guess
 else {for (var j = 0; j < wordPick.length; j++) {if (wordPick[j]===guess) {
answerArray [j] = guess; remainingLetters--;
 }}}}
 //I want the guesses that are not right to print is a used section: for (let g=0; g<letters.length;g++) {document.write(letters)}  