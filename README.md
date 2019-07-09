# Pupulation-management-system
[![Build Status](https://travis-ci.org/ruganda/Population-Management-System.svg?branch=master&service=github)](https://travis-ci.org/ruganda/Population-Management-System)
[![Coverage Status](https://coveralls.io/repos/github/ruganda/Population-Management-System/badge.svg?branch=master&service=github)](https://coveralls.io/github/ruganda/Population-Management-System?branch=master)


**Application Features**

Population management:

- Create a new location containing data on the total number of male and female residents within it. Please note that locations can be nested within other locations

- List all available locations and their population summaries (total male residents, total female residents, sum total residents)

- Update data for a specific locations

- Delete a specified location



**Application demo**

* To interact with the application via postman
     * https://rugandasmsAPIherokuapp.com/

    then use the following endpoints to perform the specified tasks
    
    EndPoint                                           | Functionality
    ------------------------                           | ----------------------
    POST /location                                     | Create a new location
    GET /location                                      | Fetch all locations
    GET /user                                          | View all contacts
    PUT /location/< id >                               | Update a location details
    DELETE /location/< id >                            | Delete a location
   
    
**Getting started with the app**

**Technologies used to build the application**

* Node js 

* Express

* [PostgreSQL](https://www.postgresql.org/)

* Mocha 

# Installation

- clone the repository
- install the packages by running `npm install`
- create a database called test_db 
- run migrations with `npm run migrate`
- start the project with `npm start`


# Testing
 - run `npm test` to run the tests