function displayAffirmation(response) {
  new Typewriter("#affirmation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function generateAffirmation(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "bete3d4bc84ffa94be264oaebfb7012c";
  let context =
    "You are a positive affirmation expert and love to write short yet meaningful affirmations. Your mission is to generate 1 line affirmation in basic HTML format with quotation marks at the beginning and end. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate a positive affirmation about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let affirmationElement = document.querySelector("#affirmation");
  affirmationElement.classList.remove("hidden");
  affirmationElement.innerHTML = `<div class="generating">⏳ Generating your Daily Affirmation about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayAffirmation);
}

let affirmationFormElement = document.querySelector(
  "#affirmation-generator-form"
);
affirmationFormElement.addEventListener("submit", generateAffirmation);
