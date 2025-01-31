const body = document.querySelector('body')
const button = document.querySelector('button')


const gridContainer = document.getElementById("gridContainer")
body.appendChild(button);
body.appendChild(gridContainer)

function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
}

button.addEventListener('click', () =>{
    let userInput = prompt("Please enter the dimension of the square grid you'd like.")
    if(userInput === 'null' || userInput <= 0 || userInput ===""){
        alert('Please enter a valid input')
        return;
    }
    if(userInput > 100){
        alert('Maximum is 100.')
        return;
    }
    gridContainer.innerHTML = "";
    for(i = 0; i<userInput; i ++){
        const row = document.createElement('div')
        row.style.display = 'flex'
        row.style.width = '100%'
    
        for (j = 0; j <userInput; j++){
            const box = document.createElement('div');
            row.appendChild(box)
            box.classList.add("box")
            box.addEventListener("mouseenter", () =>{
                let currentOpacity = parseFloat(box.style.opacity) || 1;
                let newOpacity = currentOpacity - 0.1;
                box.style.backgroundColor = getRandomColor();
                box.style.opacity = newOpacity;
            })
            box.addEventListener("mouseleave" ,() => {
                box.style.backgroundColor = "gray"
            })
        }
        gridContainer.appendChild(row)
    }
    
})


