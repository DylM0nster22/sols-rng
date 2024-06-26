const rarities = [
    { name: "common 1/2", chance: 0.5, color: "#000000" },
    { name: "uncommon 1/4", chance: 0.25, color: "#808000" },
    { name: "good 1/5", chance: 0.2, color: "#00FF00" },
    { name: "natural 1/8", chance: 0.125, color: "#39FF14" }, // Neon Green
    { name: "rare 1/16", chance: 0.025, color: "#15317E" },
    { name: "divinus 1/32", chance: 0.0125, color: "#FFC0CB" },
    { name: "crystallized 1/64", chance: 0.00625, color: "#800080" },
    { name: "rage 1/128", chance: 0.003125, color: "#800517" },
    { name: "topaz 1/150", chance: 0.0025, color: "#E2F516" },
    { name: "glacier 1/256", chance: 0.001953125, color: "#14A3C7" },
    { name: "wind 1/300", chance: 0.0016666666666666667, color: "#B3D9D9" },
    { name: "ruby 1/350", chance: 0.0014285714285714286, color: "#F62217" },
    { name: "emerald 1/500", chance: 0.001, color: "#50C878" },
    { name: "gilded 1/512", chance: 0.002, color: "#E2F516" },
    { name: "jackpot 1/777", chance: 0.00128700129, color: "#FFFFFF" },
    { name: "sapphire 1/800", chance: 0.00125, color: "#0000FF" },
    { name: "aquamarine 1/900", chance: 0.00111111111, color: "#7FFFD4" },
    { name: "diaboli 1/1,004", chance: 0.000996015936, color: "#8A2BE2" },
    { name: "precious 1/1,024", chance: 0.0009765625, color: "#FFD700" },
    { name: "undefined 1/1,111", chance: 0.000900090009, color: "#B0C4DE" },
    { name: "magnetic 1/2,048", chance: 0.00048828125, color: "#B0C4DE" },
    { name: "sidereum 1/4,096", chance: 0.000244140625, color: "#778899" },
    { name: "bleeding 1/4,444", chance: 0.00022502250225, color: "#DC143C" },
    { name: "lunar 1/5,000", chance: 0.0002, color: "#F0E68C" },
    { name: "solar 1/5,000", chance: 0.0002, color: "#FFD700" },
    { name: "starlight 1/5,000", chance: 0.0002, color: "#EEE8AA" },
    { name: ":flushed: 1/6,000", chance: 0.00014492753623, color: "#FF69B4" },
    { name: "undead 1/10,000", chance: 0.0001, color: "#696969" },
    { name: "comet 1/12,000", chance: 8.33333333333e-5, color: "#6495ED" },
    { name: "rage:heated 1/128,00", chance: 7.8125e-5, color: "#B22222" },
    { name: "permafrost 1/24,500", chance: 4.08163265306e-5, color: "#00FFFF" },
    { name: "stormal 1/30,000", chance: 3.33333333333e-5, color: "#4682B4" },
    { name: "aquatic 1/40,000", chance: 2.5e-5, color: "#00CED1" },
    { name: ":flushed: lobotomy 1/69,000", chance: 1.44927536232e-5, color: "#FF69B4" },
    { name: "nautilus 1/70,000", chance: 1.42857142857e-5, color: "#2F4F4F" },
    { name: "exotic 1/99,999", chance: 1.0000100001e-5, color: "#FFD700" }, // This rarity will cycle through rainbow colors
    { name: "undead: Devil 1/100,000", chance: 1e-5, color: "#8B0000" },
    { name: "diaboli: Void 1/100,400", chance: 9.9601596016e-6, color: "#551A8B" },
    { name: "jade 1/125,000", chance: 9.9601596016e-6, color: "#551A8B" },
    { name: "bounded 1/200,000", chance: 5e-6, color: "#A52A2A" },
    { name: "celestial 1/350,000", chance: 2.85714285714e-6, color: "#FFFACD" },
    { name: "galaxy 1/500,000", chance: 2e-6, color: "#8A2BE2" },
    { name: "lunar : Full moon 1/500,000", chance: 2e-6, color: "#F0E68C" },
    { name: "twilight 1/600,000", chance: 1.66666666667e-6, color: "#D8BFD8" },
    { name: "kyawthuite 1/850,000", chance: 1.17647058824e-6, color: "#F5F5DC" },
    { name: "Uwu 1/900,000", chance: 1.12485939e-6, color: "#FFC0CB" },
    { name: "arcane 1/1,000,000", chance: 1e-6, color: "#9932CC" },
    { name: "starscourge 1/1,000,000", chance: 1e-6, color: "#9400D3" },
    { name: "magnetic : reverse polarity 1/1,024,000", chance: 9.765625e-7, color: "#B0C4DE" },
    { name: "gravitational 1/2,000,000", chance: 5e-7, color: "#696969" },
    { name: "bounded :unbound 1/2,000,000", chance: 5e-7, color: "#A52A2A" },
    { name: "virtual 1/2,500,000", chance: 4e-7, color: "#7F00FF" },
    { name: "sailor 1/3,000,000", chance: 3.33333333333e-7, color: "#4682B4" },
    { name: "poseidon 1/3,800,000", chance: 2.63157894737e-7, color: "#00BFFF" },
    { name: "aquatic: flame 1/4,000,000", chance: 2.5e-7, color: "#00CED1" },
    { name: "hades 1/6,666,666", chance: 1.5e-7, color: "#8B0000" },
    { name: "hyper-volt 1/7,500,000", chance: 1.33333333333e-7, color: "#FFD700" },
    { name: "glitch 1/12,210,110", chance: 8.19535192542e-8, color: "#8B008B" },
    { name: "arcane : legacy 1/15,000,000", chance: 6.66666666667e-8, color: "#9932CC" },
    { name: "chromatic 1/20,000,000", chance: 5e-8, color: "#8A2BE2" },
    { name: "arcane : dark 1/30,000,000", chance: 3.33333333333e-8, color: "#9932CC" },
    { name: "ethereal 1/35,000,000", chance: 2.85714285714e-8, color: "#7FFFD4" },
    { name: "exotic - apex 1/49,999,500", chance: 2.0000200002e-8, color: "#FFD700" },
    { name: "matrix 1/50,000,000", chance: 2e-8, color: "#00008B" },
    { name: "chromatic : genesis 1/99,999,999", chance: 1.000001e-8, color: "#8A2BE2" },
    { name: "abyssal hunter 1/100,000,000", chance: 1e-8, color: "#00008B" },
    { name: "impeached 1/200,000,000", chance: 5e-9, color: "#FFA07A" },
    { name: "archangel 1/250,000,000", chance: 4e-9, color: "#FFFACD" }
];

const craftingRequirements = {
    gearBasing: {
        "common 1/2": 1,
        "uncommon 1/4": 1,
        "rare 1/16": 1,
        "good 1/5": 1
    },
    luckGlove: {
        "divinus 1/32": 2,
        "crystallized 1/64": 1,
        "rare 1/16": 3,
        "Gear Basing": 1
    },
    solardevice: {
        "Gear Basing": 1,
        "solar 1/5,000": 1,
        "divinus 1/32": 1,
        "rare 1/16": 1
    },
    lunarDevice: {
        "Gear Basing": 1,
        "lunar 1/5,000": 1,
        "divinus 1/32": 1,
        "rare 1/16": 1
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

let backpack = [];
let rollCooldown = 1000; // Set the initial roll cooldown to 1000 milliseconds
let startTime = Date.now(); // This will be the start time of the game
let rollCount = 0;

document.querySelectorAll('.shop .craftable').forEach(item => {
    item.addEventListener('mouseover', function() {
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.textContent = 'Required items: ' + this.dataset.items;
        this.appendChild(tooltip);
    });

    item.addEventListener('mouseout', function() {
        this.querySelector('.tooltip').remove();
    });
});

document.addEventListener("DOMContentLoaded", function() {
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
        } else {
            shopContent.style.display = "none";
        }
    });

    const saveLoadGamesButton = document.getElementById("save-load-games");
    const saveLoadGamesContent = document.getElementById("save-load-games-content");

    saveLoadGamesButton.addEventListener("click", () => {
        if (saveLoadGamesContent.style.display === "none") {
            saveLoadGamesContent.style.display = "block";
        } else {
            saveLoadGamesContent.style.display = "none";
        }
    });

    // Calculate the sum of all rarity chances
    const sumOfChances = rarities.reduce((total, rarity) => total + rarity.chance, 0);

    // Normalize the rarity chances
    for (const rarity of rarities) {
        rarity.chance /= sumOfChances;
    }

    let autoRollInterval;

    let playerLuck = 1; // Base player luck

    document.getElementById("roll-btn").addEventListener("click", roll);
    document.getElementById("auto-roll-btn").addEventListener("click", toggleAutoRoll);
    document.getElementById("sort-asc-btn").addEventListener("click", sortByRarityAscending);
    document.getElementById("sort-desc-btn").addEventListener("click", sortByRarityDescending);
    document.getElementById('save-btn').addEventListener('click', saveGameState);
    document.getElementById('load-btn').addEventListener('click', loadGameState);
    document.getElementById("craft-luck-glove-btn").addEventListener('click', craftLuckGlove);
    document.getElementById("craft-gear-basing-btn").addEventListener('click', craftGearBasing);
    document.getElementById("craft-solar-device-btn").addEventListener('click', craftSolarDevice);
    document.getElementById("craft-lunar-device-btn").addEventListener('click', craftLunarDevice);
    document.getElementById("equip-luck-glove-btn").addEventListener("click", equipLuckGlove);
    document.getElementById("equip-solar-device-btn").addEventListener("click", equipSolarDevice);
    document.getElementById("unequip-all-btn").addEventListener("click", unequipAll);
    document.getElementById("equip-lunar-device-btn").addEventListener("click", equipLunarDevice);
    document.getElementById("export-btn").addEventListener("click", exportGameState);
    document.getElementById("import-btn").addEventListener("click", importGameState);
    document.getElementById("roll-btn").addEventListener("click", function() {
        updateRollCount();
    });

    function roll() {
        let rand = Math.random() * playerLuck; // Apply the player's luck
        if (rand >= 1) {
            rand = 1; // Ensure that rand is always between 0 and 1
        }
      
        // Sort the rarities in ascending order of their chances
        rarities.sort((a, b) => a.chance - b.chance);

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

        rollAmount++;
        rollamount();

        console.error("Error: No rarity found.");
    }

    function updateRollCount() {
        rollCount++;
        const rollCountElement = document.getElementById("roll-count");
        rollCountElement.textContent = `Roll Count: ${rollCount}`;
    }
    
    function updatePlayTimeDisplay() {
        // Assuming you have an element with id "play-time" to display the play time
        const playTimeElement = document.getElementById("play-time");
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const seconds = Math.floor(elapsedTime / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        playTimeElement.textContent = `Play Time: ${hours}h ${minutes % 60}m ${seconds % 60}s`;
    }

    setInterval(updatePlayTimeDisplay, 1000);

    function unequipAll() {
        // Remove all equipped items from the backpack
        backpack = backpack.filter(item => !["Equipped Luck Glove", "Equipped Solar Device", "Equipped Lunar Device"].includes(item));

        // Reset the player's luck to its base value
        playerLuck = 1;

        // Update the UI to reflect the changes
        updateBackpackDisplay();
    }

    function equipLuckGlove() {
        // Check if the "Luck Glove" is in the backpack
        if (backpack.includes("Luck Glove")) {
            // If the "Luck Glove" is not already equipped, equip it
            if (!isLuckGloveEquipped()) {
                backpack.push("Equipped Luck Glove");
                updateBackpackDisplay();
                // Divide the player's luck by 1.25
                playerLuck /= 100.25;
            }
        }
        console.log("Equipped Luck Glove. Current luck multiplier: " + calculateLuckMultiplier());
    }

    function importGameState() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/json';
        input.onchange = function(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = function(event) {
                const encrypted = event.target.result;
                const decrypted = atob(encrypted); // Decrypt the data
                const data = JSON.parse(decrypted);
                backpack = data.backpack;
                rollCount = data.rollCount;
                startTime = data.startTime;
                console.log("Game state loaded from file.");
                updateRollCount();
                updateBackpackDisplay();
                updatePlayTimeDisplay();
            };
            reader.readAsText(file);
        };
        input.click();
    }

    function exportGameState() {
        const data = {
            backpack: backpack,
            rollCount: rollCount,
            startTime: startTime
        };
        const json = JSON.stringify(data);
        const encrypted = btoa(json); // Encrypt the data
        const blob = new Blob([encrypted], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement('a');
        a.href = url;
        a.download = 'gameState.txt';
        a.click();
    
        console.log("Game state saved to local storage and exported as gameState.txt.");
    }

    function equipSolarDevice() {
        // Check if the "Solar Device" is in the backpack
        if (backpack.includes("Solar Device")) {
            // If the "Solar Device" is not already equipped, equip it
            if (!isSolarDeviceEquipped()) {
                backpack.push("Equipped Solar Device");
                updateBackpackDisplay();
                // Divide the player's luck by 1.5
                playerLuck /= 1.5;
            }
        }
        console.log("Equipped Solar Device. Current luck multiplier: " + calculateLuckMultiplier());
    }

    function isSolarDeviceEquipped() {
        return backpack.includes("Equipped Solar Device");
    }

    function isLuckGloveEquipped() {
        return backpack.includes("Equipped Luck Glove");
    }

    function isLunarDeviceEquipped() {
        return backpack.includes("Equipped Lunar Device");
    }

    function addToBackpack(item) {
        backpack.push(item);
        updateBackpackDisplay();

        // If the item is a Luck Glove or Gear Basing, show the corresponding button
        if (item === "Luck Glove") {
            const craftLuckGloveButton = document.getElementById("craft-luck-glove-btn");
            craftLuckGloveButton.style.display = "block";
        } else if (item === "Gear Basing") {
            const craftGearBasingButton = document.getElementById("craft-gear-basing-btn");
            craftGearBasingButton.style.display = "block";
        }

        // If the item is a Luck Glove, show the "Equip Luck Glove" button
        if (item === "Luck Glove") {
            const equipLuckGloveButton = document.getElementById("equip-luck-glove-btn");
            equipLuckGloveButton.style.display = "block";
        }
        // If the item is a Solar Device, show the "Equip Solar Device" button
        if (item === "Solar Device") {
            const equipSolarDeviceButton = document.getElementById("equip-solar-device-btn");
            equipSolarDeviceButton.style.display = "block";
        }
        // If the item is a Lunar Device, show the "Equip Lunar Device" button
        if (item === "Lunar Device") {
            const equipLunarDeviceButton = document.getElementById("equip-lunar-device-btn");
            equipLunarDeviceButton.style.display = "block";
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
            itemElement.classList.add("rarity");
            backpackElement.appendChild(itemElement);

            // Find the rarity object to get the color
            const rarity = rarities.find(r => r.name === rarityName);
            if (rarity && rarity.color) {
                itemElement.style.color = rarity.color; // Set the text color based on the rarity's color
            }
        });

        // If the "Luck Glove" is in the backpack, show the "Equip Luck Glove" button
        if (backpack.includes("Luck Glove")) {
            const equipLuckGloveButton = document.getElementById("equip-luck-glove-btn");
            equipLuckGloveButton.style.display = "block";
        }
        // If the "Solar Device" is in the backpack, show the "Equip Solar Device" button
        if (backpack.includes("Solar Device")) {
            const equipSolarDeviceButton = document.getElementById("equip-solar-device-btn");
            equipSolarDeviceButton.style.display = "block";
        }
        // If the "Lunar Device" is in the backpack, show the "Equip Lunar Device" button
        if (backpack.includes("Lunar Device")) {
            const equipLunarDeviceButton = document.getElementById("equip-lunar-device-btn");
            equipLunarDeviceButton.style.display = "block";
        }
    }

    function toggleAutoRoll() {
        if (autoRollInterval) {
            clearInterval(autoRollInterval);
            autoRollInterval = null;
        } else {
            let adjustedRollCooldown = rollCooldown;
            if (isLunarDeviceEquipped()) {
                adjustedRollCooldown *= 0.85; // Reduce the roll cooldown by 15%
            }
            autoRollInterval = setInterval(roll, adjustedRollCooldown);
        }
    }

    function saveGameState() {
        localStorage.setItem("backpack", JSON.stringify(backpack)),
        localStorage.setItem("rollCount", rollCount),
        localStorage.setItem("startTime", Date.now())
        console.log("Game state saved to local storage.");
    }
    
    // Load the game state
    function loadGameState() {
        backpack = JSON.parse(localStorage.getItem("backpack")) || [];
        rollCount = parseInt(localStorage.getItem("rollCount")) || 0;
        startTime = parseInt(localStorage.getItem("startTime")) || Date.now();
        console.log("Game state loaded from local storage.");

        updateRollCount();
        updateBackpackDisplay();
        updatePlayTimeDisplay();
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

    function craftGearBasing() {
        const requirements = craftingRequirements.gearBasing;
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
        addToBackpack("Gear Basing");
    }

    function craftSolarDevice() {
        const requirements = craftingRequirements.solardevice;
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
        addToBackpack("Solar Device");
    }

    function craftLunarDevice() {
        const requirements = craftingRequirements.lunarDevice;
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
        addToBackpack("Lunar Device");
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

    // Function to calculate the current luck multiplier based on the equipped items
    function calculateLuckMultiplier() {
        let multiplier = 1;
        if (isLuckGloveEquipped()) {
            multiplier *= 1.25;
        }
        if (isSolarDeviceEquipped()) {
            multiplier *= 1.5;
        }
        console.log("Current luck multiplier: " + multiplier);
        return multiplier;
    }
    
    function equipLunarDevice() {
        // Check if the "Lunar Device" is in the backpack
        if (backpack.includes("Lunar Device")) {
            // If the "Lunar Device" is not already equipped, equip it
            if (!isLunarDeviceEquipped()) {
                backpack.push("Equipped Lunar Device");
                updateBackpackDisplay();
                // Reduce the roll cooldown by 15% of its current value
                rollCooldown *= 0.85;
            }
        }
        console.log("Equipped Lunar Device. Current roll cooldown: " + rollCooldown);
    }
});