const rarities = [
    { name: "common", chance: 0.5 },
    { name: "uncommon", chance: 0.25 },
    { name: "good", chance: 0.1 },
    { name: "natural", chance: 0.05 },
    { name: "rare", chance: 0.025 },
    { name: "divinus", chance: 0.0125 },
    { name: "crystallized", chance: 0.00625 },
    { name: "rage", chance: 0.003125 },
    { name: "topaz", chance: 0.0025 },
    { name: "glacier", chance: 0.001953125 },
    { name: "wind", chance: 0.0016666666666666667 },
    { name: "ruby", chance: 0.0014285714285714286 },
    { name: "emerald", chance: 0.001 },
    { name: "gilded", chance: 0.0009765625 },
    { name: "jackpot", chance: 0.0006464166666666667 },
    { name: "sapphire", chance: 0.000625 },
    { name: "aquamarine", chance: 0.0005555555555555556 },
    { name: "diaboli", chance: 0.00049800796812749 },
    { name: "precious", chance: 0.00048828125 },
    { name: "undefined", chance: 0.00045004500450045 },
    { name: "magnetic", chance: 0.00048828125 },
    { name: "sidereum", chance: 0.000244140625 },
    { name: "bleeding", chance: 0.00022502250225 },
    { name: "lunar", chance: 0.0002 },
    { name: "solar", chance: 0.0002 },
    { name: "starlight", chance: 0.0002 },
    { name: ":flushed:", chance: 0.00014492753623 },
    { name: "undead", chance: 0.0001 },
    { name: "comet", chance: 8.33333333333e-5 },
    { name: "rage:heated", chance: 7.8125e-5 },
    { name: "permafrost", chance: 4.08163265306e-5 },
    { name: "stormal", chance: 3.33333333333e-5 },
    { name: "aquatic", chance: 2.5e-5 },
    { name: ":flushed: lobotomy", chance: 1.44927536232e-5 },
    { name: "nautilus", chance: 1.42857142857e-5 },
    { name: "exotic", chance: 1.0000100001e-5 },
    { name: "undead: Devil", chance: 1e-5 },
    { name: "diaboli: Void", chance: 9.9601596016e-6 },
    { name: "bounded", chance: 5e-6 },
    { name: "celestial", chance: 2.85714285714e-6 },
    { name: "galaxy", chance: 2e-6 },
    { name: "lunar : Full moon", chance: 2e-6 },
    { name: "twilight", chance: 1.66666666667e-6 },
    { name: "kyawthuite", chance: 1.17647058824e-6 },
    { name: "arcane", chance: 1e-6 },
    { name: "starscourge", chance: 1e-6 },
    { name: "magnetic : reverse polarity", chance: 9.765625e-7 },
    { name: "gravitational", chance: 5e-7 },
    { name: "bounded :unbound", chance: 5e-7 },
    { name: "virtual", chance: 4e-7 },
    { name: "sailor", chance: 3.33333333333e-7 },
    { name: "poseidon", chance: 2.63157894737e-7 },
    { name: "aquatic: flame", chance: 2.5e-7 },
    { name: "hades", chance: 1.5e-7 },
    { name: "hyper-volt", chance: 1.33333333333e-7 },
    { name: "glitch", chance: 8.19535192542e-8 },
    { name: "arcane : legacy", chance: 6.66666666667e-8 },
    { name: "chromatic", chance: 5e-8 },
    { name: "arcane : dark", chance: 3.33333333333e-8 },
    { name: "ethereal", chance: 2.85714285714e-8 },
    { name: "exotic - apex", chance: 2.0000200002e-8 },
    { name: "matrix", chance: 2e-8 },
    { name: "chromatic : genesis", chance: 1.000001e-8 },
    { name: "abyssal hunter", chance: 1e-8 },
    { name: "impeached", chance: 5e-9 },
    { name: "archangel", chance: 4e-9 }
];

const craftingRequirements = {
    item1: {
        common: 1,
        rare: 3,
        divinus: 2,
        crystallized: 1
    }
};

const backpack = [];

// Calculate the sum of all rarity chances
const sumOfChances = rarities.reduce((total, rarity) => total + rarity.chance, 0);

// Normalize the rarity chances
for (const rarity of rarities) {
    rarity.chance /= sumOfChances;
}

let autoRollInterval;

document.getElementById("roll-btn").addEventListener("click", roll);
document.getElementById("auto-roll-btn").addEventListener("click", toggleAutoRoll);
document.getElementById("craft-btn").addEventListener("click", craftItem);

document.getElementById("sort-rarities-btn").addEventListener("click", sortRarities);

function sortRarities() {
    rarities.sort((a, b) => a.chance - b.chance);
    updateRaritiesDisplay();
}

function updateRaritiesDisplay() {
    const raritiesElement = document.querySelector(".rarities");
    raritiesElement.innerHTML = "<h2>Rarities:</h2>";

    // Display each rarity with its chance
    rarities.forEach(rarity => {
        const rarityElement = document.createElement("div");
        rarityElement.textContent = `${rarity.name} (${rarity.chance})`;
        rarityElement.classList.add("rarity-item");
        raritiesElement.appendChild(rarityElement);
    });
}

function roll() {
    const rand = Math.random();
    console.log("Random number generated:", rand);

    let lowerBound = 0;

    for (const item of rarities) {
        const upperBound = lowerBound + item.chance;

        if (rand >= lowerBound && rand < upperBound) {
            addToBackpack(item.name);
            return;
        }

        lowerBound = upperBound;
    }

    console.error("Error: No rarity found.");
}

function addToBackpack(item) {
    backpack.push(item);
    updateBackpackDisplay();
}

function updateBackpackDisplay() {
    const backpackElement = document.querySelector(".backpack");
    backpackElement.innerHTML = "<h2>Backpack:</h2>";

    // Count the occurrences of each rarity
    const rarityCounts = {};
    backpack.forEach(item => {
        rarityCounts[item] = (rarityCounts[item] || 0) + 1;
    });

    // Sort the rarity counts object by rarity name alphabetically
    const sortedRarityCounts = Object.entries(rarityCounts)
        .sort(([rarityA], [rarityB]) => rarityA.localeCompare(rarityB));

    // Display each rarity with its count
    sortedRarityCounts.forEach(([rarity, count]) => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `${rarity} (${count})`;
        itemElement.classList.add("backpack-item");
        backpackElement.appendChild(itemElement);
    });
}

function toggleAutoRoll() {
    if (autoRollInterval) {
        clearInterval(autoRollInterval);
        autoRollInterval = null;
    } else {
        autoRollInterval = setInterval(roll, 1000); // Change interval as desired (in milliseconds)
    }
}

function craftItem() {
    const requirements = craftingRequirements.item1;
    for (const rarity in requirements) {
        const requiredAmount = requirements[rarity];
        const availableAmount = countItemsInBackpack(rarity);
        if (availableAmount < requiredAmount) {
            console.error(`Not enough ${rarity} for crafting.`);
            return;
        }
    }
    // If all requirements are met, remove items from backpack and add crafted item
    for (const rarity in requirements) {
        const requiredAmount = requirements[rarity];
        for (let i = 0; i < requiredAmount; i++) {
            removeItemFromBackpack(rarity);
        }
    }
    addToBackpack("Crafted Item");
}

function countItemsInBackpack(item) {
    return backpack.filter(i => i === item).length;
}

function removeItemFromBackpack(item) {
    const index = backpack.indexOf(item);
    if (index !== -1) {
        backpack.splice(index, 1);
    }
    updateBackpackDisplay();
}