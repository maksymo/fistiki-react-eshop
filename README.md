# Fistiki Shop &#128679; UNDER CONSTRUCTION &#128679;

An example e-shop build on react.

## Getting Started

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

## Adding AWS Amplify
This project uses AWS Amplify for authentication (Cognito) and for the API using GraphQL.

### Initialize AWS Amplify:
### `amplify init`

* Enter a name for the project **YOUR_PROJECT_NAME**
* Enter a name for the environment **ENVIRONMENT_NAME**
* Choose your default editor: **YOUR_CODE_EDITOR**
* Choose the type of app that you're building **javascript**
* What javascript framework are you using **react**
* Source Directory Path:  **src**
* Distribution Directory Path: **build**
* Build Command:  **yarn build**
* Start Command: **yarn start**

### Add API:
### `amplify add api`
* Please select from one of the below mentioned services **GraphQL**
* Provide API name: **YOUR_API_NAME**
* Choose an authorization type for the API **Amazon Cognito User Pool**