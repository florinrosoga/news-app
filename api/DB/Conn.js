var mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/florin")
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((e) => {
    console.log(e);
  });
