const express = require('express');

const scrapingController = require('../controllers/scraping');

const router = express.Router();

router.post('/scrapPost', scrapingController.scrapPost);

module.exports = router;