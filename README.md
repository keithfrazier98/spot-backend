# Spot-backend

    This backend repository handles routes for the **SPOT** front end through
    making requests with the yelp-fusion npm package to the yelp API. 

    Front-end Repository: https://github.com/keithfrazier98/spot

Live Website: https://spot-beta.vercel.app/

This project uses the following dependencies:

- cors
- dotenv
- express
- path 
- yelp-fusion 

There are two routes setup, '/categories' and '/businesses', there categories simply returns a predefined list of categories for the search by category feature. 

The businesses route can search multiple businesses or a single business depending on the nature of the request. 

All requests are made through an instance of yelp-fusion and use the yelp.client predefined methods. 

