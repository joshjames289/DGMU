const express = require('express');
const router = express.Router();
const User = require('../models/userModel');


router.route('/create').post((req, res) => {
  const username = req.body.username;
  const gender = req.body.gender;
  const skill_level = req.body.skill_level;
  const willing_to_bet = req.body.willing_to_bet;
  const pdga_number = req.body.pdga_number;
  const newUser = new User({
    username,
    gender,
    skill_level,
    willing_to_bet,
    pdga_number
  });

  newUser.save();
});

router.route('/community').get((req, res) => {
  User.find()
    .then(foundUsers => res.json(foundUsers))
})


module.exports = router;