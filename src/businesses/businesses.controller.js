"use strict";

const yelp = require("yelp-fusion");
const client = yelp.client(process.env.API_KEY);

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
async function read(req, res, next) {
  let phone;
  let business;
  let location;
  let searchRequest;
  let response;
  let firstResult;
  let prettyJson;

  console.log(req.query);
  if (req.query.phone) {
    phone = req.query.phone;
    phone = phone.split("")
    if(phone[0] != "+" && !phone[1] != "1"){
        console.log("disecting")
        phone.splice(0,0,"+1")
        phone = phone.join("")
    }
    console.log(phone)
    response = await client.phoneSearch({ phone: phone });
  } else {
    business = req.query.business;
    location = req.query.location;
    searchRequest = {
      term: business,
      location: location,
    };
    response = await client.search(searchRequest);
  }

  firstResult = await response.jsonBody.businesses[0];
  prettyJson = await JSON.stringify(firstResult, null, 4);

  console.log(prettyJson);

  res.status(200).json({ data: prettyJson });
}

module.exports = { read };
