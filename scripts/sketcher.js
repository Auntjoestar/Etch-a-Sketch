document.addEventListener("DOMContentLoaded", () => {
    createGrid(16);

    const sizeButton = document.querySelector(".size")

    sizeButton.addEventListener("click", () => {
        let height = 0;
        do {
            height = prompt("Choose the new height (1-100): ")
        } while(height < 1 || height > 101);
        createGrid(height);
    });
});

function createGrid(proportion) {
    const sketcher = document.querySelector(".sketcher");
    
    const SKETCHER = Math.pow(proportion, 2);

    const SQUARE_SIZE = (100 / proportion);

    sketcher.textContent = ""; 

    for(let i = 0; i < SKETCHER; i++) {
        const square = document.createElement("div");
        square.style.backgroundColor = "white";
        square.style.width = `${SQUARE_SIZE}%`;
        square.style.height = `${SQUARE_SIZE}%`;
        square.style.boxSizing = "border-box";
        square.style.border = "1px solid black";
        sketcher.appendChild(square);
    }
    
    sketcher.childNodes.forEach(square => {
        square.addEventListener("mouseover", () => {
            rgb = {
                red: Math.random() * 255,
                green: Math.random() * 255,
                blue: Math.random() * 255,
            }; 
            square.style.backgroundColor= `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`; 
            actualOpacity = window.getComputedStyle(square).getPropertyValue("opacity");
            square.style.opacity = actualOpacity - 0.10
            });
    });
}