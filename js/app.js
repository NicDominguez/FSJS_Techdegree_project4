/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = null
const resetBtn = document.getElementById('btn__reset')
const keyboard = document.getElementById('qwerty')

// EVENTS 

resetBtn.addEventListener('click', () => {
    game = new Game()
    game.startGame()
    /* console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`) */
})

keyboard.addEventListener('click', (e) => {
    key = e.target
    if (e.target.classList.contains('key')) {
        game.handleInteraction(e.target)
    }

})

document.addEventListener('keyup', (e) => {
    const key = e.key
    const letters = document.querySelectorAll('.key')

    letters.forEach( (letter) => {
        if (letter.innerText === key && letter.disabled !== true) {
            game.handleInteraction(letter)
        }
    })
})