 var gamearray=[];
 var buttoncolor=["red", "blue", "green", "yellow"];
 var userclickedpattern=[];
function nextsequence(){
  userclickedpattern=[];
  level++;
  $('#level-title').text('level '+level);
    var randomnumber=Math.floor(Math.random()*4);
    var randomchosencolor = buttoncolor[randomnumber];
    gamearray.push(randomchosencolor);
    $("#"+randomchosencolor).fadeIn(100).fadeOut(100).fadeIn(100);
    playsound(randomchosencolor);
}
$(".btn").click(function(){
    
  var userchosencolor=this.id;
  //console.log(userchosencolor);
 userclickedpattern.push(userchosencolor);
  console.log(userchosencolor);
  playsound(userchosencolor);
  animatepress(userchosencolor);
  checkanswer(userclickedpattern.length-1);
 // console.log(userclickedpattern.indexOf(userchosencolor,0));
});

function playsound(name){
    var audio1= new Audio ("sounds/"+name+".mp3");
    audio1.play();
}
function animatepress(currentcolor){
 $("#"+currentcolor).addClass('pressed');
 setTimeout(() => {
    $("#"+currentcolor).removeClass('pressed');
 }, 100);
}
var level=0;
var gamestarted=false;

$(document).on('keypress',function () {
  if(!gamestarted){
    $("#level-title").text("Level " + level);
    nextsequence();
    gamestarted = true;
  }})

  function checkanswer(currentlevel){
   if(userclickedpattern[currentlevel]===gamearray[currentlevel]){
    console.log("sucess");
    if(userclickedpattern.length===gamearray.length){
      setTimeout(function() {
        nextsequence();
       }, 1000);
    }
   }
   else{
    console.log("nope");
    playsound("wrong");
    $('body').addClass('game-over');
    setTimeout(() => {
      $('body').removeClass('game-over');
    }, 200);
    $("#level-title").text("Game Over, Press Any Key to RESTART");
    startover();

   }
   
  }
  function startover(){
    level=0;
    gamearray=[];
    gamestarted=false;
  }

