/*
  YOUR 3 CHALLENGES
    change the game to follow these rules:

    1.A player looses his entire score when he rolls two 6 in a row. After that,it's the next player's
    turn.(Hint: Always save the previous dice roll in a separate variable)
    2.Add an input field to the html where players can set the winning score, so that they can change the predefined score of 100.(Hint: you can read that value with the value property in javascript. this is a good opportunity to use google to figure this out :)
    3.Add another dice to the game, so that there are two dices now. the player looses his current score when
    one of them is a 1. (Hint:you will need CSS to position the second dice, so take a look at the CSS code for the first time)


*/

var scores, roundScore, activePlayer,gamePlaying;

init();

var lastDice;

 /*
 no need repeating our this variables due to function init which also dont receive parameters
 scores = [0,0];
 roundScore = 0;
 activePlayer = 0;
 */

 dice = Math.floor(Math.random() * 6) + 1;


document.querySelector('.btn-roll').addEventListener('click', function(){
   if(gamePlaying) {

  //1. we need a random number
   var dice1 = Math.floor(Math.random() * 6) + 1;
   var dice2 = Math.floor(Math.random() * 6) + 1;
   //2. display the result
   //var diceDOM =  document.querySelector('.dice')
   document.getElementById('dice-1').style.display = 'block';
   document.getElementById('dice-2').style.display = 'block';
   document.getElementById('dice-1').src = 'dice-'+ dice1 + '.png';
   document.getElementById('dice-2').src = 'dice-'+ dice2 + '.png';
  
   //diceDOM.style.display = 'block';
   //diceDOM.src = 'dice-' + dice + '.png';
 
 
   //3.update the round score if the rolled number was not a 1
 
   if (dice1 !== 1 && dice2 !== 1) {
     //Add sore
    roundScore += dice1 + dice2;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {

  //next player
   nextPlayer();

  }

    /*
   if(dice === 6 && lastDice === 6) {
      //player looses score
      scores[activePlayer] = 0;
      document.querySelector('#score-' + activePlayer).textContent = '0';
      nextPlayer();
   }

   else if (dice !== 1) {//type of ternary operator is !== or == or === or +=
     //add score
     roundScore += dice;
     // or roundScore = roundScore + dice
     document.querySelector('#current-' + activePlayer).textContent = roundScore;
   } else {
 
   //next player
        nextPlayer();

   }
   lastDice = dice;
   */
  }
});


    

 document.querySelector('.btn-hold').addEventListener('click', function(){
     if(gamePlaying){
          //Add current score to GLOBAL score
          scores[activePlayer] += roundScore;
          // or scores[activePlayer] = scores[activePlayer] + roundScore;
          //update the UI
 document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
       var input = document.querySelector('.final-score').value;
       var winningScore;
       //Undefined,0,null or "" are COERCED to flase
       //anything else is COERCED to true
       if(input) {
              winningScore = input;
       } else {
              winningScore = 100;
       }
      
   
     //check if player won the game
         if(scores[activePlayer] >= winningScore){
           document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
           document.getElementById('dice-1').style.display = 'none';
           document.getElementById('dice-2').style.display = 'none';
           document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
           document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
           gamePlaying = false;
         }  else {
           
             //next player
              nextPlayer();
   
         }

     }
	  
   
});


function nextPlayer() { //it use when you don't want to repeat urself in coding.it a function that doesn't receive parameter and doesn't return any result

  	//Next player
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';
     
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');

     document.getElementById('dice-1').style.display = 'none';
     document.getElementById('dice-2').style.display = 'none';
}

//event listener:implementing on the new button
document.querySelector('.btn-new').addEventListener('click',init);

    //using the no repeat function init 


function init() {
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';

//setting all score t0 0
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent ='0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');

}

//state variable: it simply tells us the condition of a system whether is playing or not  

