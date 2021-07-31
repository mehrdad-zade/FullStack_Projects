REACT:

Benifits:
- state management: the program knows which page you are serving and no need to manage the state manually
- Virtual DOM: it makes minimal changes to the DOM based on the differences it sees on the V-DOM which makes it faster
- modularises the components
- it uses JavaScript within HTML in one place which makes it easier to read and update

Installation:
- npm
- yarn: npm install --global yarn
- Visual Studio Code
- create a project dir
- CLI: npm i create-react-app
- npx create-react-app clinicalsapp
- cd clinicalsapp
- npm i --save react-router-dom
- npm i --save axios
- npm install dotenv --save
- add "require('dotenv').config()" tp app.js


Project:
- go to src create folder components
- create Home.js: import axios for send REST requests, using componentWillMount() method
- ..
- Routing:
	- index.js: wrap App between BrowserRouter
	- app.js: add the paths and reqquired params



