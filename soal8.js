const prompt = require("prompt-sync")()
// Data produk
const products = [
    {name: "TV", category: "elektronik", price: 1000 },
    {name: "headphone", category: "elektronik", price: 200 },
    {name: "baju", category: "fashion", price: 50 },
    {name: "gitar", category: "musik", price: 300 },
    {name: "sepatu", category: "olahraga", price: 80 },
    {name: "kamera", category: "elektronik", price: 600 }
];


const customers = [
    {name: "Rina", interest: ["elektronik", "musik"], purchases: ["TV", "headphone"]},
    {name: "Budi", interest: ["fashion", "musik"], purchases: ["baju", "gitar"]},
    {name: "Hartono", interest: ["olahraga", "elektronik"], purchases: ["sepatu", "Kamera"]},
];


function recommendProducts(customerName) {
    const customer = customers.find(c => c.name === customerName);

    const recommendedProducts = products.filter(product => 
        customer.interests.includes(product.category) ||  
        customer.purchases.includes(product.name)
    ).map(product => product.name);

    return recommendedProducts;
}

console.log("\n");
console.log("Rekomendasi barang yang dibeli sesuai minat dan keperluan: ")
for (let i = 0; i < customers.length; i++) {
    const customer = customers[i]; 
    const recommendations = recommendProducts(customer.name); 
    console.log(`Rekomendasi untuk ${customer.name}: [ ${recommendations} ]`); 
}
