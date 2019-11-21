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
    { phrase: `Use the Force, Luke` },
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
    }

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
        this.activePhrase = randomPhrase
    }

}

 