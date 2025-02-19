window.onload = setup
function setup(){
    //get the group
let allSquareShapes = document.querySelectorAll(".square_shape");
//go through each element
for(let  singleSquareShape of allSquareShapes){
    //get children
   console.log(singleSquareShape.children[0])
   singleSquareShape.children[0].textContent+="adding content"
}

document.querySelector(".square_shape").classList.remove("square_shape"); //first one only
document.querySelector("p span").classList.add("square_span");

 //new element
 let newDiv = document.createElement("div");
 newDiv.classList.add("square_shape");
 newDiv.innerHTML = "<p> NEW ELEMENT </p>";
 newDiv.style.backgroundColor = "purple";
// access parent element
let parentElement = document.querySelector(".wrapper_flex_box")
parentElement.appendChild(newDiv)
}

