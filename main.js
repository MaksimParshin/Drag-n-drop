const container = document.querySelector('#container')
const block = document.querySelector('#block')

let isDragging = false

let startPositionX = null;
let startPositionY = null;

let blockPositionX = 100;
let blockPositionY = 100;

let diffX = null;
let diffY = null;

block.style.top = `${blockPositionY}px`
block.style.left = `${blockPositionX}px`

const mouseDownHandler = (e) => {
    if (e.target === block) {
        isDragging = true
        startPositionX = e.pageX
        startPositionY = e.pageY
    }
}

const mouseUpHandler = (e) => {
    if (isDragging) {
        isDragging = false
        blockPositionY -= diffY
        blockPositionX -= diffX
    }
}

const mouseMoveHandler = (e) => {
    if (isDragging) {
        diffX = startPositionX - e.pageX;
        diffY = startPositionY - e.pageY;
        
        let newBlockPositionY = blockPositionY - diffY
        let newBlockPositionX = blockPositionX - diffX
        
        if (newBlockPositionY + block.offsetHeight > container.offsetHeight) {
            newBlockPositionY = container.offsetHeight - block.offsetHeight
        } else if (newBlockPositionY < 0) {
            newBlockPositionY = 0
        } 
        if (newBlockPositionX + block.offsetWidth > container.offsetWidth) {
            newBlockPositionX = container.offsetWidth - block.offsetWidth
        } else if (newBlockPositionX < 0) {
            newBlockPositionX = 0
        }

        block.style.top = `${newBlockPositionY}px`
        block.style.left = `${newBlockPositionX}px`
    }
}

window.addEventListener('mousedown', mouseDownHandler)
window.addEventListener('mouseup', mouseUpHandler)
window.addEventListener('mousemove', mouseMoveHandler)
