# Using the program

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

the docker is currently not working for the react portion of the app, only the python portion mounts properly

to run the program you will have to call npm start as well as launch the python api

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## `running the api`
to run the api just run the djapi.py through python3 
it will prompt you for username and password
you may need to change the schema to include your username instead of mine in order for it to connect to the DB
it will tell you where the api is being hosted