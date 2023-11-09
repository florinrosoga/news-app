var mongoose = require("mongoose");

var authSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

var Auth = new mongoose.model("Auth", authSchema);

module.exports = Auth;
