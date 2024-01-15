const typingTextElement = document.getElementById('testTypingText');
const text = 'Testimonials';
let index = 0;

function typeText() {
  typingTextElement.textContent = text.substring(0, index);

  if (index >= text.length) {
    clearInterval(typingInterval);
  } else {
    index++;
  }
}

const typingInterval = setInterval(typeText, 150);

$(document).ready(function(){
  $(".upBtn").click(function(){
    $(".hidden").slideToggle();

    if ($(this).text() === "Hide") {
      $(this).text("Show");
    } else {
      $(this).text("Hide");
    }

    const position = $(".hidden").offset().top;
    $("html, body").animate({ scrollTop: position }, "slow");

  });
});