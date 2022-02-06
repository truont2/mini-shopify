# mini-shopify

## Table of Contents
- [Description](#description)
- [Authors](#authors)
- [Github Link](#github-link)
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [How to Contribute](#contribute)
- [Resources](#resources)

## Description

 Back edd programming is important for being able to store, retrieve, and modify data. This application focuses on back end features utilizing Express and Sequelize to store data and use it. This application allows users to create a database, upload data, and then modify it as well. Using insommnia at the moment since there is no front end code, users can use the defined routes in the program to retrieve all the data, get specific data using its ID, delete data, update it, or even add their own data to the database.

 This project allowed be to gain more practicing using Express and with sequalize as well. Building this application allowed me to imporve my understand ing of sequelize as well since this is a new language for me. The main issue I encountered was understanding the associations. I didn't understand how the foreign keys worked and how to modify their names but once I understood this, the application was easily completed. 

 Some future features I would like to implement is to build a font end aspect to this application. Addditionally, creating more data to be included and more associations to create a bigger database. 
## Author 
- Takara Truong

## Github Link

* https://github.com/truont2/mini-shopify

## Installation

To install this application:
1. clone the necessary files in the github repository.
2. Open up the terminal in the index.js file where you will enter npm install. This will install the necessary packages needed to run this application. 
3. Application is ready to be used. Refer to the Usage section for futher instructions.
4. Download insomnia here: https://insomnia.rest/download 

## Usage

The application will be invoked by using the following command:

```bash
node server.js
```

1. First download any dependencies by opening your index,js terminal and entering "npm install". 
2. Once completed, you must enter mysql -u root -u and then provide your password for mysql. MySQL must be already downlaoded for this to work. If not donwloaded, go here: https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide 
3. Once completed, in the terminal, type "SOURCE db/schema.sql then db/seeds.sql. This initializes the database compnay_db to be used. 
4. enter node server.js. This activates the server to create the connection to the database. 
5. Open insomnia
6. Create routes for each table and their purpose(delete, update, get)
7. Run the routes with the correct host to use the database. 

### Video Walkthrough: 

This video shows the steps to install any packages and run the application after the reposition has been cloned.

Set up Database
![video walkthrough](./assets/sql.gif)

Use the application: 
![video walkthrough](./assets/functionality.gif)

## Test 

screenshot of some options to choose from:

![screenshot](./assets/mainMenu.PNG)
![screenshot](./assets/allemployees.PNG)
![screenshot](./assets/roles.PNG)

## Contribute

To contribute, contact me at https://github.com/truont2/

## Resources 

* https://www.youtube.com/watch?v=p3qvj9hO_Bo&t=1575s
* https://www.youtube.com/watch?v=L72fhGm1tfE
