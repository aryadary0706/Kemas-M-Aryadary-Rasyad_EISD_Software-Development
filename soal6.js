const menu = {
    "Ayam Goreng Krispi": { type: "Makanan", price: 15000 },
    "Ayam Puk Puk": { type: "Makanan", price: 13000 },
    "Ayam Bakar": { type: "Makanan", price: 20000 },
    "Es Teh": { type: "Minuman", price: 5000 },
    "Es Jeruk": { type: "Minuman", price: 7000 }
};

const orders = {
    "Rehan Whangsap": { "Ayam Bakar": 2, "Es Teh": 1 },
    "Amba Roni": { "Ayam Puk Puk": 1, "Es Teh": 3 },
    "Faiz Ngawi": { "Ayam Goreng Krispi": 1, "Ayam Puk Puk": 1, "Ayam Bakar": 1, "Es Teh": 1, "Es Jeruk": 1 }
};

let totalPerPerson = {}; // Nilai total yang harus dibayar per orang

for (let person in orders) { // Menghitung total yang harus dibayar + pajak transaksi
    let subtotal = 0;

    for (let item in orders[person]) { // Menghitung total yang harus dibayar sebelum pajak transaksi
        let price = menu[item].price;
        let tax = menu[item].type === "Makanan" ? 0.05 : 0.03; //Pajak makanan: 5%, minuman 3%
        let priceWithTax = price * (1 + tax);
        subtotal += priceWithTax * orders[person][item];
    }

    let totalWithTransactionTax = subtotal * 1.15; //Pajak Transaski 15%
    totalPerPerson[person] = totalWithTransactionTax.toFixed(2);
}

// Output yang lebih deskriptif
console.log("Total biaya per orang:");
for (let key in totalPerPerson) {
    console.log(`${key}: Rp ${totalPerPerson[key]}`);
}