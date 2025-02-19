const container = document.querySelector('.container');
let size = 16;

const gridContainer = document.createElement('div');
gridContainer.id = 'grid-container';
container.appendChild(gridContainer);

function createGrid(size){
    gridContainer.innerHTML = '';

    //to determine the size of each square and make the grid
    const squareSize = 600 / size;
    const gridSize = size * size;

    for (let i = 0; i < gridSize; i++) {
        const createCell = document.createElement('div');
        createCell.classList.add('grid');
        //create a grid with the size of the square
        createCell.style.width = `${squareSize}px`;
        createCell.style.height = `${squareSize}px`;
        createCell.style.border = '.1px solid #ccc';
        createCell.style.boxSizing = 'border-box';
        createCell.style.opacity = '0.1';
        //will store the default opacity and change it when hovered
        createCell.addEventListener('mouseenter', () => {
            //get the current opacity and transform it to a number
            let opacity = parseFloat(createCell.style.opacity);
            if (opacity < 1) {
                opacity += 0.1;
                createCell.style.opacity = opacity.toString();
            } 
        });
        gridContainer.appendChild(createCell);
    }
    }

createGrid(size);

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const newSize = prompt('Enter the number of squares per side (max 100):');
    if (newSize && newSize > 0 && newSize <= 100) {
        size = newSize;
        createGrid(size);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});