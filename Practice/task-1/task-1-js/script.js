window.onload = setup;

/** function setup */
function setup(){
console.log("we are a go!")
/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */ 
/* 1: all paragraph elements */
/***CODE */
console.log(document.getElementsByTagName("p"));
/***OUTPUT: 
 * 
[Log] HTMLCollection (9) (script.js, line 10)
0 
<p id="1">…</p>
1 
<p id="2" class="img-descript">…</p>
2 
<p id="3" class="img-descript">…</p>
3 
<p id="4" class="img-descript">…</p>
4 
<p id="5" class="img-descript">…</p>
5 
<p id="6" class="img-descript">…</p>
6 
<p id="7" class="img-descript">…</p>
7 
<p id="8" class="img-descript">…</p>
8 
<p id="9" class="img-descript">…</p>

HTMLCollection Prototype


 */


/*************************************** */
/* 2: only the first paragraph element */
/***CODE */
console.log(document.getElementById("1"));
// or get element by tag name and [0]
/***OUTPUT: 
 
 * [Log] <p id="1">…</p> (script.js, line 21)
 */


/*************************************** */
/* 3: all elements with the class inner-container */
/***CODE */
console.log(document.getElementsByClassName("inner-container"));
/***OUTPUT: 
 * [Log] HTMLCollection (8) (script.js, line 53)
0 
<div class="inner-container">…</div>
1 
<div class="inner-container">…</div>
2 
<div class="inner-container">…</div>
3 
<div class="inner-container">…</div>
4 
<div class="inner-container">…</div>
5 
<div class="inner-container">…</div>
6 
<div class="inner-container">…</div>
7 
<div class="inner-container">…</div>

HTMLCollection Prototype

 */


/*************************************** */
/* 4: the last image element inside the element that has the class img-container */
/***CODE */
console.log(document.getElementsByClassName("inner-container")[7]);
/***OUTPUT: 
[Log] <div class="inner-container"> (script.js, line 81)
<div class="content-container">…</div>
</div>

/*************************************** */
/* 5A: all h2 elements */
console.log(document.getElementsByTagName("h2"));
/* 5B: length of the list in 5A */
console.log(document.getElementsByTagName("h2").length);
/* 5C: the text content of the first element in the list from 5A */
console.log(document.getElementsByTagName("h2")[0].textContent);
/***CODE */
/***OUTPUT: 
 * [Log] HTMLCollection (1) (script.js, line 89)
0 
<h2> The header of this fancy page</h2>

[Log] 1 (script.js, line 91)

[Log]  The header of this fancy page (script.js, line 93)

 */


/*************************************** */
/* 6: the element with id name parent */
/***CODE */
console.log(document.getElementById("parent"));
/***OUTPUT: 
 * [Log] <section id="parent"> (script.js, line 110)
<div class="inner-container">…</div>
<div class="inner-container">…</div>
<div class="inner-container">…</div>
<div class="inner-container">…</div>
<div class="inner-container">…</div>
<div class="inner-container">…</div>
<div class="inner-container">…</div>
<div class="inner-container">…</div>
</section>

 */

/*************************************** */
/*** END PART ONE ACCESS */ 


/*************************************** */
/*** START PART TWO MODIFY */ 
/*************************************** */
// /* 1: Select the first paragraph and replace the text within the paragraph... */
// /***CODE */
// document.getElementById("1").innerHTML = "New text in paragraph one: text changed by Maia Arrais on the following date: Jan 27, 2025.";
// /*************************************** */
// /* 2: Select all elements in the HTML that have the class name content-container
//  and change the background color ... of first and second ...*/
// /***CODE */
// let elements = document.getElementsByClassName("content-container");

// for (let i = 0; i < elements.length; i++) {
//     if (i === 0) {
//         elements[i].style.background = 'orange'; 
//     } else if (i === 1) {
//         elements[i].style.background = 'purple'; 
//     }
// }
// /*************************************** */
// /* 3: Change the src element of the first image element on the page to be ...
// /***CODE */
// document.querySelectorAll("img")[0].setAttribute("src","task-1-images/seven.png");
// /*************************************** */
// /* 4: Select the third paragraph element on the page and 
// replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
// /***CODE */
// document.querySelectorAll("p")[2].innerHTML = "<h2>TEST 123</h2>"
// /*************************************** */
// /* 5: Select the fourth paragraph element on the page and 
// add to the existing content an h2 element containing the text `TEST 123`
// /***CODE */
// let newH2 = document.createElement("h2");
// newH2.innerHTML = "TEST 123"; // Set the content for the new <h2>

// let pElement = document.querySelectorAll("p")[3]; // Get the 4th <p> element
// pElement.appendChild(newH2); // Append the new <h2> to the 4th <p> element
// /*************************************** */
// /* 6: Select the fifth paragraph element on the page and add to the existing content 
// an img element that holds `one.png`, and add the class newStyle to said paragraph element.
// /***CODE */
// let newElement = document.createElement("img");
// newElement.setAttribute("src","task-1-images/one.png");

// let imgSrc = document.querySelectorAll("p")[4];
// imgSrc.appendChild(newElement); 
// imgSrc.classList.add("newStyle");
// console.log(document.getElementById('5'))


// /*************************************** */
// /* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
// then access all elements with class name inner-container and save to a variable called `innerContainers`. 
// Next, iterate over the colors array, and for each color: 
// assign the element from innerContainers variable with the same index 
// (i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
// a background using that color.
// /***CODE */
// let colors = ['red','blue','green','orange'];
// let innerContainers = document.querySelectorAll(".inner-container")

// colors.forEach((color, index) => {
//     if (innerContainers[index]) {  // Ensure the element exists before applying styles
//         innerContainers[index].style.backgroundColor = color;
//     }
// });
/*************************************** */
/*** END PART TWO MODIFY */ 


/*************************************** */
/*** START PART THREE CREATE */ 
/*************************************** */
/* 1: NEW PARAGRAPHS */
/* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
/* 1B: Create a function:function customCreateElement(parent){ //body } */
/* 1C:  In the body of customCreateElement create a new parargraph element*/
/* 1D:  Set the text of this element to be : `using create Element`*/
/* 1E:  Set the background of this paragraph element to be green */
/* 1F:  Set the color of the text in this paragraph element to be white */
/* 1G: Append this new element to the parent variable within the function. */
/* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
passing the current allPTagsThree element as the parent with each iteration.*/
/***CODE */
let allPTagsThree = document.querySelectorAll("p")
function customCreateElement(parent){
    let newP = document.createElement('p');
    newP.innerHTML = "using create Element";
    newP.style.backgroundColor = "green";
    newP.style.color = "white";
    
	parent.appendChild(newP);
}

allPTagsThree.forEach(paragraph => {
    customCreateElement(paragraph);
});
/***EXPLANATION::
 * 
<p style="background-color: green; color: white;">using create Element</p> for all paragraph elements

 * 
 */

/*************************************** */
/* 2: GRID OF BOXES */
/* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
/* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
/* 2C:Then append this new element to the parent variable within the function. 
/* 2D:Finally, return</code> this new element */
/* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
    Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
    Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
/* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
    Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
    in a variable i.e. returnedDiv. 
    Set the style (left and top) to the of this element to 
    the necessary x and y position (use the counter variables in the for nested for loop to 
    calculate the new positions.
/* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
    and otherwise let it have a background of purple.</li>
/* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
    otherwise lat it have the content `ODD`.*/

/***CODE */
function customNewBoxCreate(parent){
   let newDiv = document.createElement("div");
   newDiv.classList.add('testDiv');
   parent.appendChild(newDiv)
   return newDiv;
}

let parentElement = document.getElementById('new-grid');

for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
        let returnedDiv = customNewBoxCreate(parentElement);
        returnedDiv.style.position = 'absolute';
        returnedDiv.style.left = `${col * 40}px`; // Adjusting the position based on column index
        returnedDiv.style.top = `${row * 40}px`;
         // BONUS I 
         if (row % 2 === 0) { //even 
            returnedDiv.style.backgroundColor = 'white'; 
        } else {
            returnedDiv.style.backgroundColor = 'purple'; 
        }

        //BONUS II 
        if (row % 2 === 0) {
            returnedDiv.innerText = 'EVEN'; 
        } else {
            returnedDiv.innerText = 'ODD'; 
        }
    
    }
    
}


/***EXPLANATION::
 * creating a new div: customNewBoxCreate() with the class testDiv for elements with new-grid id
 * for each combination of rows and columns a new div is created by calling customNewBoxCreate()
 * left and right positions are calculated based on the index (col * 40px) & (row * 40px)
 * even row  (row % 2 === 0) set to white and write even else purple and odd. 
 */

/*************************************** */
/* 3: GRID OF BOXES II */

/* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
    USE the same customNewBoxCreate function..., the only difference is that the parent element 
    for each of these new divs is the element whose id is `new-grid-three`. */
/* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
    when it is a column where the remainder is 1 or when the remainder is 2 ... 
    HINT:: look up the % operator.. */
/* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
        then the second a background of orange and the third yellow. */
/*  3D: Finally, let each div contain the text content representing the associated remainder 
    when dividing by three. */

/***CODE */


 let pElement = document.getElementById('new-grid-three');
 for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
        let returnedDiv = customNewBoxCreate(pElement);
        returnedDiv.style.position = 'absolute';
        returnedDiv.style.left = `${col * 40}px`; // Adjusting the position based on column index
        returnedDiv.style.top = `${row * 40}px`;
    if (col % 3 === 0){
        returnedDiv.style.backgroundColor = "red";
        returnedDiv.textContent = "0"
    }
    else if (col % 3 === 1){
        returnedDiv.style.backgroundColor = "orange";
        returnedDiv.textContent = "1"
    }
    else if(col % 3 === 2){
        returnedDiv.style.backgroundColor = "yellow";
        returnedDiv.textContent = "2"
    }
  }
 }
/***EXPLANATION::
 * new grid of div elements within the new-grid-three parent element
 * customNewBoxCreate() function to create each div inside the grid, added as children to the new-grid-three container.
 * same setup for rows and columns as exercise 2 
 * handling column divisions for specific attributes with (col % 3 === 0) (col % 3 === 1) (col % 3 === 2) and .textContent to write the specific number. 
 */

/*************************************** */
/*** END PART THREE CREATE */ 
/*************************************** */
    




}