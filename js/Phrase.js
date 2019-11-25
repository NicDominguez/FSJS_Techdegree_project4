/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const phraseSectionUL = document.getElementById('phrase').children[0];

class Phrase {

    constructor(phrase) {
        this.phrase = phrase
    }

    /**
    * Display phrase on game board
    */

    addPhraseToDisplay() {

        for (let i = 0; i < this.phrase.length; i++) {
            let listItem = document.createElement('li')
            listItem.innerText = this.phrase.charAt(i)
            phraseSectionUL.append(listItem)
        }

        Array.prototype.slice.call(phraseSectionUL.children).forEach( (li) => {
            if (li.innerText === "") {
                li.classList.add("space");
            } else {
                li.classList.add("hide");
                li.classList.add("letter");
                li.classList.add(`${li.innerText.toLowerCase()}`)
            }
        });

    };

    /**
    * Checks if passed letter is in phrase
    * @param {string} letter - Letter to check 
    */

    checkLetter(letter) {
        for (let i = 0; i < this.phrase.length; i++) {
            let char = this.phrase.charAt(i).toLowerCase();
            if (letter === char) {
                return letter
            }
        }
    }

    /**
    * Displays passsed letter on screen after a match is found
    * @param {string} letter - Letter to display
    */

    showMatchedLetter(letter) {
        Array.prototype.slice.call(phraseSectionUL.children).forEach((li) => {
            if (li.classList.contains(letter)) {
                li.classList.remove("hide")
                li.classList.add("show")
            }
        })
    }
}