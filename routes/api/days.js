var Promise = require('bluebird');
var router = require('express').Router();
var Day = require('../../models/day');




router.get('/api/days', function(req, res, next) {
 //this will be to request all existing days from the database
 Day.findAll()
 .then(function(days) {
  res.json(days);
 })
 .catch(next);
});

router.get('/api/days/:id', function(req, res, next) {
  // Day.findOne({
  //   where: req.params.id
  // })

  //this will be to request the attractions from the selected day (i.e., when hitting a particular day button)

});

router.post('/api/days/:id', function(req, res, next) {
  //this will be to create a new day (with number = id)
});


router.post('/api/days/:id/hotel', function(req, res, next) {
  //adding hotel on a particular day
});

router.post('/api/days/:id/restaurants', function(req, res, next) {
  //adding restaurants on a particular day
});

router.post('/api/days/:id/activities', function(req, res, next) {
  //adding activities on a particular day
});

router.delete('/api/days/:id/hotel', function(req, res, next) {
  //deleting hotel on a particular day
});

router.delete('/api/days/:id/restaurants', function(req, res, next) {
  //deleting restaurants on a particular day
});

router.delete('/api/days/:id/activities', function(req, res, next) {
  //deleting activities on a particular day
});

router.delete('/api/days/:id', function(req, res, next) {
  //deleting an entire day
});


module.exports = router;