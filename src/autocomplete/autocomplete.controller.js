"use strict";

const yelp = require("yelp-fusion");
const client = yelp.client(process.env.API_KEY);

async function autocomplete(req, res, next) {
  try {
    const response = await client.autocomplete({
      text: "pizza",
      latitude: 34.094762,
      longitute: -117.614586
    });
    const body = await response.jsonBody.businesses;
    res.status(200).json({ data: body });
  } catch (error) {
    next({ status: 400, message: "failed to fetch suggestions" });
  }
}

module.exports = { autocomplete };
