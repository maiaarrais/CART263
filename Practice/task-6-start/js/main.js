/* Modifications we did:
1. creative word selection: Instead of taking the first matching word, it randomizes it for more variety.
2. word transformations: converts the words 20% of the time to uppercase letters, 20% of the time surrounds the word with asterisks and the rest stays as is.
3. random/occasional poetic transitions to add some variety 
4. added colors and titles
*/

window.onload = run;

function run() {
  // Color palette for visual enhancement
  const colorPalette = [
    '#FF6B6B', 
    '#4ECDC4', 
    '#45B7D1', 
    '#FDCB6E', 
    '#6C5CE7', 
    '#A8E6CF', 
    '#FF8ED4'  
  ];

  document.querySelector("#stepOneButton").addEventListener("click", fetchText);

  // Reset functionality
  document.querySelector("#resetButton").addEventListener("click", resetPoem);

  function resetPoem() {
    // Reset all elements to initial state
    document.querySelector("#stepOneButton").style.display = 'block';
    document.querySelector("#inputDiv").style.display = 'none';
    document.querySelector("#rainbow_text").textContent = '';
    document.querySelector("#phrase").value = '';
    document.querySelector("#output").textContent = '';
    document.querySelector("#output").style.display = 'none';
  }

  /****** PART A:: FETCH */  
  async function fetchText() {
    console.log("in fetch");
    try {
      // Fetch rainbow.txt
      const response = await fetch('files/rainbow.txt');
      const raw_rainbow_text = await response.text();

      // Creative enhancement: title generator
      const whimsicalTitles = [
        "Hush, just read",
        "CART 263 Nightmares",
        "Echoes of Silence",
        "Crying during finals",
        "It's tough out here"
      ];

      // Hide stepOneButton
      document.querySelector("#stepOneButton").style.display = 'none';

      // Display inputDiv
      document.querySelector("#inputDiv").style.display = 'block';

      // Display fetched text with random styling
      const rainbowTextElement = document.querySelector("#rainbow_text");
      rainbowTextElement.textContent = raw_rainbow_text;
      rainbowTextElement.style.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];

      // Add a randomly selected whimsical title
      const titleElement = document.createElement('h2');
      titleElement.textContent = whimsicalTitles[Math.floor(Math.random() * whimsicalTitles.length)];
      titleElement.style.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      titleElement.style.textAlign = 'center';
      titleElement.style.fontStyle = 'italic';
      rainbowTextElement.parentNode.insertBefore(titleElement, rainbowTextElement);

      // Run Part B
      runPartB(raw_rainbow_text);
    } catch (e) {
      console.error("Error fetching text:", e);
    }
  }

  /****** PART B:: TEXT PROCESSING  */
  function runPartB(originalRainBowText) {
    document.querySelector("#produce-poem").addEventListener("click", producePoem);

    function producePoem() {
      // Get user input phrase
      const phraseInput = document.querySelector("#phrase").value;

      // Validate input
      if (!phraseInput.trim()) {
        alert("Please enter a phrase!");
        return;
      }

      // Split phrase and rainbow text
      const phrase_as_array = phraseInput.split(/[ .!?\n]+/);
      const rainbow_tokens = originalRainBowText.split(/[ .!?\n]+/);

      // Run Part C
      runPartC(rainbow_tokens, phrase_as_array);
    }
  }

  /****** PART C:: POEM CREATION  */
  function runPartC(rainbow_words, seed_phrase_array) {
    const poeticTransitions = [
      "...and then...",
      "suddenly,",
      "whispered,",
      "thank you, next",
      "a few hundred years later"
    ];

    // Create poem 
    let poem_sentence = '';

    for (let wordIndex = 0; wordIndex < seed_phrase_array.length; wordIndex++) {
      let word = seed_phrase_array[wordIndex];
      
      // Occasional transition
      if (Math.random() < 0.3 && poem_sentence.length > 0) {
        poem_sentence += poeticTransitions[Math.floor(Math.random() * poeticTransitions.length)] + ' ';
      }

      // Matching word logic
      let foundWords = [];

      // Iterate through characters of the current word
      for (let i = 0; i < word.length; i++) {
        // Find words in rainbow_words that match the character at this position
        const matchingWords = rainbow_words.filter(rainbowWord => 
          rainbowWord[i] && rainbowWord[i].toLowerCase() === word[i].toLowerCase()
        );

        // If multiple matches, choose randomly
        if (matchingWords.length > 0) {
          const selectedWord = matchingWords[Math.floor(Math.random() * matchingWords.length)];
          foundWords.push(selectedWord);
        }
      }

      // Add the matching word (with some randomness)
      if (foundWords.length > 0) {
        // Occasionally modify the word (e.g., add emphasis)
        let finalWord = foundWords[0];
        if (Math.random() < 0.2) {
          finalWord = finalWord.toUpperCase();
        } else if (Math.random() < 0.2) {
          finalWord = '*' + finalWord + '*';
        }
        
        poem_sentence += finalWord + ' ';
      }
    }

    // Trim any extra whitespace and add final flourish
    poem_sentence = poem_sentence.trim() + '.';

    // Display the generated poem with creative styling
    const outputElement = document.querySelector("#output");
    outputElement.textContent = poem_sentence;
    outputElement.style.display = 'block';
    outputElement.style.color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
    outputElement.style.fontStyle = 'italic';
    outputElement.style.textShadow = '1px 1px 2px rgba(0,0,0,0.1)';

    // Run Part D 
    runPartD(poem_sentence);
  }

  /****** PART D:: DISPLAY */
  function runPartD(poem_sentence) {
    // Additional creative touch: Word count and complexity analysis
    const wordCount = poem_sentence.split(/\s+/).length;
    const complexityScore = Math.floor(Math.random() * 10) + 1; // Random complexity 1-10

    console.log("Poem generated:", poem_sentence);
    console.log(`Poetic Metrics: Word Count: ${wordCount}`);
  }


   /****** PART E:: RESET  */
   function resetPoem() {
    // Reset stepOneButton to visible
    document.querySelector("#stepOneButton").style.display = 'block';

    // Hide input div
    document.querySelector("#inputDiv").style.display = 'none';

    // Clear rainbow text
    document.querySelector("#rainbow_text").textContent = '';

    // Clear any previous title
    const existingTitle = document.querySelector("#rainbow_text").previousElementSibling;
    if (existingTitle && existingTitle.tagName === 'H2') {
      existingTitle.remove();
    }

    // Clear phrase input
    document.querySelector("#phrase").value = '';

    // Hide and clear output
    const outputElement = document.querySelector("#output");
    outputElement.textContent = '';
    outputElement.style.display = 'none';

    // Remove any event listeners 
    const produceButton = document.querySelector("#produce-poem");
    const oldButton = produceButton.cloneNode(true);
    produceButton.parentNode.replaceChild(oldButton, produceButton);
  }
} //window onload


