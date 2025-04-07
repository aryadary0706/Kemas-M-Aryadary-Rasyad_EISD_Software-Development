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

console.log("Apakah 'Angsa' Palindrome?", Palindrome("Angsa"));
console.log("Apakah 'KataK' Palindrome?", Palindrome("KataK"));
console.log("Apakah 'kasur empuk' Palindrome?", Palindrome("kasur empuk"));
console.log("Apakah 'Aku Suka Kamu' Palindrome?",Palindrome("Aku Suka Kamu"));
console.log("Apakah 'Ibu Ratna Antar Ubi' Palindrome", Palindrome("Ibu Ratna Antar Ubi"));
