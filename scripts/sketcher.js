document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);

    const sizeButton = document.querySelector(".size")

    

})

function createGrid(proportion) {
    const sketcher = document.querySelector(".sketcher");
    
    const SKETCHER = Math.pow(proportion,2);

    const SQUARE_SIZE = (100 / proportion);

    for(let i = 0; i < SKETCHER; i++) {
        const square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.width = `${SQUARE_SIZE}%`;
        square.style.height = `${SQUARE_SIZE}%`;
        square.style.boxSizing = "border-box";
        square.style.padding =  "1%";
        square.style.border = "1px solid black";
        sketcher.appendChild(square);
    }
    
    sketcher.childNodes.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.classList.add("black");
            }
        )
    })
}