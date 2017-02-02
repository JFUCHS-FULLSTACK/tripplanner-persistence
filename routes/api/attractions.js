var Promise = require('bluebird');
var router = require('express').Router();
var Hotel = require('../../models/hotel');
var Restaurant = require('../../models/restaurant');
var Activity = require('../../models/activity');

router.get('/api/hotels', function(req, res, next) {
  Hotel.findAll()
  .then(function(dbHotels) {
    res.json(dbHotels);
  })
  .catch(next);
});

router.get('/api/restaurants', function(req, res, next) {
  Restaurant.findAll()
  .then(function(dbRestaurants) {
    res.json(dbRestaurants);
  })
  .catch(next);
});

router.get('/api/activities', function(req, res, next) {
  Activity.findAll()
  .then(function(dbActivities) {
    res.json(dbActivities);
  })
  .catch(next);
});



module.exports = router;