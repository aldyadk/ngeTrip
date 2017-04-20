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

router.post('/upload', function(req, res, next) {
    res.render('file_upload', {
        title: 'Create New Place'
    });
});

router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id
    model.Place.findById(id)
        .then(place => {
            // console.log(`Cekkkk: ${place}`);
            res.render('edit_place', {
                title: 'Edit place',
                dataPlace: place,
                id: id
            })
        })
        .catch(err => {
            console.log(err.message);
        })
})

module.exports = router;