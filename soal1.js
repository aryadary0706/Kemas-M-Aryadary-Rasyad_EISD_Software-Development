const prompt = require("prompt-sync")();

function Calculate(reviews) {
    let minRating = Math.min(...reviews); //Nilai Minimum
    let maxRating = Math.max(...reviews); //Nilai maksimum
    //...reviews = menampilkan semua elemen array reviews

    //Mengembalikan nilai rata-rata elemen pada reviews
    let total = 0;
    for (let i = 0; i < reviews.length; i++) {
        total += reviews[i];
    }
    let avgRating = parseFloat((total / reviews.length).toFixed(1));

    return [minRating, maxRating, avgRating];
}

let input = prompt("Masukkan rating aplikasi (pisahkan dengan koma): "); //Contoh Input: 4.5, 3, 5, 2.8,...
let inputArr = input.split(',').map(item => parseFloat(item)).filter(num => !isNaN(num));

if (inputArr.length > 0) {
    let result = Calculate(inputArr)
    console.log("[Min, Max, Avg]");
    console.log(result);
}else{
    console.log("Tidak ada DATA RATING");
}

