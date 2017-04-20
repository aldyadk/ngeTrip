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

router.post('/create', (req, res, next) => {
    model.Place.findAll()
        .then(places => {
            // console.log(places);
            res.render('create_post', {
                title: 'Create New Post',
                dataPlaces: places
            })
        })
        .catch(err => {
            console.log(err.message);
        })
})

router.get('/edit_post/:id', (req, res, next) => {
    let id = req.params.id
    model.Post.findById(id)
        .then(post => {
            console.log(`Cekkkkk Post: ${post.description}`);
            model.Place.findAll()
                .then(places => {
                    res.render('edit_post', {
                        title: 'Edit Post',
                        id: id,
                        dataPost: post,
                        dataPlace: places
                    })
                })
                .catch(err => {
                    console.log(err.message);
                })
        })
        .catch(err => {
            console.log(err.message);
        })
})

module.exports = router;