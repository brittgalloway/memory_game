

# Memory Game

![Memory Game header](https://github.com/brittgalloway/memory_game/assets/50898741/73e1ae75-78a2-4f55-8832-279de54f09f1)


Welcome to the Peace, Love, and Harmony-themed memory game! Test your memory skills by clicking on the images and matching them. Can you uncover all 15 images without clicking the same one twice?

## How to Play

1. **Click on Every Image**: Your goal is to click on each of the 15 images exactly once.
2. **Score and Shuffle**: With each new image clicked, your score increases. The images shuffle after every click, so stay sharp!
3. **Avoid Duplicates**: If you click the same image twice, the game resets, and your score starts from scratch.
4. **Top Score**: Your top score is recorded as long as you remain in the same browser window.

## How It's Made

This memory game was developed using React and the Bulma UI framework. Here's how it works behind the scenes:

- **React**: The game is built using React, allowing for dynamic rendering and easy management of game state.

- **Images Data**: The images used in the game are sourced from a JSON file and mapped to create the game's image set.

- **Game Logic**: On each click, the clicked image is given a state of `isClicked: true`. Its unique ID is then added to an array, and the positions of the images are shuffled. If a duplicate is found in the array, the game ends.

- **High Score**: The game keeps track of your high score using a state variable. If your current score surpasses the stored high score, a new high score is recorded.

- **Victory Alert**: If you successfully match all 15 images without clicking any duplicates, a congratulatory alert pops up to celebrate your victory!

### Project Preview

<img width="899" alt="image" src="https://github.com/brittgalloway/memory_game/assets/50898741/73b4d170-d243-4b5d-a966-af91a4d9e1c2">


Enjoy this Peace, Love, and Harmony-themed memory game and challenge your memory skills. Can you achieve the ultimate goal of matching all the images and setting a high score to beat?

Have fun and keep those memory cells active!

>NOTE: This game is not mobile responsive

---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
