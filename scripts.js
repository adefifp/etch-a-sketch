const body = document.querySelector('body')

const gridContainer = document.getElementById("gridContainer")

for(i = 0; i<16; i ++){
    const row = document.createElement('div')
    row.style.display = 'flex'

    for (j = 0; j <16; j++){
        const box = document.createElement('div');
        row.appendChild(box)
        box.classList.add("box")
        box.addEventListener("mouseenter", () =>{
            box.style.backgroundColor = "pink"
        })
        box.addEventListener("mouseleave" ,() => {
            box.style.backgroundColor = "gray"
        })
    }
    gridContainer.appendChild(row)
}
