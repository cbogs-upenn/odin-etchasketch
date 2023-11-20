'use strict';

let totalRows = 32;
let totalColumns = totalRows; //separate them out in case we decide to implement different x & y values
let cellSize = 0;

let cellLabel = "";
let rowLabel = "";

const container = document.querySelector("#container");
const resizeButton = document.querySelector("#btn");

resizeButton.addEventListener('click', resize);

createGrid(totalRows); // kick off this shindig


function createGrid(size) {

    // set up a size x size grid of square divs
    // I am at a loss for why it's going column then row but I'm going with it 'cause it's working

    const grid = document.createElement('div');
        grid.setAttribute("id", "grid");
        container.appendChild(grid);    

    for (let row = 1; row <= size; row++) {

        rowLabel = "c" + row;  // label will be c1, c2, etc.

        const cellRow = document.createElement('div');
        cellRow.setAttribute("id", rowLabel);
        cellRow.classList.add("row");

        grid.appendChild(cellRow);

        for (let column = 1; column <= size; column++) {

            cellSize = (960 / totalRows) + "px"; //div is 960px
            cellLabel = "c" + row + "r" + column; // label will be c1r1, c1r1, etc. 

            const cell = document.createElement('div');
            cell.setAttribute("id", cellLabel);
            cell.classList.add("cell");
            cell.style.height = cellSize;
            cell.style.width = cellSize;
            cell.addEventListener("mouseenter", () => {
                cell.classList.toggle('active');
            });

            cellRow.appendChild(cell);

        }

    }
}


function resize() {

    let newSize = prompt("How many squares per side?", "16");
    if (newSize > 100) {
        newSize = 100;  //keep this under control please!
    }

    //get rid of old grid

    grid.remove();

    //and make a
  
    createGrid(newSize);

}
