# Getting Started with Create React App

This project is a fictional event registration system built with React, TypeScript, and SCSS. It allows users to view events, register for an event, and view their registration details. The design is responsive and user-friendly.

## Setup and Installation
Clone the repository:

### git clone https://github.com/your-username/event-registration-system.git
### cd event-registration-system

Install dependencies:

### npm install
 
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).

## Design Choices and Trade-offs

## Design Choices

`React with TypeScript:`
Chosen for its strong typing capabilities, which help in catching errors early and improving code quality.

`SCSS for Styling:`
SCSS was chosen for its powerful features like nesting, variables, and mixins, which make the styling more maintainable and organized.

`Responsive Design:`
The design is made responsive to ensure it works well on different screen sizes, including mobile and tablet devices.

`Axios for API Requests:`
Axios was used for its simplicity and ease of handling HTTP requests and responses.

`Animations and Transitions:`
Animations were integrated to enhance user experience and provide a more engaging interface. Transitions were meticulously implemented to ensure smooth and intuitive user interactions, gracefully animating changes in UI states.

## Trade-offs

`Simple Local Storage for Data Persistence:`
Local storage was used for simplicity. This is suitable for a demo or small-scale application but not recommended for production-level applications where a backend service and database would be more appropriate.
Mock API Data:

The data is fetched from a mock API (jsonplaceholder.typicode.com). This makes it easy to set up and run the project but limits functionality to static data.
Basic Error Handling:

Error handling is kept minimal for simplicity. In a production application, more robust error handling and user feedback mechanisms would be necessary.
Single User Context:

The application assumes a single user context for simplicity. Multi-user functionality would require a more complex authentication and authorization system.
