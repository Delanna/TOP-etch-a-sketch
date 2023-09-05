const canvas = document.getElementById("canvas");
let row;
let pixel;
let color="black";


// THIS CREATES THE "PIXELS" IN THE CANVAS
// IT MAKES ALL THE ROWS FIRST (THE Y AXIS)
// THEN FILLS THE ROWS WITH MORE ROWS TO MAKE THE "X AXIS"
function generateCanvas(size){
  for(let i=0; i<size; i++){
    row = document.createElement("div")
    row.classList.add("row");

    for(let j=0; j<size; j++){
      pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.setAttribute("id", "pixel");
      pixel.addEventListener('mouseover', (event)=>{
        event.target.style.backgroundColor = color;});
      row.appendChild(pixel);
    }
    canvas.appendChild(row);
  }
}


// THIS CODE MAKES THE SIZE BUTTONS WORK
// IT CLEARS THE BOARD THEN REGENERATES THE CANVAS/BOARD
const sizeBtns = document.getElementById("sizeBtns");
sizeBtns.addEventListener("click",(event)=>{
  const button = event.target;
  if (button.id === "smallBtn"){
    canvas.innerHTML="";
    generateCanvas(10);
  }else if (button.id==="mediumBtn"){
    canvas.innerHTML="";
    generateCanvas(30);
  }else if(button.id==="largeBtn"){
    canvas.innerHTML="";
    generateCanvas(60);
  } else generateCanvas(10);
})


// THIS MAKES THE COLOUR BUTTONS WORK, 
// IT CHANGES THE VARIABLE COLOR TO PINK,GOLD,ETC,
// THE COLOR VARIABLE IS THEN USED IN GENERATECANVAS()
const pinkBtn = document.getElementById("pinkBtn");
const purpleBtn = document.getElementById("purpleBtn");
const goldBtn = document.getElementById("goldBtn");

pinkBtn.addEventListener("click",()=>{
  color="deeppink";})
purpleBtn.addEventListener("click",()=>{
  color="purple";})
goldBtn.addEventListener("click",()=>{
  color="gold";})


// CLEAR bUTTON fUNCTION
// ALL THIS DOES IS CLEAR THE PIXELS BACKGROUND COLOUR
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click",()=>{
  const pixels = document.querySelectorAll("#pixel");
  pixels.forEach((square)=>{
    square.style.backgroundColor="";
  })  
})




