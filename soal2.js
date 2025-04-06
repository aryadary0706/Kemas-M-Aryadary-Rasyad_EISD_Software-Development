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

console.log(Palindrome("Angsa"));
console.log(Palindrome("KataK"));
console.log(Palindrome("kasur empuk"));
console.log(Palindrome("Aku Suka Kamu"));
console.log(Palindrome("Ibu Ratna Antar Ubi"));
