const rarities = [
    { name: "common", chance: 1/2 },
    { name: "uncommon", chance: 1/4 },
    { name: "good", chance: 1/5 },
    { name: "natural", chance: 1/8 },
    { name: "rare", chance: 1/16 },
    { name: "divinus", chance: 1/32 },
    { name: "crystallized", chance: 1/64 },
    { name: "rage", chance: 1/128 },
    { name: "topaz", chance: 1/150 },
    { name: "glacier", chance: 1/256 }
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
let autoRollInterval;

document.getElementById("roll-btn").addEventListener("click", roll);
document.getElementById("auto-roll-btn").addEventListener("click", toggleAutoRoll);
document.getElementById("craft-btn").addEventListener("click", craftItem);

function roll() {
    const rand = Math.random();
    let rarity = null;

    for (const item of rarities) {
        if (rand < item.chance) {
            rarity = item.name;
            break;
        }
    }

    if (rarity) {
        addToBackpack(rarity);
    } else {
        console.error("Error: No rarity found.");
    }
}

function addToBackpack(item) {
    backpack.push(item);
    updateBackpackDisplay();
}

function updateBackpackDisplay() {
    const backpackElement = document.querySelector(".backpack");
    backpackElement.innerHTML = "<h2>Backpack:</h2>";
    backpack.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.textContent = item;
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
