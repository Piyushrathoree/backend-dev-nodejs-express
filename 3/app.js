const express = require("express");
const app = express();
const path = require("path");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const userModel = require("./models/user");

app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/create", (req, res) => {
  const { name, age, email, password, pass } = req.body;

  if (password !== pass) {
    res.status(400).send({ msg: "enter the same password in both fields" });
  }
  try {
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, async function (err, hash) {
        if (err) throw err;
        let createdUser = await userModel.create({
          name,
          age,
          email,
          password: hash,
        });
        let token = jwt.sign(password, "pppppppp");
        res.cookie("token", token);
        res.redirect("/");
      });
    });
  } catch (error) {
    res.status(500).json({ error: "please fill all the details" });
  }
});

app.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/");
});

app.get("/login", async (req, res) => {
  res.render("login");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let user = await userModel.findOne({ email });
  if (!user) {
    res.send({ msg: "no user found please sign up first" });
    //here i have to render error page
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if (err) {
      throw err; //add error page
    } else {
      let token = jwt.sign(password, "pppppppp");
      res.cookie("token", token);
      res.send({ msg: "you are logged in  " }); //add logged in page
    }
  });
});

app.listen(3000);
