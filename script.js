const gridContainer = document.querySelector(".grid-container")
const btn = document.querySelector("button")

let num = 16;

let rows = num;
let columns = num;

function draw() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

            let gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.addEventListener("pointerover", () => {
                gridItem.classList.add("hovered-div")
            });
            gridContainer.appendChild(gridItem);
        }
    }
}

btn.addEventListener("click", () => {
    prompt("Input grid-size : ")
})

let gridWidth = 44 * columns;
let gridHeight = 44 * rows;

gridContainer.style.width = gridWidth + "px";
gridContainer.style.height = gridHeight + "px";

draw()




