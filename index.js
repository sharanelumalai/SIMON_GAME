let computer_choosen = [];
let user_choosen=[];
let color = ["green", "red", "yellow", "blue"];
let Level=0;
let Permissions_val=false;
$(document).on("keypress touchstart", starting);
function starting() {
  if(!Permissions_val){
    $("#level-title").text("Level "+Level);
    gamestart();
    Permissions_val=true;
  }
 
};

$(".btn").click(function(){
  user=$(this).attr("id");
  animation("#"+user);
  playtune(user);
  user_choosen.push(user);
  
  checkanswer(user_choosen.length-1);
});

function gamestart() {
  user_choosen=[];
  Level++;
  $("#level-title").text("Level "+Level);
    let random = Math.floor(Math.random()* 4);
    let val = "#" + color[random];
    animation(val);
    playtune(color[random]);
    computer_choosen.push(color[random]);
      console.log(computer_choosen); 
}

function playtune(filename) {
  let audio_name = "./sounds/" + filename + ".mp3";
  var audio = new Audio(audio_name);
  audio.play();
}

function animation(anime_name) {
  $(anime_name).fadeOut(100).fadeIn(100);
}


function checkanswer(check_val){
  console.log(check_val);
  console.log(computer_choosen [check_val]+"---------"+user_choosen[check_val]);
  console.log(computer_choosen.length+"---------"+user_choosen.length);
  if(computer_choosen [check_val]=== user_choosen[check_val]){
    if(computer_choosen.length === user_choosen.length){
      setTimeout(() => {
        gamestart();
      }, 1000);
     
    }
  }
  else{
    playtune("wrong");
    $("#level-title").text("Game Over To Continue Press Any Key");
    computer_choosen = [];
    user_choosen=[];
    Level=0;
    Permissions_val=false;
     $("body").addClass("game-over");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
  }
}

