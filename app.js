/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores,roundScore,activeplayer,gameplaying;

init();
document.querySelector('.btn-roll').addEventListener('click',function()
{
    if(gameplaying)
    {
    //1.Random Number
    var dice = Math.floor(6*Math.random()+1);
    //2.Dispaly the result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';
    //3.update the round score only if th roll number is not 1
    if(dice!==1)
    {
        //add score
        roundScore+=dice;
        document.querySelector('#current-'+ activeplayer).textContent=roundScore;
    }
    else
    {
        //Next player
        nextPlayer();
    }

    }

});


document.querySelector('.btn-hold').addEventListener('click',function()
{
   if(gameplaying)
   {
    //AddCurrent score to global score 
    scores[activeplayer]+=roundScore;
    //update UI
    document.querySelector('#score-'+activeplayer).textContent=scores[activeplayer];
    //Check if player won the game 
     if(scores[activeplayer]>=100)
     {
         document.querySelector('#name-'+activeplayer).textContent='Winner Winner Chicken Dinner!!';
         document.querySelector('.dice').style.display='none';
         document.querySelector('.player-'+activeplayer+'-panel').classList.add('winner');
         document.querySelector('.player-'+activeplayer+'-panel').classList.remove('active');
         gameplaying=false;
         
    }

     else
     {
        //Nextplayer
         nextPlayer();
     }

    }
});


document.querySelector('.btn-new').addEventListener('click',init);


function nextPlayer()
{
          //Next player
          activeplayer=== 0 ? activeplayer=1:activeplayer=0;
          roundScore=0;
          document.getElementById('current-0').textContent='0';
          document.getElementById('current-1').textContent='0';
          document.querySelector('.player-0-panel').classList.toggle('active');
          document.querySelector('.player-1-panel').classList.toggle('active');  
          document.querySelector('.dice').style.display='none';  
}



function init()
{
document.querySelector('.dice').style.display='none';
scores=[0,0];
roundScore=0;
activeplayer=0;
gameplaying=true;
document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
document.getElementById('name-0').textContent='Player 1';
document.getElementById('name-1').textContent='Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}






