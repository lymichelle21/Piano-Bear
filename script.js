var button = $('.secret-btn'); 

button.on("click", play); 

function play(){
  var i = document.getElementById("img1"); 
  console.log(i.src)
    if (i.src === "Piano Bear Idle.png") {
      i.src = "Piano Bear Play.png";
    }
    else {
      i.src = "Piano Bear Idle.png";
    }
}