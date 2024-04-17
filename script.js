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
    { name: "undefined", chance: 0.00045004500450045 }
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

let isBackpackOpen = false;

document.querySelector(".backpack").addEventListener("click", toggleBackpack);

function toggleBackpack() {
    const backpackContent = document.querySelector(".backpack-content");
    if (!isBackpackOpen) {
        updateBackpackDisplay();
        backpackContent.style.display = "block";
    } else {
        backpackContent.style.display = "none";
    }
    isBackpackOpen = !isBackpackOpen;
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

    // Display each rarity with its count
    for (const rarity in rarityCounts) {
        const count = rarityCounts[rarity];
        const itemElement = document.createElement("div");
        itemElement.textContent = `${rarity} (${count})`;
        itemElement.classList.add("backpack-item");
        backpackElement.appendChild(itemElement);
    }
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
