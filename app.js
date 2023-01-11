let container = document.getElementById('pokemon')

const additionButtonElement = document.getElementById('next')

const substractionButtonElement = document.getElementById('previous')

container.innerHTML = '<img class="poke" src="https://tinyurl.com/ironhack-pokemons/1.svg">'

let count = 1

function render() {
    container.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg">`
}

additionButtonElement.onclick = function() {
    if (count <= 650) {
    count++
    render()
    }
}

substractionButtonElement.onclick = function() {
    if(count > 1) {
    count--
    render()
    }
}


