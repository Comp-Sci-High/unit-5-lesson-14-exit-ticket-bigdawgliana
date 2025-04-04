// Create a function that tests the post route handler [2 pts]
async function testCreatePotion() {
    const potionData = {
        label: "Invisible Potion",
    effect: "Gives invisibility for 2 hours",
    ingredients: "Secret stuff",
    color: "transparent",
    isExplosive: false,
    }
    
    const response = await fetch("https://obscure-space-zebra-jjqjvxrq49v6c95j-3000.app.github.dev", {
         method: "POST",
         headers: {
            "Content-Type": "application/json"
         },
         body: JSON.stringify(potionData)
    });
}


// Call the function [1 pt]
testCreatePotion()
// Show us the successful POST fetch [1 pt]

