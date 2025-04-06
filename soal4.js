const prompt = require("prompt-sync")();

function cekDuplikat(arr) {
    const checkDuplicates = [];
    let i = 0;
    let hasDuplicates = false;
    while (!hasDuplicates) {
        if (checkDuplicates.includes(arr[i])) {
            hasDuplicates = true;
            console.log(checkDuplicates, "\n");
        }
        checkDuplicates.push(arr[i]);
        i++;
    }
    return hasDuplicates; 
}
let input = prompt("Masukkan rangkaian bilangan yang akan dicek (pisahkan dengan koma): ");
let inputArr = input.split(',').map(item => parseInt(item));

let hasil = cekDuplikat(inputArr);
console.log(hasil);
