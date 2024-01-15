const typingTextElement = document.getElementById('contTypingText');
const text = 'Contacts';
let index = 0;

function typeText() {
  typingTextElement.textContent = text.substring(0, index);

  if (index >= text.length) {
    clearInterval(typingInterval);
  } else {
    index++;
  }
}

const typingInterval = setInterval(typeText, 200);