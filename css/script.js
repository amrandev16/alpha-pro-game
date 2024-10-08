




function handleKeyboardButtonPress(event){
  const playerPressed =event.key;
  console.log(playerPressed);

// stop the game playyer pressed 

if(playerPressed==='Escape'){
  overTheGame();
}
// get the expected to press

const currentAlphabetElement =document.getElementById('current-alphabet')
const currentAlphabet =currentAlphabetElement.innerText;
const expected = currentAlphabet.toLowerCase();
console.log(playerPressed,currentAlphabet);


// check right or wrong

if(playerPressed===expected){
  console.log('you get a pint')

const currentScore = getTextElementValueById('current-score');
const updatedScore = currentScore +1;
setTextElementById('current-score',updatedScore);
removeBackgroundColorById(expected);
countinueGame();

// const currentScoreElement =document.getElementById('current-score');
// const currentScoreText =currentScoreElement.innerText;
// const currentScore =parseInt(currentScoreText);
// console.log(currentScore);

const newScore =currentScore +1;
// currentScoreElement.innerText=newScore;

}
else{
  console.log('you missed.you loss a life');
const currentLife = getTextElementValueById('current-life');
const updatedLife = currentLife - 1;
setTextElementById('current-life',updatedLife);

if(updatedLife===0){
  overTheGame();
}






  // -----------------------------------------
  // const currentLifeScore =document.getElementById('current-life');
  // const  currentLifeText =currentLifeScore.innerText;
  // const newLifescore = parseInt(currentLifeText);
  // const newLife = newLifescore -1;
  // currentLifeScore.innerText = newLife;

}


}
document.addEventListener('keyup',handleKeyboardButtonPress)




// **************************
// calo korar jonno

function countinueGame(){
  // step 1 generate a rendom alphabet
  const alphabet = getRandomAlphabet();
  console.log (alphabet);
  
  const currentAlphabet =document.getElementById('current-alphabet');
  currentAlphabet.innerText =alphabet;
  setBackgroundColorById(alphabet);
  
}




// functionti holo cgange korar jonno 

function play(){
  hideElementById('home-screen');
  showElementById('play-ground');
  // reset 
setTextElementById('current-life',5);
setTextElementById('current-score',0);
hideElementById('final-score');
  countinueGame();
}

function overTheGame(){
  hideElementById('play-ground');
  showElementById('final-score');
  // update score 
  // 1 get the finel score 
  const lastScore = getTextElementValueById('current-score');
  setTextElementById('game-score',lastScore);

// clear the last selected alphabet 
const alphabetCurrent =getElementTextId('current-alphabet');
removeBackgroundColorById(alphabetCurrent);

}