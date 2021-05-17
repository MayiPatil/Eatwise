//jshint esversion:6
//import icecreams from "icecreams.js";

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


const icecreams = [{
  ic_id: "1",
  //image: "https://www.benandjerry.com.au/files/live/sites/systemsite/files/flavors/products/aa/pints/chocolate-fudge-brownie-detail.png",
  "Brand": "Ben and Jerry's",
  Flavor: "Cookie Dough",
  sugar: "24",
  calories: "95",
  price: "12"
}, {
  ic_id: "2",
  "Brand": "Oreo",
  Flavor: "Cookie Dough",
  sugar: "28",
  calories: "105",
  price: "10"
}, {
  ic_id: "3",
  "Brand": "Sara Lee",
  Flavor: "Strawberry",
  sugar: "20",
  calories: "75",
  price: "7"
}, {
  ic_id: "4",
  "Brand": "Baskin Robins",
  Flavor: "Three Cheers Chocolate",
  sugar: "18",
  calories: "125",
  price: "15"
}, {
  ic_id: "5",
  "Brand": "Bulla",
  Flavor: "Nepolitan",
  sugar: "38",
  calories: "155",
  price: "16"
}];


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
  //res.render("home", {
  //icecreams: JSON.stringify(icecreams),
  //});
  //res.send("Mayi the first step is sorted!");
});



app.get("/sort", function(req, res){
  icecreams.sort((a, b) => Number(a.sugar) - Number(b.sugar));
//  console.log("ascending", icecreams);
  res.render("sort", {
    icecreams: JSON.stringify(icecreams, null, "\t"),

  });

  //res.send("Mayi the first step is sorted!");
});

app.get("/calories", function(req, res){
  icecreams.sort((a, b) => Number(a.calories) - Number(b.calories));
//  console.log("ascending", icecreams);
  res.render("sort", {
    icecreams: JSON.stringify(icecreams, null, "\t"),
  });
  //res.send("Mayi the first step is sorted!");
});

app.get("/price", function(req, res){
  icecreams.sort((a, b) => Number(a.price) - Number(b.price));
  //console.log("ascending", icecreams);
  res.render("sort", {
    icecreams: JSON.stringify(icecreams),
  });

  //res.send("Mayi the first step is sorted!");
});


app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
