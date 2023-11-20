'use strict';

let cellLabel = "";
let rowLabel = "";

const container = document.querySelector("#container");

// set up a 16 x 16 grid of square divs
// I am at a loss for why it's going column then row but I'm going with it 'cause it's working


for (let row = 0; row <= 15; row++){
    
    rowLabel = "c" + row;  // label will be c0, c1, etc.

    const cellRow = document.createElement('div');
            cellRow.setAttribute("id", rowLabel);
            cellRow.classList.add("row");
            
            container.appendChild(cellRow);
    
    for (let column = 0; column <= 15; column++){

        cellLabel = "c" + row + "r" + column; // label will be c0r0, c0r1, etc. 

        const cell = document.createElement('div');
            cell.setAttribute("id", cellLabel);
            cell.classList.add("cell");
            cell.addEventListener("mouseenter", () => {
                cell.classList.toggle('active');
            });
            
            cellRow.appendChild(cell);
        
    }

}
