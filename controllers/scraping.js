const urlMetadata = require('url-metadata');

//handles the request/response
exports.scrapPost = (req, res, next) => {
    urlMetadata(req.body.url).then(
    function (metadata) { // success handler
        res.status(200).json(metadata);
    },
    function (error) { // failure handler
        res.status(404).json({message:"no data found"});
    });
};