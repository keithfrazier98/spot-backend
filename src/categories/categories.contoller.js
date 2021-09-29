const yelp = require("yelp-fusion");
const client = yelp.client(process.env.API_KEY);
const simpleCats = require('./simpleCats.json')

function getAllCategories(req, res, next) {
    res.status(200).json({data:simpleCats.categories})
}

module.exports = { getAllCategories };
