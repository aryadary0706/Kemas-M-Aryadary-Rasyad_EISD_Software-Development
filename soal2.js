const prompt = require("prompt-sync")();

function Palindrome(text){
    let cleanedText = text.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    // console.log(cleanedText)
    let reversedText = cleanedText.split('').reverse().join('');
    // console.log(reversedText)
    
    if (cleanedText === reversedText) {
        return "eureeka!";
    } else {
        return "suka blyat";
    }
}

let input = prompt("Masukkan kata/kalimat yang ingin dicek: ");
console.log(Palindrome(input));
