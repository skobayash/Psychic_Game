
    var computerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var wins = 0;
    var losses = 0;
    var lives = 10;
    var guessed = [];

         // Computer pulls a random letter from alphabet array
    var compChoice = computerAlphabet[Math.floor(Math.random() * computerAlphabet.length)];
    console.log(compChoice);

  // When a key is pressed    
    document.onkeyup = function (event) {
    
        console.log(compChoice);

        // If user presses a key, save it to userGuess
        var userGuess = event.key;
            // pastGuess.textContent = userGuess;
        
        //add any key pressed into array
        guessed.push(userGuess);

        // If user presses letter
            // and letter has not been pressed before
            // continue with below
            // if (guessed.indexOf(userGuess) < 0 && computerAlphabet.indexOf(userGuess) >= 0) {
        
            //  if (guessed.indexOf(userGuess) < -1) {
                if (userGuess === compChoice) {   // If users guess = computers guess
                    wins++;        // Add 1 to wins
                    numWins.textContent = wins; // Update html to reflect wins
                    guessed = [];   // Reset guessed array
                    pastGuess.textContent = guessed;   // Reset html (past guess)
                    lives = 10;
                    left.textContent = lives; // Reset html (left) to 10
                    compChoice = computerAlphabet[Math.floor(Math.random() * computerAlphabet.length)];            
                    alert("You won. You must be a 'real' 'Psychic'");
                }

                else if (userGuess !== compChoice) { // If users guess != computers guess
                    lives--;    // subtract from lives (lives)
                    left.textContent = lives;   // update html to reflect loss (left)
                    pastGuess.textContent = guessed; // update html to log array addition (pastGuess)
                }
          

            
            
                if (lives === 0) {
                    alert("I guess you're not psychic but maybe you'd be a good psychic psyd-kick");
                    compChoice = computerAlphabet[Math.floor(Math.random() * computerAlphabet.length)];
                    losses++;
                    lives = 10;
                    left.textContent = lives;
                    guessed = [];
                    pastGuess.textContent = "guessed";
                    console.log(compChoice);
                } 
     }     