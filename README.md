# metadata-scraping

Diaganol Machine Test - Rest api to  scrape an input URL and parse its metadata

Steps to consume the api.

#Open postman or a similar app and trigger a POST request.
Sample postman request

POST url - https://metadata-scrapping.herokuapp.com/scraping/scrapPost
POST application/json
{
"url": "http://bit.ly/2QDhxRY"
}

#use the below Curl request
POST /scraping/scrapPost HTTP/1.1
Host: metadata-scrapping.herokuapp.com
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: ff8668b7-a075-872c-0390-ac66fe02a3b7

{ "url": "https://login.yahoo.com/"}


Steps to run the project in local.
#Run npm install inside the root of the project.
#All the dependencies will be downloaded.
#Run the command npm start

Features added
#scrape an input URL and parse its metadata.
#caching strategy used for better performance.
#third party modules used for parsing metadata.
#global module "process" used to store the constants.

