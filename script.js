var button = $('.play-btn');

const keys = []

function playAudio(fileName) {
  console.log(fileName);
  var audio = new Audio(fileName);
  audio.play();
  down();
  setInterval(function(){
    if (audio.currentTime>=0.25) {
      audio.pause();
      up();
      audio.currentTime=0;
    }
  })
}

document.addEventListener('keydown', function(e){

  console.log(e.keyCode);

  var dict = {
    50: "Keys/Csharp3.ogg",
    51: "Keys/Dsharp3.ogg",
    53: "Keys/Fsharp3.ogg",
    54: "Keys/Gsharp3.ogg",
    55: "Keys/Asharp3.ogg",
    57: "Keys/Csharp3.ogg",
    48: "Keys/Dsharp3.ogg",

    81: "Keys/C3.ogg",
    87: "Keys/D3.ogg",
    69: "Keys/E3.ogg",
    82: "Keys/F3.ogg",
    84: "Keys/G3.ogg",
    89: "Keys/A3.ogg",
    85: "Keys/B3.ogg",
    73: "Keys/C4.ogg",
    79: "Keys/D4.ogg",
    80: "Keys/E4.ogg",

    83: "Keys/Fsharp4.ogg",
    68: "Keys/Gsharp4.ogg",
    70: "Keys/Asharp4.ogg",
    72: "Keys/Csharp5.ogg",
    74: "Keys/Dsharp5.ogg",
    76: "Keys/Fsharp5.ogg",
    186: "Keys/Gsharp5.ogg",
    222: "Keys/Asharp5.ogg",

    90: "Keys/F4.ogg",
    88: "Keys/G4.ogg",
    67: "Keys/A4.ogg",
    86: "Keys/B4.ogg",
    66: "Keys/C5.ogg",
    78: "Keys/D5.ogg",
    77: "Keys/E5.ogg",
    188: "Keys/F5.ogg",
    190: "Keys/G5.ogg",
    191: "Keys/A5.ogg"
  };

  if (e.keyCode in dict)
    playAudio(dict[e.keyCode]);

});

function down(){
  var i = document.getElementById("piano-bear-img");
  if (i.src.includes("Piano%20Bear%20Idle.png"))
    i.src = "Piano Bear Play.png";
}

function up(){
  var i = document.getElementById("piano-bear-img");
  if (i.src.includes("Piano%20Bear%20Play.png"))
    i.src = "Piano Bear Idle.png";
}
