var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var configDb = require('../config/db.js');
var crypto = require('crypto');

// mongoose.connect(configDb.test);

// var userSchema = mongoose.Schema({
//    email: String,
//    salt: String,
//    passwordHash: String
// });

// var User = mongoose.model("User", userSchema);

// Fetches the list of all repository claims
// and their statuses that the user has
router.get('/claims', (req, res) => {
  console.log("GET /user/claims");
  console.log(req.session);
})

// Fetches the repository claim with
// supplied id
router.get('/claims/:id', (req, res) => {
  console.log("GET /user/claims/" + req.params.id);
})

// Request that an email be sent with code
// to be added to repository
router.post("/make-claim", (req, res) => {
  console.log("POST /user/make-claim");
})

// Request that server checks that repository
// has the code file
router.post('/make-claim/verify', (req, res) => {
  console.log("POST /user/make-claim/verify");
})

// Deletes a claim of a repository
router.delete('make-claim', (req, res) => {
    console.log("DELETE /user/make-claim");
})

module.exports = router;
