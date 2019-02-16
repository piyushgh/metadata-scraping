# metadata-scraping

Diaganol Machine Test - Rest api to  scrape an input URL and parse its metadata

Steps to consume the api.

#Open postman or a similar app and trigger a POST request.
Sample postman request

POST application/json
{
"url:" "http://www.amazon.com/Apple-iPhone-16gb-Space-Unlocked/dp/B00NQGP42Y/"
}

Steps to run the project in local.
#Run npm install inside the root of the project.
#All the dependencies will be downloaded.
#Run the command npm start

Features added
#scrape an input URL and parse its metadata.
#caching strategy used for better performance.
#third party modules used for parsing metadata.
#global module "process" used to store the constants.

