

// find location of click and add x or o
// determine player1 or player2
// keep score
// find a winner via 3 in a row

console.log('hey app.js here')

function addGamePiece(selectedElement) {
let newElement = document.createElement('h1')
newElement.innerHTML = 'x'
selectedElement.appendChild(newElement)
console.log('show clicked div', selectedElement)
}

if (player1 = 'x') {
  newElement.innerHTML = 'o'
} else {
  newElement.innerHTML = 'x'
}