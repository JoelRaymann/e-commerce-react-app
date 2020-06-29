// Import the packages
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express(); // Create a express app.
const port = process.env.PORT || 5000; // Either use default port or port=5000

app.use(bodyParser.json()); // Parsers any request and automatically converts it from JSON
app.use(bodyParser.urlencoded({ extended: true })); // Automatically encodes url for us

app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle the get request for our webpage
  app.get("*", function (request, response) {
    request.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) {
    throw error;
  }
  console.log(`[INFO]: Server running on port ${port}`);
});

// Handle post request for payment
app.post("/payment", (request, response) => {
  // Define your body to send it to stripe for payment
  const body = {
    source: request.body.token.id,
    amount: request.body.amount,
    currency: "usd",
  };

  // Request Stripe for payment and handle the error or successful
  stripe.charges.create(body, (stripeError, stripeResponse) => {
    if (stripeError) {
      console.log(stripeError);
      response.status(500).send({
        error: stripeError,
      });
    } else {
      response.status(200).send({
        success: stripeResponse,
      });
    }
  });
});
