'use strict';

let cellLabel = "";

const container = document.querySelector("#container");

// set up a 16 x 16 grid of square divs

for (let row = 0; row <= 15; row++){
    
    for (let column = 0; column <= 15; column++){

        cellLabel = "r" + row + "c" + column; // label will be r0c0, r0c1, etc.

        const cell = document.createElement('div');
            cell.setAttribute("id", cellLabel);
            cell.classList.add("cell");
            
            container.appendChild(cell);
    }

}