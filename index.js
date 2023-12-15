//Get the parent div of grid container
const grid_container = document.querySelector('.grid_container');

function removeAllChildren(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

function createGrid(size){
    removeAllChildren(grid_container);
    for(let i =0; i< size; i++){
        let row = document.createElement('div');
        row.classList.add("row");
        for(let i = 0; i < size; i++ ){
            let cell = document.createElement('div');
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        grid_container.appendChild(row);
        
    }
}

let color = [ "og", "color",
            "color1", "color2", "color3"];



const gridder = document.getElementById('creator');

gridder.addEventListener('click', () => {
    let size = document.getElementById("rangeValue").innerText;
    size = parseInt(size);
    createGrid(size);

    let elems = document.querySelectorAll(".cell");
    console.log(elems);

    for (let i = 0; i < elems.length; i++) {
        elems[i].addEventListener("mouseover", function() {
            let x = Math.floor(Math.random() * 5);
            elems[i].classList.toggle(color[x]);
        });
    }
});






