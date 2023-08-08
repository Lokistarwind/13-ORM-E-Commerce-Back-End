# 13-ORM-E-Commerce-Back-End

## Description
The purpose of this project is to build an E-Commerce Back End application. It was made to create and maintain a locally run database of inventory. Making the code for it help me understand the concept of using ORM by following the steps and procedures of mapping objects and thier relations 

## Installation
Once you downloaded the file, open the terminal and cd into the correct directory.
In terminal enter 
npm i

Afterwards install inquirer by typing this into the terminal
npm i inquirer@8.2.4

Once all the dependencies are installed type mysql -u root -p
It will ask you to login. Once you do you type
SOURCE db/schema.sql;
this will load up the tables;

Next quit sql and then run npm run start seeds/

Afterwards before starting, you need to create a .env file and enter data into the file to use in this format:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=YOURPASSWORD
DATABASE=ecommerce_db

Now you can run the project by typing
node server
Doing so will start the application.
You can run the functions inside insomnia such as 

GET

http://localhost:3001/api/tags

GET

http://localhost:3001/api/tags/1

POST

http://localhost:3001/api/tags
{
		"tag_name": "glasses",
}

PUT

http://localhost:3001/api/tags/?id_number
{
		"tag_name": "eye wear",
}

DELETE

http://localhost:3001/api/tags/?id_number

For a detailed look see this video demonstration.
https://www.youtube.com/watch?v=ABRccGV-yKU&


## Usage
You can use the project to see how DB runs and see how ORM is used to getr, create and manipulate data. Also its a handy tool to create a usable app to maintain inventory.

## Credits
For this project I used code from Mini project of week 13 to help fill some of the missing parts of the given code.
