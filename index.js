var NumberOfBoxes=document.querySelectorAll(".game-box").length;
var boxes=document.querySelectorAll(".game-box");
let restartBtn=document.querySelector(".restart-game");
let NewGameBtn=document.querySelector(".NewGame");
var winnerName=document.querySelector("h1");
let turnOn=true;
const winningPattern=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]];
for(var i=0;i<NumberOfBoxes;i++){

var gameButton=document.querySelectorAll(".game-box")[i].addEventListener("click",function (){

    if(turnOn){
this.innerText="X";
turnOn=false;
    }else if(turnOn==false){
        this.innerText="O";
        turnOn=true;
    }
    this.disabled=true;

    checkWinner();
}) };

function showWinner(winner){
winnerName.innerHTML=`Congratulaions the winner is ${winner}`;

}
function checkWinner(){
    for(pattern of winningPattern){
       // console.log(pattern[0],pattern[1],pattern[2]);
      // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]])
       let postval0=boxes[pattern[0]].innerText;
       let postval1=boxes[pattern[1]].innerText;
       let postval2=boxes[pattern[2]].innerText;
       if(postval0 !=="" && postval1 !== "" && postval2 !==""){
        if(postval0===postval1 && postval1===postval2){
            console.log("winner is" + postval0);
            showWinner(postval0);
        }
        
       }
       
    }
}

restartBtn.addEventListener("click",function(){
  window.location.reload();
})