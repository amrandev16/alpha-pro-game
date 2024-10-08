

function hideElementById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('hidden');
    
}

function showElementById(elementId){
const element =document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-orange-400');

    
}
function removeBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.remove('bg-orange-400');

}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementVAlueText =  element.innerText;
const value = parseInt(elementVAlueText);
return value;
 
}

function setTextElementById(elementId,value){
    const element =document.getElementById(elementId);
    element.innerText= value;

}

function getElementTextId(elementId){
    const element = document.getElementById(elementId);
    const text =element.innerText;
    return text;
}



function getRandomAlphabet(){
    // get or creat an alphabet arry 

    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');

    // console.log(alphabets);

    //get a rendom index between 0-25
    const rendomNumber = Math.random() * 25;
    const index = Math.round(rendomNumber);
    const alphabet =alphabets[index];
    // console.log(index,alphabets);
    return alphabet;
}