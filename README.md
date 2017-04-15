# GulpJS and AngularJS
This is a follow up project with integration of Gulp in the Javascript framework AngularJS.

Simple project with Angular JS Frontend JavaScript Framework. Here, I am using Angular modules, controllers, filters and directives.

---
## Instructions:


Download the source code

You need Node JS and npm in order to work with this project.
1. Install [NodeJS](https://nodejs.org).

   npm comes with NodeJS, so you don't need to install npm separately.
2. Install bower using:

   ```npm install -g bower```

   You might need to use ```sudo npm install -g bower``` due to certain restrictions on your system.
3. Go to project directory and install project components using command:

   ```bower install```

4. Install json-server globally by typing following command:
   ``` npm install json-server -g``` You might need to prefix ```sudo``` if you are using Mac or Linux.

5. Go to json-server folder and type
   ```json-server --watch db.json```

6. Open http://localhost:3000


---
## Development instructions:

   For server implmentation, I am using Node module called JSON-server.

   Install JSON server globally using ```npm install json-server -g```

   Bear in mind that you might need to use ```sudo``` if you are using Linux or Mac.

   Create a "json-server" folder and copy "db.json" file.

   Create a folder named "public" inside "json-server" folder.

   I've copied all the files from generated "dist" folder into "public" folder inside "json-server".

   Go to json-server folder and type in command:
   ```json-server --watch db.json```

   Open http://localhost:3000

   You can serve the peoject using ```gulp watch``` command.

   If you get an error or see a message 'Cannot GET/', refresh the page.

## TDD with Unit Tests and End to End tests

   Install "karma-cli" globally using ```npm install karma-cli -g```

   Set up ngMock using ```bower install angular-mocks -S```
