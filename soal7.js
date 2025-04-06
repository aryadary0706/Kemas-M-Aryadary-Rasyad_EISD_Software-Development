function decryptMessage(encryptedText) {
    return encryptedText.replace(/[a-z]/g, (char) => {
        let newCharCode = char.charCodeAt(0) - 5;
        if (newCharCode < 97) { //ASCII code a = 97
            newCharCode += 26; //maju sebanyak 26 alfabet 
            //contoh: a - 5 = 94(non alfabet) += 26 = 120 (x)
        }
        return String.fromCharCode(newCharCode); //mengembalikan nilai char dari kode ASCII
    });
}

// Isi chat terenkripsi
const encryptedMessages = [
    "xfqfr bfmdz",
    "gjxtp lzj rfz ifkyfw jxi snm",
    "gwt, gjxtp qz rfz rfpfs in bfwlty lfp?",
    "fpz xfdfsl pfrz, rfz lfp ofin ufhfwpz",
    "dfsl pnwnr xynhpjw otrtp pz pnhp ifwn lwzu"
];

// Mendekripsi semua pesan
console.log("Pesan yang belum didekripsi")
encryptedMessages.forEach((msg, index) => console.log(`${index + 1}. ${msg}`))
const decryptedMessages = encryptedMessages.map(decryptMessage);

console.log("\n");
console.log("Pesan yang telah didekripsi:");
decryptedMessages.forEach((msg, index) => console.log(`${index + 1}. ${msg}`));
