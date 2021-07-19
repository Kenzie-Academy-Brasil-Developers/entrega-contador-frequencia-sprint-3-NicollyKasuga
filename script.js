const button = document.getElementById("countButton");
const letterCounts = {};
const wordCounts = {}
button.addEventListener('click', function(){
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    words = typedText.split(/\s/);
    let  currentLetter= ""
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        console.log(currentLetter)
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
         } else { 
            letterCounts[currentLetter] ++; 
         }
         console.log(letterCounts)
         console.log(words)
    
    }
    for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
        
    }  
})
