var express = require('express');
var router = express.Router();
var model = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
    model.Place.findAll()
        .then(places => {
            console.log(places);
            res.render('index', {
                title: 'List of place',
                places: places
            });
        })
});

router.get('/upload', function(req, res, next) {
    res.render('file_upload', {
        title: 'Express'
    });
});


module.exports = router;