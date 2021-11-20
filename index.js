const scrape = require('website-scraper');

//your website url
const websiteUrl = 'https://website.com';

scrape({
    urls: [websiteUrl],
    urlFilter: function (url) {
        return url.indexOf(websiteUrl) === 0;
    },
    recursive: true,
    maxDepth: 10,
    prettifyUrls: true,
    filenameGenerator: 'bySiteStructure',
    //where to save the files
    directory: './website for testing'
}).then((data) => {
    console.log("Entire website succesfully downloaded");
}).catch((err) => {
    console.log("An error ocurred", err);
});