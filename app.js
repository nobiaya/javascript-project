/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer,gamePlaying;

init();

 /*
 no need repeating our this variables due to function init which also dont receive parameters
 scores = [0,0];
 roundScore = 0;
 activePlayer = 0;
 */

 dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector('#current-' + activePlayer).textContent = dice;
 //document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'

//var x = document.querySelector('#score-0').textContent;
//console.log(x);


document.querySelector('.btn-roll').addEventListener('click', function(){
   if(gamePlaying) {

  //1. we need a random number
   var dice = Math.floor(Math.random() * 6) + 1;
   //2. display the result
   var diceDOM =  document.querySelector('.dice')
   diceDOM.style.display = 'block';
   diceDOM.src = 'dice-' + dice + '.png';
 
 
   //3.update the round score if the rolled number was not a 1
   if (dice !== 1) {//type of ternary operator is !== or == or === or +=
     //add score
     roundScore += dice;
     // or roundScore = roundScore + dice
     document.querySelector('#current-' + activePlayer).textContent = roundScore;
   } else {
 
        //next player
        nextPlayer();

   }
  }
});


     /*(no need repeating the code instead we use nextplayer() function)next player
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
     roundScore = 0;

     document.getElementById('current-0').textContent = '0';
     document.getElementById('current-1').textContent = '0';
     
     document.querySelector('.player-0-panel').classList.toggle('active');
     document.querySelector('.player-1-panel').classList.toggle('active');

     document.querySelector('.dice').style.display = 'none';

     //document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');

      //example of tenuary operator
     /*the same with
     if(activeplayer ===0) {
	     activePlayer = 1;
     }else{
	   activeplayer = 0;
     } 
     */
 


 document.querySelector('.btn-hold').addEventListener('click', function(){
     if(gamePlaying){
          //Add current score to GLOBAL score
          scores[activePlayer] += roundScore;
          // or scores[activePlayer] = scores[activePlayer] + roundScore;
          //update the UI
 document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
   
     //check if player won the game
         if(scores[activePlayer] >= 100){
           document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
           document.querySelector('.dice').style.display = 'none';
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

     document.querySelector('.dice').style.display = 'none';
}

//event listener:implementing on the new button
document.querySelector('.btn-new').addEventListener('click',init);
   
    //using the no repeat function init 


function init() {
  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

document.querySelector('.dice').style.display = 'none';
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

/*
  YOUR 3 CHALLENGES
    change the game to follow these rules:

    1.A player looses his entire score when he rolls two 6 in a row. After that,it's the next player's
    turn.(Hint: Always save the previous dice roll in a separate variable)
    2.Add an input field to the html where players can set the winning score, so that they can change the predefined score of 100.(Hint: you can read that value with the value property in javascript. this is a good opportunity to use google to figure this out :)
    3.Add another dice to the game, so that there are two dices now. the player looses his current score when
    one of them is a 1. (Hint:you will need CSS to position the second dice, so take a look at the CSS code for the first time)


*/