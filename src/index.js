function generateAffirmation(event) {
  event.preventDefault();

  new Typewriter("#affirmation", {
    strings: ["I love myself just as I am today."],
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

let affirmationFormElement = document.querySelector(
  "#affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
