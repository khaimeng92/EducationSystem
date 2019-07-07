# EducationSystem
API endpoints for teachers to perform administrative functions for their students.
* Backend: NodeJs & ExpressJs
* Database: MySQL
* ORM: Sequelize
* Endpoints: ```
             POST api/register
             GET api/commonstudents
             POST api/suspend
             POST api/retrievefornotifications
             ```
# Prerequisite
 1. Express JS
 2. Node JS
 3. mysql2
 4. sequelize-cli
 5. sequelize
 6. nodemon
 7. mocha
 8. chai
 9. chai-http

# Installation
## MySQL
Install MySQL, if necessary.

Set up a local connection credentials
```
CREATE USER 'your_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password'; 

or

ALTER USER 'your_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'your_password'; 
```
Create Database Schema
```
CREATE SCHEMA `your_db_name` ;
```
Modify database config [[..\db\config\database.json]](https://github.com/khaimeng92/EducationSystem/blob/master/db/config/database.json) 
```
{
   "development": {
       "username": "your_user",
       "password": "your_password",
       "database": "your_db_name",
       "host": "127.0.0.1",
       "dialect": "mysql",
       "pool": {
           "max": 5,
           "min": 0,
           "idle": 10000
       }
    },
    ...
```

## Server
Install dependencies, run
```
npm install
```
Migrate database, run
```
npm run migrate
```
To start server, run
```
npm start 

or

npm run nodemon
```

## Testing
* Option 1 - Unit Test Script
    preload data before start testing, run
    ```
    npm run initData
    ```
    run script
    ```
    npm test
    ```

 * Option 2 - Postman Collection
You can access [this Postman collection](https://www.getpostman.com/collections/19154d6cc8add40bd28b) for some example calls 
