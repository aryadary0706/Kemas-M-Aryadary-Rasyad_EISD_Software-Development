function getCombinations(name, maxLength) {
    name = name.toLowerCase().replace(/\s/g, "");
    let uniqueCombinations = [];

    function generateCombinations(prefix, index) {
        if (prefix.length > 0 && prefix.length <= maxLength) { 
            if (!uniqueCombinations.includes(prefix)) {
                uniqueCombinations.push(prefix);
            }
        }
        if (prefix.length >= maxLength || index >= name.length) {
            return;
        }

        for (let i = index; i < name.length; i++) {
            generateCombinations(prefix + name[i], i + 1);
        }
    }

    generateCombinations("", 0);
    return uniqueCombinations.length;
}

let name = "Naip Lovyu";
let maxLength = 6;
console.log("Total kombinasi username:", getCombinations(name, maxLength));