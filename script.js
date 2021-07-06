var button = $('.play-btn');
var audio = new Audio("Keys/C4.ogg");

button.on("click", play);

function play(){
}

function playAudio(fileName) {
  var audio = new Audio(fileName);
  audio.currentTime=0;
  audio.play();
  setInterval(function(){
    if (audio.currentTime>2.5)
      audio.pause();
  })
}

document.addEventListener('keydown', function(e){

  var i = document.getElementById("img1");
  if (i.src.includes("Piano%20Bear%20Idle.png"))
    i.src = "Piano Bear Play.png";
  else
    i.src = "Piano Bear Idle.png";

  if(e.keyCode==65)     // A
    playAudio("Keys/C4.ogg");
  else if(e.keyCode==83)   // S
    playAudio("Keys/D3.ogg");
});
