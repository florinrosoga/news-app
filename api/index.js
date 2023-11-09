var express = require("express");
var cors = require("cors");
require("./DB/Conn");

var app = express();
app.use(express.json({limit: "5mb"}));
app.use(cors());

var Auth = require("./Modals/Auth");

var port = 8080;

app.get("/", async (req, res) => {
  res.send("-----------Welcome to my API---------");
});

app.post("/signup", async (req, res) => {
  try {
    var user = new Auth(req.body);
    user.save();
    res.status(200).send(user);
  } catch {
    res.status(404).send("Something went wrong");
  }
});
app.post("/signin", async (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  var user = await Auth.findOne({email: email});
  if (user) {
    if (user.password === password) {
      res.status(200).send(user);
    } else {
      res.status(400).send("Incorrect Password!");
    }
  }
});

app.put("/userInfo/:id", async (req, res) => {
  try {
    var _id = req.params.id;

    var editUser = await Auth.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).send(editUser);
  } catch {
    res.status(404).send("Something went wrong!");
  }
});

app.get("/user/:id", async (req, res) => {
  var _id = req.params.id;

  var getUser = await Auth.findById(_id);
  res.status(200).send(getUser);
});
app.delete("/user/:id", async (req, res) => {
  var _id = req.params.id;
  var deleteUser = await Auth.deleteOne({_id: _id});
  res.status(200).send("User deleted!");
});
app.listen(port, () => {
  console.log("Api is running on port: " + port);
});
