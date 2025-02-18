const container = document.querySelector('.container');
let size = 16;

const gridContainer = document.createElement('div');
gridContainer.id = 'grid-container';
container.appendChild(gridContainer);

function createGrid(size){
    gridContainer.innerHTML = '';

    const squareSize = (500 - (size - 1) * 1) / size;

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const createCell = document.createElement('div');
            createCell.classList.add('grid');
            createCell.style.width = `${squareSize}px`;
            createCell.style.height = `${squareSize}px`;
            createCell.addEventListener('mouseenter', () => {
                createCell.style.opacity = '0.8'; 
            });
            gridContainer.appendChild(createCell);
      }
}};

createGrid(size);