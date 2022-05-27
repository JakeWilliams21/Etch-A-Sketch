const gridLabel = document.querySelector('h3')
const board = document.querySelector('.board');
const apply = document.querySelector('.apply')
const resetButton = document.querySelector('.reset')
const randomButton = document.querySelector('.random')

randomButton.addEventListener('click', () => {
    randomColor();
})

resetButton.addEventListener('click', () => {
    wipe();
})

apply.addEventListener('click', size = () => {
    const dimension = document.querySelector('input')
    console.log(dimension.value);
    reset();
    createBoard(dimension.value);
    
})

const createBoard = (gridSize) => {

const tileAmount = gridSize * gridSize
    gridLabel.textContent = `${gridSize} x ${gridSize}`
    board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    board.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`
    board.style.border = 'solid'


for (i = 0; i < tileAmount; i++) {
    let tile = document.createElement('div')
        tile.id = i
        tile.classList.add('tile')
        board.appendChild(tile);
}
const tiles = document.querySelectorAll('.tile')


for (i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('mouseenter', e => {
        tiles[e.target.id].style.backgroundColor = 'black'
    })
}

}

const randomColor = () => {
    const tiles = document.querySelectorAll('.tile')

    for (i = 0; i < tiles.length; i++) {
        const x = Math.floor(Math.random() * 256)
        const y = Math.floor(Math.random() * 256)
        const z = Math.floor(Math.random() * 256)
        const bgColor = `rgb(${x},${y},${z})`
        console.log(bgColor);
        tiles[i].addEventListener('mouseenter', e => {
            tiles[e.target.id].style.backgroundColor = bgColor
        })
    }
}

const wipe = () => {
    const tiles = document.querySelectorAll('.tile')

    for(i = 0; i < tiles.length; i++) {
        tiles[i].style.backgroundColor = 'white'
    }
}

const reset = () => {
    const tiles = document.querySelectorAll('.tile')
    
for (i = 0; i < tiles.length; i++) {
    board.removeChild(tiles[i])
}
    
}

createBoard(16);