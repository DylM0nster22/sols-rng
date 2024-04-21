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
    { name: "Uwu", chance: 1.12485939e-6 },
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

const craftingRecipes = [
    {
        name: "Gear Basing",
        requirements: {
            common: 1,
            rare: 1,
            good: 1,
            uncommon: 1
        }
    },
    {
        name: "luck glove",
        requirements: {
            rare: 3,
            divinus: 2,
            crystallized: 1,
            rage: 1
        }
    }
    // ... (same as before)
];

const backpack = [];
const craftedItems = [];

const shopButton = document.getElementById("shop-button");
const shopContent = document.getElementById("shop-content");

shopButton.addEventListener("click", () => {
    if (shopContent.style.display === "none") {
        shopContent.style.display = "block";
    } else {
        shopContent.style.display = "none";
    }
});

const backpackButton = document.getElementById("backpack-button");
const backpackContent = document.getElementById("backpack-content");

backpackButton.addEventListener("click", () => {
    if (backpackContent.style.display === "none") {
        backpackContent.style.display = "block";
    } else {
        backpackContent.style.display = "none";
    }
});

// Calculate the sum of all rarity chances
const sumOfChances = rarities.reduce((total, rarity) => total + rarity.chance, 0);

// Normalize the rarity chances
for (const rarity of rarities) {
    rarity.chance /= sumOfChances;
}

let autoRollInterval;

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("roll-btn").addEventListener("click", roll);
    document.getElementById("auto-roll-btn").addEventListener("click", toggleAutoRoll);
    document.getElementById("craft-btn").addEventListener("click", craftItem);
    document.getElementById("sort-asc-btn").addEventListener("click", sortByRarityAscending);
    document.getElementById("sort-desc-btn").addEventListener("click", sortByRarityDescending);
    document.getElementById('save-btn').addEventListener('click', saveGameState);
    document.getElementById('load-btn').addEventListener('change', loadGameState);
});

function roll() {
    const rand = Math.random();
  
    // Create a cumulative probability array for faster lookups
    let cumulativeProbabilities = [];
    let currentProbability = 0;
    for (const rarity of rarities) {
      currentProbability += rarity.chance;
      cumulativeProbabilities.push(currentProbability);
    }
  
    // Check if rand is less than the first cumulative probability (common case)
    if (rand < cumulativeProbabilities[0]) {
        addToBackpack(rarities[0].name);
        return;
    }

    // Find the rarity using binary search for the rest of the array
    let lowerIndex = 0;
    let upperIndex = cumulativeProbabilities.length - 1;
  
    while (lowerIndex <= upperIndex) {
      const middleIndex = Math.floor((lowerIndex + upperIndex) / 2);
      if (rand >= cumulativeProbabilities[middleIndex - 1] && rand < cumulativeProbabilities[middleIndex]) {
        addToBackpack(rarities[middleIndex].name);
        return; 
      } else if (rand < cumulativeProbabilities[middleIndex]) {
        upperIndex = middleIndex - 1;
      } else {
        lowerIndex = middleIndex + 1;
      }
    }
  
    console.error("Error: No rarity found.");
}

function addToBackpack(item) {
    if (rarities.some(rarity => rarity.name === item)) {
        backpack.push(item);
    } else {
        const existingItem = craftedItems.find(i => i.name === item);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            craftedItems.push({ name: item, quantity: 1 });
        }
    }
    updateBackpackDisplay();
}

function updateBackpackDisplay() {
    const backpackElement = document.querySelector(".backpack");
    backpackElement.innerHTML = "<h2>Backpack:</h2>";

    // Display rarities
    const rarityCounts = {};
    backpack.forEach(item => {
        rarityCounts[item] = (rarityCounts[item] || 0) + 1;
    });
    Object.entries(rarityCounts).forEach(([rarity, count]) => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `${rarity} (${count})`;
        itemElement.classList.add("backpack-item");
        backpackElement.appendChild(itemElement);
    });

    // Display crafted items
    craftedItems.forEach(item => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `${item.name} (${item.quantity})`;
        itemElement.classList.add("backpack-item");
        backpackElement.appendChild(itemElement);
    });
}

function craftItem() {
    const recipeName = document.getElementById("recipe-name").value;
    
    let canCraft = true;
    const missingItems = {};
    
    const recipe = craftingRecipes.find(r => r.name === recipeName);
    
    if (!recipe) {
        throw new Error("No recipe found with the name '" + recipeName + "'.");
    }

    for (const item in recipe.requirements) {
        const requiredAmount = recipe.requirements[item];
        let availableAmount = 0;

        if (rarities.some(rarity => rarity.name === item)) {
            availableAmount = countItemsInBackpack(item);
        } else {
            const craftedItem = craftedItems.find(i => i.name === item);
            availableAmount = craftedItem ? craftedItem.quantity : 0;
        }

        if (availableAmount < requiredAmount) {
            canCraft = false;
            missingItems[item] = requiredAmount - availableAmount;
        }
    }

    if (canCraft) {
        for (const item in recipe.requirements) {
            const requiredAmount = recipe.requirements[item];

            if (rarities.some(rarity => rarity.name === item)) {
                for (let i = 0; i < requiredAmount; i++) {
                    removeItemFromBackpack(item);
                }
            } else {
                const craftedItem = craftedItems.find(i => i.name === item);
                craftedItem.quantity -= requiredAmount;
            }
        }
        const craftedItemName = recipe.name; // Use the name from the recipe object
        addToBackpack(craftedItemName);
        alert("Item crafted successfully!");
    } else {
        let missingItemsMessage = "You don't have enough items to craft. Missing:\n";
        Object.entries(missingItems).forEach(([item, amount]) => {
            missingItemsMessage += `${amount} ${item}\n`;
        });
        alert(missingItemsMessage);
    }
}

function sortByRarityAscending() {
    console.log("Sorting backpack items by rarity in ascending order...");
    backpack.sort((item1, item2) => {
        const rarityIndex1 = rarities.findIndex(rarity => rarity.name === item1);
        const rarityIndex2 = rarities.findIndex(rarity => rarity.name === item2);
        return rarityIndex1 - rarityIndex2;
    });
    updateBackpackDisplay();
}

function sortByRarityDescending() {
    console.log("Sorting backpack items by rarity in descending order...");
    backpack.sort((item1, item2) => {
        const rarityIndex1 = rarities.findIndex(rarity => rarity.name === item1);
        const rarityIndex2 = rarities.findIndex(rarity => rarity.name === item2);
        return rarityIndex2 - rarityIndex1;
    });
    updateBackpackDisplay();
}

function generateShopItems() {
    const shopElement = document.querySelector(".shop");
    shopElement.innerHTML = "<h2>Shop:</h2>";

    craftingRecipes.forEach((recipe) => {
        const itemElement = document.createElement("div");
        itemElement.classList.add("shop-item");

        const nameElement = document.createElement("h3");
        nameElement.textContent = recipe.name;
        itemElement.appendChild(nameElement);

        const requirementsElement = document.createElement("p");
        requirementsElement.textContent = "Requirements: ";
        Object.entries(recipe.requirements).forEach(([rarity, amount]) => {
            requirementsElement.textContent += `${amount} ${rarity}, `;
        });
        requirementsElement.textContent = requirementsElement.textContent.slice(0, -2); // Remove the trailing comma and space
        itemElement.appendChild(requirementsElement);

        const craftButton = document.createElement("button");
        craftButton.textContent = "Craft";
        craftButton.addEventListener("click", () => craftItem(recipe.requirements, recipe.name)); // Pass recipe name
        itemElement.appendChild(craftButton);

        shopElement.appendChild(itemElement);
    });
}

// Call generateShopItems() to populate the shop initially
generateShopItems();

// Function to encrypt the game state data
function encrypt(data) {
    const encryptedData = btoa(data); // Using Base64 encoding for encryption
    return encryptedData;
}

function decrypt(data) {
    const decryptedData = atob(data); // Using Base64 decoding for decryption
    return decryptedData;
}

function saveGameState() {
    const encryptedData = encrypt(JSON.stringify(backpack)); // Encrypt the game data
    const blob = new Blob([encryptedData], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    // Create a link element and click it to trigger file download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'game_save.txt';
    a.click();

    // Clean up by revoking the object URL
    URL.revokeObjectURL(url);
}

// Function to load game state from a text file
function loadGameState(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const encryptedData = reader.result;
        const decryptedData = decrypt(encryptedData); // Decrypt the encrypted game data
        const gameData = JSON.parse(decryptedData); // Parse JSON string to JavaScript array
        backpack.length = 0; // Clear current backpack
        gameData.forEach(item => backpack.push(item)); // Update backpack with loaded data
        updateBackpackDisplay(); // Update UI to reflect changes
    };

    reader.readAsText(file);
}

function toggleAutoRoll() {
    if (autoRollInterval) {
        clearInterval(autoRollInterval);
        autoRollInterval = null;
    } else {
        autoRollInterval = setInterval(roll, 1); // Change interval as desired (in milliseconds)
    }
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