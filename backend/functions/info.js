let MongoClient = require("mongodb").MongoClient;
let ObjectID    = require("mongodb").OjectID;
let jwt         = require("jsonwebtoken");

let db;

MongoClient.connect("mongodb://localhost:27017", {useNewUrlParser: true}, function(err, client){
  db = client.db("simpleblog");
})

module.exports.profile = function(req, res){
  // console.log(req.headers)
  res.json({name: "Mergen", age: 19});
}
