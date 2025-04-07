function Calculate(reviews) {
    let minRating = Math.min(...reviews);
    let maxRating = Math.max(...reviews);  
    
    let total = 0;
    for (let i = 0; i < reviews.length; i++) {
        total += reviews[i];
    }
    let avgRating = parseFloat((total / reviews.length).toFixed(1));

    return [minRating, maxRating, avgRating];
}

let inputArr1 = [4.5, 2.0, 1.5, 3.0, 2.5, 4.0, 5.0, 3.5, 2.0, 1.0];
let inputArr2 = [5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5];

const Hasil1 = Calculate(inputArr1);
const Hasil2 = Calculate(inputArr2);

if (Hasil1.length > 0 && Hasil2.length > 0) {
    console.log("[Min, Max, Avg]");
    console.log(Hasil1);
    console.log("[Min, Max, Avg]");
    console.log(Hasil2);
}else{
    console.log("Tidak ada DATA RATING");
}
