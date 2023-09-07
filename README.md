
  # note-taker
  <img src="badge.svg">
  
  ## Description
  This project is our first full stack homework assignment we are working on. We are given the front end and are made to make the backend work. This app will allow you a basic way of taking and saving notes, and returning later to view and study them if needed.

  ## Table of Contents
- [note-taker](#note-taker)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Questions?](#questions)
  - [License](#license)

  ## Installation
  No installation necessary, as all logic occurs on the backend and server is already deployed. The project does however use node and express to function on the backend server, and is deployed on [https://railway.app](https://railway.app).

  ## Usage
  Simply navigate to the project url [here](https://note-taker-production-25ec.up.railway.app/) the site uses express static middleware, and a GET wildcard route so any path passed in the url will return the main landing page. 
  
  By clicking on the notes button in the center of the landing page, you will be navigated to /notes where the saved notes can be viewed on the left side. Enter any notes you would like to save in the text fields, and a save icon will appear in the top right. Click that to save your node, it will be stored on the server. Any notes you save will appear and persist on the left hand side, and can be accessed later for future studying. 

  Saving and loading of notes are handled via POST request and GET request to /api/notes. Notes are saved to the json database file with a simple unique ID. 
  .
  There is a delete option for the notes on the left side, but the delete functionality is currently buggy on the server side and isn't working properly. This is handled by DELETE requests to /api/notes with the relevant note ID. The note data is successfully deleted from the database, but I can't figure out how to render the delete action properly on the page(even though the note is deleted, the note remains on the page).

  Link to project repository: [https://github.com/jrapich/note-taker](https://github.com/jrapich/note-taker)

  Link to deployed app on railway.app: [https://note-taker-production-25ec.up.railway.app/notes](https://note-taker-production-25ec.up.railway.app/notes)

  ## Tests
  no tests needed

  ## Credits
  no other contributors. 
  
  However, this link shined a light for me on how the  .filter() method works and I use a  line of code from it:  https://stackoverflow.com/questions/65015000/how-do-i-use-express-js-app-delete-to-remove-a-specific-object-from-an-array

  ## Contributing
  How to contribute:

  Please reach out to me at jeremysr@protonmail.com or make a pull request at [https://github.com/jrapich/note-taker](https://github.com/jrapich/note-taker)

  ## Questions?
  Any further questions, comments, or bug reports, can be sent to me at jeremysr@protonmail.com

  https://www.github.com/jrapich

  ## License
  This project protected under MIT License.

  All rights reserved. See /LICENSE for more information.

  