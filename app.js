const container = document.querySelector('.grid-container');
const nmbButton = document.querySelector('.nmbSq');

function createGrid(squareCount) {

      container.innerHTML = ''

        for (let i = 0; i < squareCount; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        cell.addEventListener('mouseenter', () => {
            cell.classList.add('hovered');
            cell.style.backgroundColor = 'blue';
          });
          
          cell.addEventListener('mouseleave', () => {
            cell.classList.remove('hovered');
          });
        container.appendChild(cell);
        }
}
        
        nmbButton.addEventListener('click', () => {
          const input = prompt('How many squares?');
  const squareCount = parseInt(input);

  if (!isNaN(squareCount) && squareCount > 0) {
    createGrid(squareCount);
  } else {
    alert('Please enter a valid number.');
  }
});
