var mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://sultanhuzaifa0:12345@huzaifasultan.3wryeup.mongodb.net/florin")
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((e) => {
    console.log(e);
  });
