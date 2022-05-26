const container = document.querySelector('.container');



for (i = 0; i <  256; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.id = i
    container.appendChild(box)
}
const boxes = document.querySelectorAll('.box')

for (i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseenter', e => {
        boxes[e.target.id].style.backgroundColor = 'blue'
    })
}
