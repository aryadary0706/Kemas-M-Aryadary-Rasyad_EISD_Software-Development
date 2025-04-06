const prompt = require("prompt-sync")()
// Data produk
const products = [
    { name: "TV", category: "elektronik", price: 1000 },
    { name: "headphone", category: "elektronik", price: 200 },
    { name: "baju", category: "fashion", price: 50 },
    { name: "gitar", category: "musik", price: 300 },
    { name: "sepatu", category: "olahraga", price: 80 },
    { name: "kamera", category: "elektronik", price: 600 }
];


const customers = [];


function addCustomer() {
    while (true) {
        const name = prompt("Masukkan nama pelanggan (atau ketik 'selesai' untuk mengakhiri):");
        if (name.toLowerCase() === "end") {
            break;
        }

        const interestsInput = prompt("Masukkan minat pelanggan (pisahkan dengan koma):");
        const interests = interestsInput.split(",").map(interest => interest.trim().toLowerCase());

        const purchasesInput = prompt("Masukkan produk yang dibeli pelanggan (pisahkan dengan koma):");
        const purchases = purchasesInput.split(",").map(purchase => purchase.trim().toLowerCase());

        customers.push({ name, interests, purchases });
    }
}


function recommendProducts(customerName) {
    const customer = customers.find(c => c.name === customerName);

    const recommendedProducts = products.filter(product => 
        customer.interests.includes(product.category) ||  
        customer.purchases.includes(product.name)
    ).map(product => product.name);

    return recommendedProducts;
}


addCustomer();
console.log("\n");


console.log("\n");
console.log("Rekomendasi barang yang dibeli sesuai minat dan keperluan: ")
for (let i = 0; i < customers.length; i++) {
    const customer = customers[i]; 
    const recommendations = recommendProducts(customer.name); 
    console.log(`Rekomendasi untuk ${customer.name}: [ ${recommendations} ]`); 
}