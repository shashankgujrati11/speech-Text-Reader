# speech-Text-Reader
Speech Text Reader 🔊
A simple, interactive web application that converts written text into spoken audio using the browser's Web Speech API. Users can click predefined phrases to hear them spoken or enter custom text and select an available voice.
✨ Features
- Text-to-speech: Reads text aloud using the browser's speech synthesis functionality.
- Predefined phrases: Click phrases such as “I'm Hungry,” “I'm Tired,” “I'm Happy,” and “I Want To Go Home” to hear them spoken.
- Custom text input: Enter any text in the text box and press Read Text.
- Voice selection: Choose from the voices made available by the browser and operating system.
- Responsive layout: Phrase cards adjust to different screen sizes.
- Interactive interface: Includes a toggleable text box and visual feedback when a phrase is selected.
🛠️ Technologies Used
- HTML5 — page structure
- CSS3 — styling, layout, transitions, and responsive design
- JavaScript — event handling and speech synthesis
- Web Speech API (SpeechSynthesis) — text-to-speech functionality
- Font Awesome 5 — interface icon
- Google Fonts — Open Sans Condensed typography
📁 Project Structure
speech-text-reader/
├── index.html
├── style.css
├── script.js
└── README.md
🚀 Getting Started
No package installation or build step is required.
Option 1: Run locally
1. Download or clone this repository.
2. Keep index.html, style.css, and script.js in the same directory.
3. Open index.html in a modern browser.
4. Allow audio playback if your browser asks for permission.
Option 2: Clone with Git
git clone <YOUR_REPOSITORY_URL>
cd speech-text-reader
Then open index.html in your browser.
💡 How to Use
1. Open the application.
2. Speak a predefined phrase: Click any phrase card on the page.
3. Enter custom text: Click Toggle Text Box.
4. Select a voice from the Choose Voice dropdown.
5. Type your text into the input area.
6. Click Read Text to hear it spoken.
7. Use the close icon to hide the text box.
🌐 Browser Compatibility
The application relies on the browser's Web Speech API. Use a modern browser that supports window.speechSynthesis and SpeechSynthesisUtterance. Available voices depend on the browser, operating system, and installed speech services. Voice availability and behavior may vary between devices.
📌 Implementation Notes
- The phrase cards are generated from a predefined array in script.js.
- The voice dropdown is populated using the voices returned by speechSynthesis.getVoices().
- The application listens for the voiceschanged event because voices may load asynchronously.
- The selected voice is assigned to a SpeechSynthesisUtterance before speech is played.
- The layout uses CSS Grid media queries to display more phrase cards on wider screens.
Built with HTML, CSS, and JavaScript.
