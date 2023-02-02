const outputElement = document.querySelector('#output');
const btnCopy = document.querySelector('#btnCopy');
const passwordLengthElement = document.querySelector('#length');
const numberElement = document.querySelector('#number');
const capitalElement = document.querySelector('#capital');
const smallElement = document.querySelector('#small');
const symbolElement = document.querySelector('#symbol');
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

//Examples
//Math.random(); // 1 
//Math.random()*5; // 2  5  4 

//Math.floor(Math.random()*50);
//String.fromCharCode(65);  //A
//String.fromCharCode(97);  //a



function generateRandomChar(min, max) {
    const limit = max - min + 1;  //26 Characters A-Z
    return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}

//generateRandomChar(65,90); //A
//generateRandomChar(97,122); //A

function capitalValue() {
    return generateRandomChar(65, 90);  //Capital letters
}

function smallValue() {
    return generateRandomChar(97, 122);  //Small letters
}

function numberValue() {
    return generateRandomChar(48, 57);  //Numbers 0 - 9
}

function symbolValue() {
    const symbols = "!@#$%^&*()_-+=/:;.";
    return symbols[Math.floor(Math.random() * symbols.length)];
}


const functionArray = [
    {
        element: numberElement,
        fun: numberValue
    },

    {
        element: capitalElement,
        fun: capitalValue
    },

    {
        element: smallElement,
        fun: smallValue
    },

    {
        element: symbolElement,
        fun: symbolValue
    },

];

//Click Submit button =>Generate Password

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const limit = passwordLengthElement.value;

    let generatedPassword = "";

    const funArray = functionArray.filter(({ element }) => element.checked);    // Eg: numbers and capitals 15ABC48G
    //console.log(funArray);

    for (i = 0; i < limit; i++) {
        const index = Math.floor(Math.random() * funArray.length);  //Eg:2
        const letter = funArray[index].fun();
        generatedPassword += letter;

    }

    outputElement.value = generatedPassword;

}); 


