var button = $('.secret-btn'); 

button.on("click", play); 

function play(){
  var i = document.getElementById("img1"); 
  console.log(i.src)
    if (i.src === "Piano Bear Idle.png") {
      i.src = "Piano Bear Play.png";
      console.log("Inside IF")
    }
    else {
      i.src = "Piano Bear Idle.png";
      console.log("Outside IF")
    }
}