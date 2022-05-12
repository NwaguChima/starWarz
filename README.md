# General Walkthrough;

Context API was used to transfer logic between compoenents. TypeScript was used to ensure typecheckings. The starwarz API was feteched in the utils folder, in the data file, and for the characters, an extra call was made and promise.all is used to resolve all data in the entire characters array. A list of movies is sorted and rendered, and upon click on a movie, it opens a modal tha shows all the characters of the movie. The character table was setup using HTML tables and React-table was used to add functionalites to the table. Sorting and filtering features were duely implemented, and the totals were rendered on the table footer.

## Trouble with the task;

The API is very slow and sometimes requests are blocked by cors. Using anyorigin.com to bypass that doesnt work anymore. I also wrote some tests, but had little time to write test for all components.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
