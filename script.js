let grid = 16
let gridOn = false;

function clearGrid(){
    const drawingBoard = document.querySelector('#drawingBoard');
    drawingBoard.innerHTML = '';
}

function toggleGrid(){
    const rowElements = document.querySelectorAll('.rowElement')
    if (gridOn === true) {
        gridOn = false
        rowElements.forEach(rowElement => {
            rowElement.style.border = 'none';
        })
    } else {
        gridOn = true
        rowElements.forEach(rowElement => {
            rowElement.style.border = '1px solid rgb(232, 232, 232)';
    })
}}

function resizeGrid(){
    let userInput = Number(prompt("How big do you want your grid to be? (up to 100)"));
    if (userInput === null || userInput === '') {
        grid = 16
    } else if (userInput > 100) {
        let userInput = Number(prompt("Please enter a number that is smaller or equal to 100."))
    } else {
        grid = userInput
    }
    clearGrid();
    createGrid();
}
function createGrid(){
    const drawingBoard = document.querySelector('#drawingBoard');
    for (let i = 0; i < grid; i++){

        const row = document.createElement('div');
        row.classList.add('row');
        row.style.height = `${480/grid}px`;
        drawingBoard.appendChild(row);

        for (let i = 0; i < grid; i++){
            const rowElement = document.createElement('div');
            rowElement.classList.add('rowElement');
            rowElement.style.width = `${480/grid}px`;
            rowElement.style.height = `${480/grid}px`;

            row.appendChild(rowElement);
        }
    }
}
let isClicked = false;
drawingBoard.addEventListener('mousedown', function () {
    isClicked = true;
});
drawingBoard.addEventListener('mouseup', function() {
    isClicked = false;
});
drawingBoard.addEventListener('mousemove', function(event) {
    if (isClicked) {
        const rowElement = event.target;
        if(rowElement.classList.contains('rowElement')){
            rowElement.classList.add('clicked')
        }
    }
})

function clearBoard(){
    clearGrid();
    createGrid();
}
