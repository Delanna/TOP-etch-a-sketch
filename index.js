const board = document.getElementById("board");
let size = 10;


loadBoard (size);

// Add a number of rows unto the board and add the same number of pixels into each row
function loadBoard(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    
    for (let j = 0; j < size; j++){
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.id = "pixel";
      row.appendChild(pixel);
    }

    board.appendChild(row);
  }
}

// ------------------------------------------

let draw = false;

board.addEventListener("mousedown", ()=> {
  draw = true;
})

board.addEventListener("mouseup", ()=> {
  draw = false;
})

board.addEventListener("mousemove", (e)=>{
  let target = e.target;
  if(draw){
    target.style.backgroundColor = color;
  }
})

// ------------------------------------------

let color;

const colorBtns = document.querySelectorAll (".color");

colorBtns.forEach((colorBtn)=>{
  colorBtn.addEventListener("click", (e) =>{
    let target = e.target;
    color = target.getAttribute("data-color")
  })
})

// ------------------------------------------

const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", ()=>{
  const pixels = board.querySelectorAll(".pixel");

  pixels.forEach((pixel)=>{
    pixel.style.backgroundColor = "white";
  })
})

// ------------------------------------------

const sizeBtns = document.querySelectorAll(".sizeBtn");

sizeBtns.forEach((btn)=>{
  btn.addEventListener("click", (e)=>{
    let target = e.target;
    console.log(target.id)
    switch (true) {
      case target.id === "smallBtn":
        size = 10
        removePixels();
        loadBoard(size);
        break;

        case target.id === "mediumBtn":
        size = 20
        removePixels();
        loadBoard(size);
        break;

        case target.id === "largeBtn":
        size = 40
        removePixels();
        loadBoard(size);
        break;
    
      default: size = 5
        break;
    }
  })
})

// Remove all children of the element
function removePixels(){
    while (board.firstChild) {
    board.removeChild(board.firstChild);
  }
}
// ------------------------------------------

