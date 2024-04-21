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
    { name: "comet", chance: 0.0000833333333333, color: "#6495ED" },
    { name: "rage:heated", chance: 0.000078125, color: "#B22222" },
    { name: "permafrost", chance: 0.0000408163265306, color: "#00FFFF" },
    { name: "stormal", chance: 0.0000333333333333, color: "#4682B4" },
    { name: "aquatic", chance: 0.000025, color: "#00CED1" },
    { name: ":flushed: lobotomy", chance: 0.0000144927536232, color: "#FF69B4" },
    { name: "nautilus", chance: 0.0000142857142857, color: "#2F4F4F" },
    { name: "exotic", chance: 0.0000100001, color: "#FFD700" }, // This rarity will cycle through rainbow colors
    { name: "undead: Devil", chance: 0.00001, color: "#8B0000" },
    { name: "diaboli: Void", chance: 0.0000099601596016, color: "#551A8B" },
    { name: "bounded", chance: 0.000005, color: "#A52A2A" },
    { name: "celestial", chance: 0.00000285714285714, color: "#FFFACD" },
    { name: "galaxy", chance: 0.000002, color: "#8A2BE2" },
    { name: "lunar : Full moon", chance: 0.000002, color: "#F0E68C" },
    { name: "twilight", chance: 0.00000166666666667, color: "#D8BFD8" },
    { name: "kyawthuite", chance: 0.00000117647058824, color: "#F5F5DC" },
    { name: "Uwu", chance: 0.00000112485939, color: "#FFC0CB" },
    { name: "arcane", chance: 0.000001, color: "#9932CC" },
    { name: "starscourge", chance: 0.000001, color: "#9400D3" },
    { name: "magnetic : reverse polarity", chance: 0.0000009765625, color: "#B0C4DE" },
    { name: "gravitational", chance: 0.0000005, color: "#696969" },
    { name: "bounded :unbound", chance: 0.0000005, color: "#A52A2A" },
    { name: "virtual", chance: 0.0000004, color: "#7F00FF" },
    { name: "sailor", chance: 0.000000333333333333, color: "#4682B4" },
    { name: "poseidon", chance: 0.000000263157894737, color: "#00BFFF" },
    { name: "aquatic: flame", chance: 0.00000025, color: "#00CED1" },
    { name: "hades", chance: 0.00000015, color: "#8B0000" },
    { name: "hyper-volt", chance: 0.000000133333333333, color: "#FFD700" },
    { name: "glitch", chance: 0.0000000819535192542, color: "#8B008B" },
    { name: "arcane : legacy", chance: 0.0000000666666666667, color: "#9932CC" },
    { name: "chromatic", chance: 0.00000005, color: "#8A2BE2" },
    { name: "arcane : dark", chance: 0.0000000333333333333, color: "#9932CC" },
    { name: "ethereal", chance: 0.0000000285714285714, color: "#7FFFD4" },
    { name: "exotic - apex", chance: 0.0000000200002, color: "#FFD700" },
    { name: "matrix", chance: 0.00000002, color: "#00008B" },
    { name: "chromatic : genesis", chance: 0.00000001, color: "#8A2BE2" },
    { name: "abyssal hunter", chance: 0.00000001, color: "#00008B" },
    { name: "impeached", chance: 0.000000005, color: "#FFA07A" },
    { name: "archangel", chance: 0.000000004, color: "#FFFACD" },
    { name: "Destiny", chance: 0.0000000263157894737, color: "#FFFFFF" },
    { name: "Ok", chance: 0.2, color: "#FFFFFF" },
    { name: "Nifty", chance: 0.00010001, color: "#FFFFFF" },
    { name: "Hades", chance: 0.00000001, color: "#8B0000" },
    { name: "Zeus", chance: 0.000001, color: "#FFFFFF" },
    { name: "Ares", chance: 0.0000000666666666667, color: "#FFFFFF" },
    { name: "Cosmic", chance: 0.00000112359550562, color: "#FFFFFF" },
    { name: "Time Machine", chance: 0.0000000384615384615, color: "#FFFFFF" },
    { name: "The Universe", chance: 0.000001, color: "#FFFFFF" },
    { name: "Ryan", chance: 0.0000000318309886184, color: "#FFFFFF" },
    { name: "Waterbending", chance: 0.00000727272727273, color: "#FFFFFF" },
    { name: "Earthbending", chance: 0.00000727272727273, color: "#FFFFFF" },
    { name: "Firebending", chance: 0.00000727272727273, color: "#FFFFFF" },
    { name: "Airbending", chance: 0.00000727272727273, color: "#FFFFFF" },
    { name: "Physics", chance: 0.000010101010101, color: "#FFFFFF" },
    { name: "Jester", chance: 0.000012865497076, color: "#FFFFFF" },
    { name: "Mr Beast", chance: 0.00000080906148867, color: "#FFFFFF" },
    { name: "Hacker", chance: 0.000000009889030319, color: "#FFFFFF" },
    { name: "Royal", chance: 0.00000810081008101, color: "#FFFFFF" },
    { name: "Fortnite", chance: 0.000242718446602, color: "#FFFFFF" },
    { name: "Google Chrome", chance: 0.00000116959064327, color: "#FFFFFF" },
    { name: "Discord", chance: 0.00000101317122594, color: "#FFFFFF" },
    { name: "Wii", chance: 0.00001, color: "#FFFFFF" },
    { name: "Something", chance: 0.013698630137, color: "#FFFFFF" },
    { name: "Bitcoin", chance: 0.00000133344448149, color: "#FFFFFF" },
    { name: "Lava", chance: 0.001001001001, color: "#FFFFFF" },
    { name: "Solar System", chance: 0.000000286532951289, color: "#FFFFFF" }
];

const craftingRequirements = {
    item1: {
        common: 1,
        rare: 3,
        divinus: 2,
        crystallized: 1
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

const shopButton = document.getElementById("shop-button");
const shopContent = document.getElementById("shop-content");

shopButton.addEventListener("click", () => {
    if (shopContent.style.display === "none") {
        shopContent.style.display = "block";
        updateShopDisplay(); // Ensure the shop display is updated each time it's opened
    } else {
        shopContent.style.display = "none";
    }
});

function updateShopDisplay() {
    const shopElement = document.querySelector(".shop");
    shopElement.innerHTML = "<h2>Shop:</h2>";

    // Display crafting recipes with a craft button for each
    Object.entries(craftingRequirements).forEach(([item, requirements]) => {
        const itemElement = document.createElement("div");
        itemElement.textContent = `Craft ${item}: `;
        
        // List out the requirements for crafting
        Object.entries(requirements).forEach(([rarity, amount], index, arr) => {
            itemElement.textContent += `${amount}x ${rarity}${index < arr.length - 1 ? ', ' : ''}`;
        });

        // Create a craft button for the item
        const craftButton = document.createElement("button");
        craftButton.textContent = `Craft ${item}`;
        craftButton.addEventListener("click", () => craftItem(item)); // Assuming craftItem function can take an item name as argument

        itemElement.appendChild(craftButton);
        itemElement.classList.add("shop-item");
        shopElement.appendChild(itemElement);
    });
}

// Initially hide the shop content
shopContent.style.display = "none";

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
        autoRollInterval = setInterval(roll, 1); // Change interval as desired (in milliseconds)
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

function craftItem(itemName) {
    const requirements = craftingRequirements[itemName];
    if (!requirements) {
        console.error("Crafting requirements not found for item:", itemName);
        return;
    }
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