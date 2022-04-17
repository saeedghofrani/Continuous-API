const express = require('express');
const Test = require('./model/test.model');
const axios = require('axios');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


setInterval(async () => {

    try {

        // Make GET Request on every 7 minute
        const response = await axios.get(`https://reqres.in/api/unknown/1`);

        console.log('********************************  ********************************');
        console.log("data received from server");
        console.log(response.data);

        // save data to database
        await Test.create({ content: JSON.stringify(response.data) });

    } catch (error) {
        console.log(error);
        process.exit(1);
    }


}, 1000);



module.exports = app;
