This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
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

### Setup: 

`npm install --save typescript` 
`npm install --save axios`
`npm install --save popper.js`
`npm install --save jquery`
`npm install --save bootstrap`
`npm install --save prop-types`
`npm install --save react-infinite-scroller`

Then you can run `npm start` per the create-react-app bootstrapping instructions suggest

### Compiling SCSS into CSS

I chose to use VSCode's Live Sass Compiler extension to compile SCSS into CSS. You're options may vary depending on your code editor

### Challenges

- Learning React. React is incredibly powerful, and does things differently than I have previously done them with jQuery or raw Javascript. It's power is undeniable, and I have been learning a lot about React while working on this project
- Navigation. I was initially led astray by a convoluted pagination extension. Utilizing infinite scroll hasn't been easy, either, but I was eventually able to understand it
- Some movies don't come with posters. I chose to use a dummy image if it did not

### Design Decisions

- I liked the simple layout in the example, so I mostly attempted to copy it. I tend to be a bit of a minimalist, so I chose to go with an number for the average score rather than using the star method.
- Getting the query URL working was simple, so I tried to make it both prominent but not overly attention-grabbing

### Future Improvements

- I would deepen my learning of React in order to place the query URL in the browser URL rather than making it a visible string on the page
- Testing across all devices to ensure full device compatibility. Not do-able for a 2-3 hour code test
- Add user options. Right now, they can only search by title. Users are likely to want to search for movies currently out, or movies soon to release, and a few sorting options (a common one might be sorting by average rating high to low)