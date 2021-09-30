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
  try {
    if (req.query.phone) {
      phone = req.query.phone;
      phone = phone.split("");

      if (phone.length === 11 && phone[0] === "1") {
        //one is present but + isnt
        phone.splice(0, 0, "+");
        phone = phone.join("");
      } else if (phone.length === 10) {
        // +1 isnt present
        phone.splice(0, 0, "+1");
        phone = phone.join("");
      } else if (phone.length < 10 || phone.length > 11) {
        return next({
          status: 400,
          message: "Check your phone number, it seems to be invalid!",
        });
      }
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
    //Reapond with valid response
    res.status(200).json({ data: prettyJson });
  } catch (error) {
    //call error handler
    next({ status: 400, message: "There are no results for your search!" });
  }
}

async function getBusinesses(req, res, next) {
  const location = req.query.location;
  const latitude = req.query.latitude;
  const longitude = req.query.longitude;
  const open_now = req.query.open_now;
  const price = req.query.price;
  const sort_by = req.query.sort_by;
  const radius = req.query.radius;
  const term = req.query.term;

  let searchRequest = {
    term: term,
    latitude: latitude,
    longitude: longitude,
    location: location,
    open_now: open_now,
    price: price,
    sort_by: sort_by,
    radius: radius,
  };

  for (let [term, value] of Object.entries(searchRequest)) {
    if (!value) {
      delete searchRequest[term];
    }
  }

  try {
    const response = await client.search(searchRequest);
    const body = await response.jsonBody;
    const prettyJson = await JSON.stringify(body, null, 4);
    if(body.total < 1){
      throw new Error("search criteria")
    }
    res.status(200).json({ data: prettyJson });
  } catch(err) {
    next({status:400, message: "We couldn't find any results! Try checking your search criteria."})
  }
}

module.exports = { read, getBusinesses };
