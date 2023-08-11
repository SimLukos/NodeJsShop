# Backend for shop page

This app is fullstack project. It has BackEnd and FrontEnd.  
**BackEnd** - Node.js, Express.js and MongoDb;  
**FrontEnd** - EJS, CSS;

This app allows to add/delete/show products for users. Also add products to cart and order them.

**Note** This App is not finnished yet. It lacks some working endpoints and some functionality.

## Running the app:

Before running the app, you have to be installed Node.js.
When using my source code, make sure to run
`npm install` in the extracted folder.

To start application run`npm start`.
Application runs on port 3000 by default. It can be changed at index.js file.

**Note**: To connect to your mongoDb database, change this line: `process.env.MONGO_CONNECTION` at index.js file with MongoDB ATLAS URL adress.
