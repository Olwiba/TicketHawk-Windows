# Ticket Hawk 🎫

Ticket Hawk is a program that helps you spawn multiple sandboxed Chrome windows with isolated storage for interacting with ticket websites. Perfect for testing and development of ticket-related applications.

## Getting Started 🚀

1. Install Node.js on your machine.
2. Clone this repository.
3. Run `npm install` or `bun install` to install the required dependencies.
4. Run the program using `npm start` or `bun start`.

## How It Works 🎯

Ticket Hawk uses Selenium WebDriver to:

1. Prompt you for:
   - Target URL to navigate to
   - Number of browser windows to spawn
2. Initialize Chrome browser windows in incognito mode with:
   - Isolated local storage
   - Isolated session storage
   - Independent browser contexts
3. Navigate each window to the target URL
4. Exit once all windows are successfully opened

## Configuration 🛠️

You can configure the following parameters when running the program:

- `targetURL`: The website URL to open in each window
- `spawnTargets`: The number of browser windows to spawn

## Error Handling 🚨

Ticket Hawk includes error handling mechanisms:

- Handles graceful shutdown of browser windows
- Ignores certificate errors to work with various sites
- Includes built-in timeout handling for page loads
- Uses sandboxed storage for each window
- Maintains isolated browser contexts

## Contributing 🤝

Contributions are what make the open-source community such an amazing place to learn, inspire, and create.
Any contributions you make are greatly appreciated.

1. Fork the project.
2. Create your feature branch `git checkout -b feature/AmazingFeature`.
3. Commit your changes `git commit -m 'Add some AmazingFeature'`.
4. Push to the branch `git push origin feature/AmazingFeature`.
5. Open a pull request.

## License 📄

Distributed under the MIT License. See LICENSE for more information.

## Contact 📬

Twitter - [@olwiba](https://twitter.com/Olwiba)