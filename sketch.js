const container = document.querySelector(".sketch_container");
let num;

// Create div with a background color.
function outputGrid(num) {
    const size = num * num;
    for (let i = 0; i < size; i++) {
        const cube = document.createElement('div');
        cube.setAttribute("id", "cube");
        cube.setAttribute("class", i);
        cube.setAttribute("style", "background-color: #f2f2f2; border-style: solid; border-width: 1px; border-color: #fcfafa;");
        // Insert by appendChild,
        container.appendChild(cube);
        console.log(cube);
    };
    // Add style to container to display cubes in a square.
    container.setAttribute("style", `grid-template-columns: repeat(${num}, auto);`);
};

// Hover and change bg-color
function sketch() {
    // Select all cubes
    const blocks = Array.from(document.querySelectorAll("#cube"));
    // add eventlistener to each block
    blocks.forEach(block => {
        block.addEventListener("mouseover", () => {
            block.style.backgroundColor = "blue";
        });
    });
};

// Click to get the next cube size
function nextCube() {
    num = Number(window.prompt("Please enter number you like!"));
    // Give error if necessary
    if (num <= 0 || !num) {
        alert("Please input valid number.");
        num = 16;
    };
    // Clear the previous cubes
    const blocks = Array.from(document.querySelectorAll("#cube"));
    blocks.forEach(block => {
        container.removeChild(block);
    });
    outputGrid(num);
};

// Load the page and set default grid 16* 16
window.addEventListener("DOMContentLoaded", () => {
    // Select all cubes
    num = 16;
    outputGrid(num);
    sketch();
});

const clear = document.querySelector(".clear_btn");
clear.addEventListener("click", (num) => {
    // clearPrevious();
    nextCube();
    sketch();
});