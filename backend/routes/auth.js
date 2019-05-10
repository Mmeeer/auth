var express = require('express')
var router = express.Router();
let auth = require("../functions/auth.js");
let info = require("../functions/info.js")

router.post("/signup", auth.signup)

router.post("/login", auth.login)

router.get("/mjolnir/:id/:token", auth.mjolnir)

router.get("/info", auth.checkToken, info.profile);
// router.get("/")
// router.get("/asdfasdf", auth.checkToken, info.asdfasd);
module.exports = router;
