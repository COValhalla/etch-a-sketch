let gridSize;
const btn = document.querySelector('button').addEventListener('click', function () {
    if (gridSize != undefined) {
        window.location.reload();
    }else {
        gridSize = prompt('Enter the number of squares per side. A grid will automatically be generated.');
        while (gridSize >= 100) {
            gridSize = prompt('Only enter a value less than 100');
        }
    }

    //Update CSS grid based on user input
    var root = document.querySelector(':root');
    root.style.setProperty('--grid', `${gridSize}`);

    //Create all of the grid squares
    const grid = document.querySelector('div');
    for (let i = 1; i <= (gridSize * gridSize); i++) {
        const div = document.createElement('div');
        div.style.border = "thick solid #D3D3D3";
        div.textContent = `o`;
        div.setAttribute('id', `box`);
        grid.appendChild(div);
    }

    //Change color of each grid item when hover over it
    const gridAll = document.querySelectorAll('#box');
    gridAll.forEach((div) => {
        div.addEventListener('mouseenter', function (hoverBox) {
            hoverBox.target.style.backgroundColor = 'red';
        });
    });

    document.querySelector('button').textContent = 'Reset Grid'

});

//Todo:
//remove text from each box



