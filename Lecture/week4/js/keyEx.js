window.onload = function(){
    console.log("keys");
    let speedX =5;
    let boxA = document.getElementById("boxA");
    boxA.style.left = "100px";

window.setTimeout(addTimeoutText,2000);
    function addTimeoutText(){
    let parent = document.getElementById("parent");
    parent.innerHTML+="<p> NEW TEXT TO APPEAR </p>";

 }

window.setTimeout(addTimeoutText,7000);
    function addTimeoutText(){
    let parent = document.getElementById("parent");
    parent.innerHTML+="<p> NEW TEXT TO APPEAR </p>";
  }

    window.addEventListener("keydown", function(event)
    {
     console.log(event);
    // document.querySelector("#textContainer").textContent+=event.key;
    // document.querySelector("#textContainer").textContent+=event.code;
    window.addEventListener("keyup", function(event){
        console.log("keyup")
         //2: change color when space is down
         if(event.key ==="Shift"){
            document.getElementById("boxA").style.background = "rgb(112, 184, 226)";
   
        }
        else{
          console.log(`key up not shift:`)
          console.log(event)
        }
   
    })

    if(event.key ==="ArrowRight"){
 
        boxA =parseInt(boxA)+speedX+"px";
      }
      else if(event.key ==="ArrowLeft"){
      
        boxA.style.left =parseInt(boxA.style.left)-speedX+"px";   
      }  else if (event.key === "Shift") {
        document.getElementById("boxA").style.background ="rgb(226, 112, 177)";
    }
      else if(event.code ==="Space"){
        let bool = document.getElementById("boxB").getAttribute("custom-bool");
        if (bool === "off") {
          document.getElementById("boxB").style.background = "orange";
          document.getElementById("boxB").setAttribute("custom-bool", "on");
        } else {
          document.getElementById("boxB").style.background = "rgb(112, 184, 226)";
          document.getElementById("boxB").setAttribute("custom-bool", "off");
        }
    
 
    }

    })
}