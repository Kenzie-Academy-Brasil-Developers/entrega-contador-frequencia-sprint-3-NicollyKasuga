const button = document.getElementById("countButton");
const letterCounts = {};
const wordCounts = {};
button.addEventListener("click", function () {
  let typedText = document.getElementById("textInput").value;
  typedText = typedText.toLowerCase();
  typedText = typedText.replace(/[^a-z'\s]+/g, "");
  let currentLetter = "";
  for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    if (letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1;
    } else {
      letterCounts[currentLetter]++;
    }
  }

  for (let letter in letterCounts) {
    const span = document.createElement("span");
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent;
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span);
  }

  let words = typedText.split(/\s/);
  for (let i = 0; i < words.length; i++) {
    const element = words[i];
    if (wordCounts[element] === undefined) {
      wordCounts[element] = 1;
    } else {
      wordCounts[element]++;
    }
  }

  for (let woords in wordCounts) {
    const span = document.createElement("span");
    const textContent = `"${woords}": ${wordCounts[woords]}, `;
    span.innerText = textContent;
    const wordes = document.getElementById("wordsDiv");
    wordes.appendChild(span);
  }
});
