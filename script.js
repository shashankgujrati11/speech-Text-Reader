const main = document.querySelector("main");
const voicesSelect = document.getElementById("voices");
const textarea = document.getElementById("text");
const readButton = document.getElementById("read");
const toggleButton = document.getElementById("toggle");
const closeButton = document.getElementById("close");
const textBox = document.getElementById("text-box");

const data = [
  {
    text: "I'm Thirsty",
  },
  {
    text: "I'm Hungry",
  },
  {
    text: "I'm Tired",
  },
  {
    text: "I'm Hurt",
  },
  {
    text: "I'm Happy",
  },
  {
    text: "I'm Angry",
  },
  {
    text: "I'm Sad",
  },
  {
    text: "I'm Scared",
  },
  {
    text: "I Want To Go Outside",
  },
  {
    text: "I Want To Go Home",
  },
  {
    text: "I Want To Go To School",
  },
  {
    text: "I Want To Go To Grandmas",
  },
];

function createBox(item) {
  const box = document.createElement("div");
  const { text } = item;

  box.classList.add("box");

  box.innerHTML = `
    <p class="info">${text}</p>
  `;

  box.addEventListener("click", () => handleSpeech(text, box));

  main.appendChild(box);
}

data.forEach(createBox);

let voices = [];

function getVoices() {
  voices = speechSynthesis.getVoices();

  voicesSelect.innerHTML = "";

  voices.forEach((voice) => {
    const option = document.createElement("option");

    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`;

    voicesSelect.appendChild(option);
  });
}

function handleSpeech(text, box) {
  setTextMessage(text);
  speakText();

  box.classList.add("active");

  setTimeout(() => {
    box.classList.remove("active");
  }, 800);
}

const message = new SpeechSynthesisUtterance();

function setTextMessage(text) {
  message.text = text;
}

function speakText() {
  speechSynthesis.speak(message);
}

function setVoice(e) {
  message.voice = voices.find(
    (voice) => voice.name === e.target.value
  );
}

// Event Listeners

toggleButton.addEventListener("click", () => {
  textBox.classList.toggle("show");
});

closeButton.addEventListener("click", () => {
  textBox.classList.remove("show");
});

speechSynthesis.addEventListener("voiceschanged", getVoices);

voicesSelect.addEventListener("change", setVoice);

readButton.addEventListener("click", () => {
  setTextMessage(textarea.value);
  speakText();
});

getVoices();