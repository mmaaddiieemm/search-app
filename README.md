This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quick Start

Run the following commands: `npm install`, then `npm start`

See additional instructions in the Available Scripts section under 'npm start'. 

## Assumptions and Implementation Details

Usage Instructions:

- The type of data to search (users, tickets, organizations) can be specified by the -[u|t|o] command. If unspecified, results from data types will be included. Any permutation of u, t or o can be used here. 
- User input must be in the format of &lt;key&gt;=&lt;value&gt;. For example, to search for an id of 5, enter "id=5".
- When searching for values which are 'empty', do not specify anything for the &lt;value&gt; field.

Assumptions:

- Partial matches on values are not allowed, only complete matches.
- Partial matches on keys are allowed, i.e. a search for 'id=23' will return results for 'external_id', 'assignee_id' etc, as long as the value is an exact match. 
- input data must have the following properties: id, external_id, created_at.

Implementation Details:

- If a criteria is not found, print "No entry found that matches criteria".
- If any field for a given type of data does not exist, the value 'undefined' will be displayed. 

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

### `npm run lint`

runs eslint on the project files. 

### 'npm run coverage' 

due to an apparent bug in Jest, passing the --coverage option to the react test script returns coverage results that are totally empty, so i've just added this as a script to save some time. Bug report: https://github.com/facebook/create-react-app/issues/6888

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
