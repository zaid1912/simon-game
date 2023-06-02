var sounds = ["green", "red", "yellow", "blue"];
var list = [];
var userList = [];
var started = false;
var level = 0;

function makeSound(name){
    audio = new Audio("/sounds/"+name+".mp3");
    audio.play();
}

function annimation(color){
  $("." + color).addClass("pressed");
    setTimeout(() => {
      $("." + color).removeClass("pressed");
    }, 70);
}

$(".btn").click(function(){
  userChosenColor = $(this).attr("id");
  makeSound(userChosenColor);
  annimation(userChosenColor);
  userList.push(userChosenColor);
  compare(userList.length - 1);
  // console.log(userList);
})

$(document).keydown(function(){
  if(!started){
    $("#level-title").text("level " + level);
    nextSequence();
    started = true;
  }
})


function nextSequence(){
  userList = [];
  level++;
  $("#level-title").text("level " + level);
  var randomSelect = Math.floor(Math.random() * sounds.length);
  var randomColorChosen = sounds[randomSelect];
  list.push(randomColorChosen);
  makeSound(randomColorChosen);
  annimation(randomColorChosen);
}

function compare(currentLevel){
  if(userList[currentLevel] === list[currentLevel]){
    console.log("success");
    if(userList.length === list.length){
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
  }
  else{
    console.log("wrong");
    level = 0;
    $("#level-title").text("game over. press any key to restart");
    started = false;
    userList = [];
    list = [];

  }
  console.log(list);
  console.log(userList);

}

nextSequence();