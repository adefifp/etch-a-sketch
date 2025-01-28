const body = document.querySelector('body')
body.style.display = "flex"

const gridContainer = document.getElementById("gridContainer")

for(i = 0; i<16; i ++){
    const row = document.createElement('div')
    row.style.display = 'flex'
    for (j = 0; j <16; j++){
        const box = document.createElement('div');
        row.appendChild(box)
        box.style.backgroundColor = "black"
        box.style.width = '50px'
        box.style.height = '50px'
        box.style.margin = '10px'
    }
    gridContainer.appendChild(row)
}

