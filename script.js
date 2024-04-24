const rarities = [
    { name: "common", chance: 0.5, color: "#808080" },
    { name: "uncommon", chance: 0.25, color: "#808000" },
    { name: "good", chance: 0.1, color: "#00FF00" },
    { name: "natural", chance: 0.125, color: "#39FF14" }, // Neon Green
    { name: "rare", chance: 0.025, color: "#15317E" },
    { name: "divinus", chance: 0.0125, color: "#FFC0CB" },
    { name: "crystallized", chance: 0.00625, color: "#800080" },
    { name: "rage", chance: 0.003125, color: "#800517" },
    { name: "topaz", chance: 0.0025, color: "#E2F516" },
    { name: "glacier", chance: 0.001953125, color: "#14A3C7" },
    { name: "wind", chance: 0.0016666666666666667, color: "#B3D9D9" },
    { name: "ruby", chance: 0.0014285714285714286, color: "#F62217" },
    { name: "emerald", chance: 0.001, color: "#50C878" },
    { name: "gilded", chance: 0.0009765625, color: "#E2F516" },
    { name: "jackpot", chance: 0.0006464166666666667, color: "#FFFFFF" },
    { name: "sapphire", chance: 0.000625, color: "#0000FF" },
    { name: "aquamarine", chance: 0.0005555555555555556, color: "#7FFFD4" },
    { name: "diaboli", chance: 0.00049800796812749, color: "#8A2BE2" },
    { name: "precious", chance: 0.00048828125, color: "#FFD700" },
    { name: "undefined", chance: 0.00045004500450045, color: "#B0C4DE" },
    { name: "magnetic", chance: 0.00048828125, color: "#B0C4DE" },
    { name: "sidereum", chance: 0.000244140625, color: "#778899" },
    { name: "bleeding", chance: 0.00022502250225, color: "#DC143C" },
    { name: "lunar", chance: 0.0002, color: "#F0E68C" },
    { name: "solar", chance: 0.0002, color: "#FFD700" },
    { name: "starlight", chance: 0.0002, color: "#EEE8AA" },
    { name: ":flushed:", chance: 0.00014492753623, color: "#FF69B4" },
    { name: "undead", chance: 0.0001, color: "#696969" },
    { name: "comet", chance: 8.33333333333e-5, color: "#6495ED" },
    { name: "rage:heated", chance: 7.8125e-5, color: "#B22222" },
    { name: "permafrost", chance: 4.08163265306e-5, color: "#00FFFF" },
    { name: "stormal", chance: 3.33333333333e-5, color: "#4682B4" },
    { name: "aquatic", chance: 2.5e-5, color: "#00CED1" },
    { name: ":flushed: lobotomy", chance: 1.44927536232e-5, color: "#FF69B4" },
    { name: "nautilus", chance: 1.42857142857e-5, color: "#2F4F4F" },
    { name: "exotic", chance: 1.0000100001e-5, color: "#FFD700" }, // This rarity will cycle through rainbow colors
    { name: "undead: Devil", chance: 1e-5, color: "#8B0000" },
    { name: "diaboli: Void", chance: 9.9601596016e-6, color: "#551A8B" },
    { name: "bounded", chance: 5e-6, color: "#A52A2A" },
    { name: "celestial", chance: 2.85714285714e-6, color: "#FFFACD" },
    { name: "galaxy", chance: 2e-6, color: "#8A2BE2" },
    { name: "lunar : Full moon", chance: 2e-6, color: "#F0E68C" },
    { name: "twilight", chance: 1.66666666667e-6, color: "#D8BFD8" },
    { name: "kyawthuite", chance: 1.17647058824e-6, color: "#F5F5DC" },
    { name: "Uwu", chance: 1.12485939e-6, color: "#FFC0CB" },
    { name: "arcane", chance: 1e-6, color: "#9932CC" },
    { name: "starscourge", chance: 1e-6, color: "#9400D3" },
    { name: "magnetic : reverse polarity", chance: 9.765625e-7, color: "#B0C4DE" },
    { name: "gravitational", chance: 5e-7, color: "#696969" },
    { name: "bounded :unbound", chance: 5e-7, color: "#A52A2A" },
    { name: "virtual", chance: 4e-7, color: "#7F00FF" },
    { name: "sailor", chance: 3.33333333333e-7, color: "#4682B4" },
    { name: "poseidon", chance: 2.63157894737e-7, color: "#00BFFF" },
    { name: "aquatic: flame", chance: 2.5e-7, color: "#00CED1" },
    { name: "hades", chance: 1.5e-7, color: "#8B0000" },
    { name: "hyper-volt", chance: 1.33333333333e-7, color: "#FFD700" },
    { name: "glitch", chance: 8.19535192542e-8, color: "#8B008B" },
    { name: "arcane : legacy", chance: 6.66666666667e-8, color: "#9932CC" },
    { name: "chromatic", chance: 5e-8, color: "#8A2BE2" },
    { name: "arcane : dark", chance: 3.33333333333e-8, color: "#9932CC" },
    { name: "ethereal", chance: 2.85714285714e-8, color: "#7FFFD4" },
    { name: "exotic - apex", chance: 2.0000200002e-8, color: "#FFD700" },
    { name: "matrix", chance: 2e-8, color: "#00008B" },
    { name: "chromatic : genesis", chance: 1.000001e-8, color: "#8A2BE2" },
    { name: "abyssal hunter", chance: 1e-8, color: "#00008B" },
    { name: "impeached", chance: 5e-9, color: "#FFA07A" },
    { name: "archangel", chance: 4e-9, color: "#FFFACD" }
];

const craftingRequirements = {
    item1: {
        common: 1,
        rare: 3,
        divinus: 2,
        crystallized: 1
    },
    luckGlove: {
        divinus: 2,
        crystallized: 1,
        rare: 3
    }
};

// Define the colors of the rainbow to cycle through
const rainbowColors = ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"];
let currentColorIndex = 0;

// Function to update the "exotic" rarity's color
const updateExoticColor = () => {
    // Find the "exotic" rarity object
    const exoticRarity = rarities.find(rarity => rarity.name === "exotic");
    if (exoticRarity) {
        // Update the color
        exoticRarity.color = rainbowColors[currentColorIndex];
        currentColorIndex = (currentColorIndex + 1) % rainbowColors.length; // Cycle through the colors
        
        // Here, you should add code to update the UI accordingly
        // For example, if you're displaying the rarities in a list, you might need to refresh that list
    }
};

// Start cycling through colors every second (1000 milliseconds)
setInterval(updateExoticColor, 1000);

const backpack = [];

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

document.getElementById("roll-btn").addEventListener("click", roll);
document.getElementById("auto-roll-btn").addEventListener("click", toggleAutoRoll);
document.getElementById("craft-btn").addEventListener("click", craftItem);
document.getElementById("sort-asc-btn").addEventListener("click", sortByRarityAscending);
document.getElementById("sort-desc-btn").addEventListener("click", sortByRarityDescending);
document.getElementById('save-btn').addEventListener('click', saveGameState);
document.getElementById('load-btn').addEventListener('change', loadGameState);
document.getElementById("craft-luck-glove-btn").addEventListener("click", craftLuckGlove);

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
    backpack.push(item);
    updateBackpackDisplay();

    // If the item is a Luck Glove, show the "Craft Luck Glove" button
    if (item === "Luck Glove") {
        const craftLuckGloveButton = document.getElementById("craft-luck-glove-btn");
        craftLuckGloveButton.style.display = "block";
    }
}

function updateBackpackDisplay() {
    const backpackElement = document.querySelector(".backpack");
    backpackElement.innerHTML = "<h2>Backpack:</h2>";

    // Count the occurrences of each rarity in the backpack
    const rarityCounts = {};
    backpack.forEach(item => {
        rarityCounts[item] = (rarityCounts[item] || 0) + 1;
    });

    // Display each rarity present in the backpack with its count and color
    Object.entries(rarityCounts).forEach(([rarityName, count]) => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `${rarityName} (${count})`;
        itemElement.classList.add("backpack-item");

        // Find the rarity object to get the color
        const rarity = rarities.find(r => r.name === rarityName);
        if (rarity && rarity.color) {
            itemElement.style.color = rarity.color; // Set the text color based on the rarity's color
        }

        backpackElement.appendChild(itemElement);
    });
}

// Function to encrypt the game state data
function encrypt(data) {
    const encryptedData = btoa(data); // Using Base64 encoding for encryption
    return encryptedData;
}

// Function to decrypt the encrypted game state data
function decrypt(data) {
    const decryptedData = atob(data); // Using Base64 decoding for decryption
    return decryptedData;
}

// Function to save game state to a text file
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
        autoRollInterval = setInterval(roll, 0.00001); // Change interval as desired (in milliseconds)
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

function craftLuckGlove() {
    const requirements = craftingRequirements.luckGlove;
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
    addToBackpack("Luck Glove");
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