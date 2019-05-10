let express     = require("express");
let bodyParser  = require("body-parser");
let cors        = require("cors");
let app         = express();

let auth        = require("./routes/auth.js")

app.use(bodyParser.json({limit: '10mb'}))
app.use(bodyParser.urlencoded({extended:true, limit:'128kb'}))
app.use(cors())
// app.use(function(req, res, next){
//   console.log(req);
//   next();
// })

app.use(auth);

app.listen(8080, function(){
  console.log("Server is running on http://localhost:8080")
})
