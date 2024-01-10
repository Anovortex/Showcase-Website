const typingText = document.getElementById("typingText");
const words = ["Welcome!"];
let wordIndex = 0;
let letterIndex = 0;

function typeWords() {
   if (letterIndex < words[wordIndex].length) {
      typingText.innerText += words[wordIndex].charAt(letterIndex);
      letterIndex++;
      setTimeout(typeWords, 200); 
   } 
}

typeWords();