/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.getElementById('overlay');

const possiblePhrases = [
    { phrase: `Impressive` },
    { phrase: `Do or do not there is no try` },
    { phrase: `Its a trap` },
    { phrase: `Never tell me the odds` },
    { phrase: `Stay on target` },
    { phrase: `Use the Force Luke` },
    { phrase: `No I am your father` },
    { phrase: `I have a bad feeling about this` },
    { phrase: `Whos scruffy looking` },
    { phrase: `Let the Wookie win` }
]

/**
* Creates new game class
*/
 
class Game {

    constructor() {
        this.missed = 0;
        this.phrases = [];
        this.activePhrase = null
    };

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */

    createPhrases() {
        possiblePhrases.forEach((phrase) => this.phrases.push(phrase))
        return this.phrases
    };

    /**
    * Selects random phrase from phrases property
    * '@return {Object} Phrase object chosen to be used
    */

    getRandomPhrase() {
        this.createPhrases()
        let selectedPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return selectedPhrase
    };

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */

    startGame() {
        overlay.style.display = "none"
        const randomPhrase = game.getRandomPhrase()
        const phrase = new Phrase(randomPhrase.phrase);
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase
        
        console.log(phrase)
    };

    /**
    * Handles onscreen keyboard button clicks
    * @param {HTMLButtonElement} button - The clicked button element
    */

    handleInteraction(button) {
        const letter = button.innerText.toLowerCase()
        button.disabled = true
        if (this.activePhrase.checkLetter(letter) === letter) {
            button.classList.add('chosen')
            this.activePhrase.showMatchedLetter(letter)
            if (this.checkForWin()) {
                this.gameOver(true)
            }
        } else {
            button.classList.add('wrong')
            this.removeLife()
        }
    }

    /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't won
    */

    checkForWin() {
        const letters = document.getElementsByClassName('letter')
        const lettersShown = document.getElementsByClassName('letter show')

        if (letters.length === lettersShown.length) {
            return true
        } else {
            return false
        }

    };

    /**
    * Increase the value of the missed property
    * Removes a life from the score board
    * Checks if play has remaining livess and ends game if player is out
    */

    removeLife() {
        let scoreboardOL = document.getElementById("scoreboard").children[0]
        let hearts = scoreboardOL.querySelectorAll('.tries')
        this.missed += 1;
        hearts[this.missed - 1].style.display = 'none'
        if (this.missed === 5) {
            this.gameOver(false)
        }
    }

    /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the use won the game
    */

    gameOver(gameWon) {

        const gameOverMessage = document.getElementById("game-over-message")
        const resetBtn = document.getElementById('btn__reset')
        
        if (gameWon) {
            gameOverMessage.innerText = "Congratulations, you won!"
            overlay.classList.add('win')
        } else {
            gameOverMessage.innerText = "Sorry, you ran out of lives."
            overlay.classList.add('lose') 
        }
        resetBtn.innerText = "Play again?"
        overlay.style.display = "flex"

        // RESET GAME

        const phraseSectionUL = document.getElementById('phrase').children[0];
        const keys = document.querySelectorAll('.key')
        const hearts = document.querySelectorAll('.tries')
        phraseSectionUL.innerHTML = ""
        keys.forEach((key) => {
            key.disabled = false
            key.classList.remove('wrong')
            key.classList.remove('chosen')
        })

        hearts.forEach((heart) => {
            heart.style.display = 'inline-block'
        })

    }

}

 