const express = require('express');
const bodyParser = require('body-parser');
const apicache = require('apicache');
const cache = apicache.middleware;

const scrapRoutes = require('./routes/scraping');

const app = express();

app.use(bodyParser.json()); // application/json

//allow CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

//Routing
app.use('/scraping', cache(process.env.CACHE_TIME), scrapRoutes);

app.listen(8080);