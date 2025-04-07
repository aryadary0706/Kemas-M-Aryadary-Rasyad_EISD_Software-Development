function cekDuplikat(arr) {
    const checkDuplicates = [];
    let i = 0;
    let hasDuplicates = false;
    while (!hasDuplicates) {
        if (checkDuplicates.includes(arr[i])) {
            hasDuplicates = true;
            // console.log(checkDuplicates, "\n");
        }
        checkDuplicates.push(arr[i]);
        i++;
    }
    return hasDuplicates; 
}

let inputArr = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10,  12, 14, 16, 18, 20, 17, 19];

let hasil = cekDuplikat(inputArr);
console.log("Dari array ", inputArr, "\n" ,hasil ? "Ditemukan adanya duplikat" : "Ditemukan tidak ada duplikat");
