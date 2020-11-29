// Install script for creating the DB and server user
let CONFIG =  require('./config.json');
let pg = require('pg');
let _ = require('lodash');

let pgInitClient = new pg.Client({
    host: CONFIG.INIT_DB.HOST,
    port: CONFIG.INIT_DB.PORT,
    user: CONFIG.INIT_DB.USERNAME,
    password: CONFIG.INIT_DB.PASSWORD,
    database: CONFIG.INIT_DB.DATABASE
});
let pgClient = new pg.Client({
    host: CONFIG.DB.HOST,
    port: CONFIG.DB.PORT,
    user: CONFIG.DB.USERNAME,
    password: CONFIG.DB.PASSWORD,
    database: CONFIG.DB.DATABASE
});

//Creates connection to the DB
function connectToDB(db){
    if(db === "pgInitClient"){
        return pgInitClient.connect(err => {
            if (err) {
                console.error('Connection error to the initial DB', err.stack);
                throw err;
            } else {
                console.log('Connected to the initial DB')
            }
        });
    }else if(db ===  "pgClient"){
        return pgClient.connect(err => {
            if (err) {
                console.error('Connection error to the App DB', err.stack);
                throw err;
            } else {
                console.log('Connected to the App DB')
            }
        });
    }
}

//Disconnects from the DB
function disconnectFromDB(db){
    if(db === "pgInitClient"){
        return pgInitClient.end(err => {
            console.log('Disconnected from the initial DB')
            if (err) {
                console.log('Error disconnect from the initial DB', err.stack)
            }
        })
    }else if(db ===  "pgClient"){
        return pgClient.end(err => {
            console.log('Disconnected from the App DB')
            if (err) {
                console.log('Error disconnect from the App DB', err.stack)
            }
        })
    }
}

//Creates the app DB
async function createAppDB(){
    return pgInitClient.query(`CREATE DATABASE "${CONFIG.DB.DATABASE}" WITH
         OWNER = postgres
         ENCODING = \'UTF8\'
         CONNECTION LIMIT = -1;`)
        .then(() => console.log("Created GCPDB.."))
        .catch(err => console.log(err.stack));
}

//Creates the server user
async function createServerUser(){
    return pgInitClient.query(`CREATE ROLE ${CONFIG.DB.USERNAME} WITH 
        LOGIN
        NOSUPERUSER
        NOCREATEDB
        NOCREATEROLE
        INHERIT
        NOREPLICATION
        CONNECTION LIMIT -1
        PASSWORD \'${CONFIG.DB.PASSWORD}\';`)
        .then(() => console.log("Created server user.."))
        .catch(err => console.log("Failed to create user\n"+err.stack));
}

// Check if App DB exists with default Postgres user
async function checkIfAppDBAndUserExists() {
    //Connect to the initial DB
    await connectToDB("pgInitClient");

    //Check to see if the App DB exists
    let result = await pgInitClient.query('SELECT datname FROM pg_database;');
    let names = [];
    _.forEach(result.rows, (row) => names.push(row.datname));

    if (!_.includes(names, CONFIG.DB.DATABASE)){
        console.log("GCPDB does not exists. Creating it now..")
        await createAppDB();
    }else{
        console.log("GCPDB already exists..");
    }

    //Check to see if server user exists
    let result2 = await pgInitClient.query('SELECT usename FROM pg_shadow;');
    let names2 = [];
    _.forEach(result2.rows, (row) => names2.push(row.usename));

    if (!_.includes(names2, CONFIG.DB.USERNAME)){
        console.log("User server does not exists. Creating it now..")
        await createServerUser();
    }else{
        console.log("User server already exists..");
    }

    await disconnectFromDB("pgInitClient");
}

checkIfAppDBAndUserExists();
