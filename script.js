const gridContainer = document.querySelector(".grid-container")
const btn = document.querySelector("button")



function draw(num) {

    let rows = num;
    let columns = num;

    let size = 700 / num;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {

            let gridItem = document.createElement("div");
            gridItem.style.width = `${size}px`;
            gridItem.style.height = `${size}px`;
            gridItem.classList.add("grid-item");
            gridItem.addEventListener("pointerover", () => {
                gridItem.classList.add("hovered-div")
            });
            gridContainer.appendChild(gridItem);
        }
    }

    let gridSize = 700 + (4 * num + 0.5);

    gridContainer.style.width = gridSize + "px";
    gridContainer.style.height = gridSize + "px";

}

btn.addEventListener("click", () => {
    const num = prompt("Input a grid-size between 1-64 : ")

    if (!Number(num) || num > 64) {
        prompt("Invalid input. Please enter a number valid number")
    }

    gridContainer.innerHTML = "";
    draw(Math.floor(num));
})


draw(16)





