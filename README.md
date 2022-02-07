# mini-shopify

## Table of Contents
- [Description](#description)
- [Authors](#authors)
- [Github Link](#github-link)
- [Installation](#installation)
- [Usage](#usage)
- [How to Contribute](#contribute)
- [Resources](#resources)

## Description

 Back edd programming is important for being able to store, retrieve, and modify data. This application focuses on back end features utilizing Express and Sequelize to store data and use it. This application allows users to create a database, upload data, and then modify it as well. Using insommnia at the moment since there is no front end code, users can use the defined routes in the program to retrieve all the data, get specific data using its ID, delete data, update it, or even add their own data to the database.

 This project allowed be to gain more practicing using Express and with sequalize as well. Building this application allowed me to improve my understanding of sequelize as well since this is a new language for me. The main issue I encountered was understanding the associations ans setting it up. I didn't understand how the foreign keys worked and how to modify their names but once I understood this, the application was easily completed and the data could be seeded correctly.

 Some future features I would like to implement is to build a font end aspect to this application. Addditionally, creating more data to be included and more associations to create a bigger database. Currently this has no front end portion and is run on insomnia so a front end website would be more appealling.
## Author 
- Takara Truong

## Github Link

* https://github.com/truont2/mini-shopify

## Installation

To install this application:
1. clone the necessary files in the github repository.
2. Open up the terminal in the server.js file where you will enter npm install. This will install the necessary packages needed to run this application. 
3. Application is ready to be used. Refer to the Usage section for futher instructions.
4. Download insomnia here: https://insomnia.rest/download 

## Usage

The application will be invoked by using the following command:

```bash
node server.js
```

1. First download any dependencies by opening your index,js terminal and entering "npm install". 
2. Go into the .env file and update your password and username for MySQL
3. Once completed, you must enter mysql -u root -u and then provide your password for mysql. MySQL must be already downlaoded for this to work. If not donwloaded, go here: https://coding-boot-camp.github.io/full-stack/mysql/mysql-installation-guide 
4. Once completed, in the terminal, type "SOURCE db/schema.sql then db/seeds.sql. This initializes the database compnay_db to be used. 
5. enter node server.js. This activates the server to create the connection to the database. 
6. Open insomnia
7. Create routes for each table and their purpose(delete, update, get)
8. Run the routes with the correct host to use the database. All routes start off with http://localhost:3001/api
9. End server by doing Ctrl C in the terminal


### Video Walkthrough: 

This video shows the steps to install any packages and run the application after the reposition has been cloned.

Set up Database

![video walkthrough](./assets/setup.gif)

Use the application: 
1. Request Data

![video walkthrough](./assets/requestData.gif)

2. Create and update data: 

![video walkthrough](./assets/createUpdate.gif)

3. Delete data

![video walkthrough](./assets/delete.gif)

4. Update associations 

When you create a new tag or category, there will be no products associated with this so you must update products to have that association.

![video walkthrough](./assets/associations.gif)

## Contribute

To contribute, contact me at https://github.com/truont2/

## Resources 

* https://sequelize.org/master/index.html
