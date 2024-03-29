let size = 10;
let draw = false;
let color;

const board = document.getElementById("board");
const colorBtns = document.querySelectorAll (".color");
const sizeBtns = document.querySelectorAll(".sizeBtn");
const clearBtn = document.getElementById("clearBtn");


loadBoard (size);

// ------------------------------------------

// Add a number(size) of rows unto the board and add the same number of pixels into each row
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
// colors of the divs(pixels) only change when you mouse down on board and move move over div

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
// clicking on a color button sets color and clicking the eraser button sets color to white

colorBtns.forEach((colorBtn)=>{
  colorBtn.addEventListener("click", (e) =>{
    let target = e.target;
    color = target.getAttribute("data-color")
  })
})

// ------------------------------------------
// clicking the clear button loops through all the divs(pixels) and changes them to white

clearBtn.addEventListener("click", ()=>{
  const pixels = board.querySelectorAll(".pixel");

  pixels.forEach((pixel)=>{
    pixel.style.backgroundColor = "white";
  })
})

// ------------------------------------------
// Clicking a size button clears the board and reloads it with a different size

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

