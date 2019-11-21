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
                li.classList.add(`${li.innerText}`)
            }
        });

    };

}