const outputElement = document.querySelector('#output');
const btnCopy = document.querySelector('#btnCopy');
const passwordLengthElement = document.querySelector('#length');
const numberElement = document.querySelector('#number');
const capitalElement = document.querySelector('#capital');
const smallElement = document.querySelector('#small');
const symbolElement = document.querySelector('#symbols');
const frm = document.querySelector('#frm');



//Button click to copy password

btnCopy.addEventListener('click', async () => {
    const pass = outputElement.value;
    //console.log(pass);  //debugging
    if (pass) {
        await navigator.clipboard.writeText(pass);
        alert("Copy to Clipboard");
    } else {
        alert("There is no password to copy");
    }
});


/* ASCII -American Standard Code for Information Interchang
0-127
// 128-25
65-90 ----> A-Z
97-122 ----> a-z
32     ---->Space
48-57  ----->0-9 */

//String.fromCharCode(65);  //A
//String.fromCharCode(97);  //a


function generateRandomChar(min, max) {
    const limit = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

//Generates random character
//generateRandomChar(65,90);

function capitalValue(){
    return generateRandomChar(65,90); //capital
}

function smallValue(){
    return generateRandomChar(97,122); //small
}

function numberValue(){
    return generateRandomChar(48,57); //numbers
}

function symbolValue(){

    const symbols ="~`!@#$%^&*()_-+=/.{[}]\|:'<,>/?";

    return symbols[Math.floor(Math.random()*symbols.length)];
}
//symbolValue(); 