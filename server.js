"use strict";

const express = require("express");
const cors = require('cors');

// Constants
const PORT = process.env.PORT || 80;
//const HOST = "0.0.0.0";

// App
const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  const bodyData = req.body;
  if (bodyData.action === "createStripeCustomer") {
    res.send("createStripeCustomer Request Called");
    console.log(`createStripeCustomer Request Called`);

  }
});


app.listen(PORT);
console.log(`Running on http://${PORT}`);
