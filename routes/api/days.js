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
  Day.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(days) {
    res.json(days);
 })
 .catch(next);
  //this will be to request the attractions from the selected day (i.e., when hitting a particular day button)

});

router.post('/api/days/:id', function(req, res, next) {
  //this will be to create a new day (with number = id)
  Day.create({
    number: req.params.id
  })
  .then(function(day) {
    res.json(day);
  })
  .catch(next);
});


router.post('/api/days/:id/hotel', function(req, res, next) {

  let newHotel = 1;

  Day.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(day) {
    day.setHotel(newHotel);
    res.json(day);
  })
  .catch(next); 
  //adding hotel on a particular day
});

router.post('/api/days/:id/restaurants', function(req, res, next) {

  let newRestaurants = [3, 4, 5];

  Day.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(day) {
    day.addRestaurant(newRestaurants);
    res.json(day);
  })
  .catch(next); 
  //adding restaurants on a particular day
});

router.post('/api/days/:id/activities', function(req, res, next) {
  //adding activities on a particular day

  let newActivities = [1, 3];

  Day.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(day) {
    day.addActivity(newActivities);
    res.json(day);
  })
  .catch(next); 
});

router.delete('/api/days/:id/hotel', function(req, res, next) {
  //deleting hotel on a particular day

  //task.destroy({ force: true })

  Day.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(day) {
    day.setHotel(null);
    res.json(day);
  })
  .catch(next); 

});

router.delete('/api/days/:id/restaurants', function(req, res, next) {
  //deleting restaurants on a particular day
});

router.delete('/api/days/:id/activities', function(req, res, next) {
  //deleting activities on a particular day
});

router.delete('/api/days/:id', function(req, res, next) {
  //deleting an entire day
  Day.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(function(day) {
    day.destroy({ force: true });
    res.status(204).send('successfully deleted day');
  })
  .catch(next);
});


module.exports = router;