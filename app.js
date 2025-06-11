const container = document.querySelector('.grid-container');

        for (let i = 0; i < 1024; i++) {
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

const nmbButton = document.querySelector('.nmbSq');
        
        nmbButton.addEventListener('click', () => {
          prompt('How many squares?');
          
        });

