let gameSeq = [];
let userSeq = [];
let btns = ["yellow","red","blue","green"];
let heighestScore = 0 ;


let started = false;
let level = 0;

h2 = document.querySelector("h2");


document.addEventListener("keypress" , function () {
   if(started == false){
      console.log("starded");
      started = true;
      levelUp();
   } 
  
   
})

function btnFlash(btn){
   btn.classList.add("flash");
   setTimeout( function () {
      btn.classList.remove("flash");
   }, 250)
};

function userFlash(btn){
   btn.classList.add("userFlash");
   setTimeout( function () {
      btn.classList.remove("userFlash");
   }, 100)
};



function levelUp() {
   userSeq = [] ;
   level++;
   //  heighestScore++;
   
   h2.innerText = `level ${level}`;
   
   let ranIdx = Math.floor(Math.random() * 4);
   let ranColor = btns[ranIdx];
   let randBtn = document.querySelector(`.${ranColor}`);
    gameSeq.push(ranColor);
    console.log(gameSeq);
   // console.log(ranIdx);
   // console.log(ranColor);
   // console.log(randBtn);
   btnFlash(randBtn);
}

function checkAns(idx) {
   
  if(userSeq[idx] === gameSeq[idx]){
   if(userSeq.length == gameSeq.length){
      setTimeout(levelUp,1000);
   }
  }else{
   h2.innerHTML  = `game over! your score was <b>${level}</b> <br> press any key to start new game`;
   document.querySelector("body").style.backgroundColor = "red";
   setTimeout( function ()  {
      document.querySelector("body").style.backgroundColor = "white";
   }, 150)
   reset();
  }
  
}

function btnPress() {
 let btn = this;
 userFlash(btn);

 let userColor = btn.getAttribute("id");
 console.log(userColor);
 userSeq.push(userColor); 
 highestScore();
 checkAns(userSeq.length -1 );
}

let allBtns = document.querySelectorAll("button")
for(btn of allBtns){
   btn.addEventListener("click" , btnPress);
}

function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}



function highestScore(){
   let score = document.querySelector(".score")
   if(level > heighestScore){
      score.innerHTML = `Highest score : ${level}`;
      heighestScore = level;
      console.log(heighestScore);
   
   }else {
      score.innerHTML = `Highest Score : ${heighestScore}`;
   }
   
  
}
