const gridContainer = document.querySelector(".grid-container")
const btn = document.querySelector("button")



function draw(num) {

    let rows = num;
    let columns = num;

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

    let gridWidth = 44 * columns;
    let gridHeight = 44 * rows;

    gridContainer.style.width = gridWidth + "px";
    gridContainer.style.height = gridHeight + "px";

}

btn.addEventListener("click", () => {
    const num = prompt("Input grid-size between 1-24 : ")

    if (!Number(num) || num > 24) {
        prompt("Invalid input. Please enter a number valid number")
    }

    gridContainer.innerHTML = "";
    draw(Math.floor(num));
})


draw(16)




