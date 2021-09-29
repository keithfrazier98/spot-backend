const yelp = require("yelp-fusion");
const client = yelp.client(process.env.API_KEY);

async function getAllCategories(req, res, next) {
  try {
    const response = await client.allCategories();
    const body = response.jsonBody.categories;
    res.status(200).json({ data: body });
  } catch (error) {
    next({ status: 400, message: "Error fetching categories" });
  }
}

module.exports = { getAllCategories };
