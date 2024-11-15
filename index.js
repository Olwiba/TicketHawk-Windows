const {Builder, By, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

let chromeOptions = new chrome.Options();
chromeOptions.addArguments('--ignore-certificate-errors');
chromeOptions.addArguments('--incognito');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// ASCII art to be displayed
console.log(`🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫
Welcome to Ticket Hawk!
🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫🎫`);

// Function to ask questions in a promise-based way
const askQuestion = (query) => new Promise(resolve => readline.question(query, resolve));

// Main async function to handle the logic
const main = async () => {
    try {
        // Getting input from the user
        const targetURL = await askQuestion("Enter the target URL: ");
        const spawnTargets = await askQuestion("How many spawn targets? ");

        // Closing the readline interface
        readline.close();

        // Parsing input values
        const numWindows = parseInt(spawnTargets, 10);

        // Initialize browser windows
        console.log(`[Main] Initializing ${numWindows} browser windows...`);
        for (let i = 0; i < numWindows; i++) {
            const driver = await new Builder()
                .forBrowser('chrome')
                .setChromeOptions(chromeOptions)
                .build();
            await driver.get(targetURL);
            console.log(`[Window ${i + 1}] Initialized and navigated to ${targetURL}`);
        }

        console.log('[Main] All windows opened successfully. Exiting...');
        process.exit(0);

    } catch (error) {
        console.error(`[Main] An error occurred: ${error.message}`);
        process.exit(1);
    }
};

// Shutdown
const shutdown = () => {
    console.log('Exiting...');
    console.log('Enjoy your tickets! 🌴')
    process.exit(0);
}

process.on('SIGINT', shutdown);

main();