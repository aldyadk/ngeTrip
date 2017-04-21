var express = require('express');
var router = express.Router();
var model = require('../models')

/* GET home page. */
router.get('/', (req, res, next) => {
    model.Place.findAll({
            include: [model.Vote]
        })
        .then(places => {

            // res.json(places);
            res.render('index', {
                title: 'kjskj',
                places: places
            })

        })
        .catch(err => {
            console.log(err.message);
        })
})

router.post('/upload', function(req, res, next) {
    res.render('file_upload', {
        title: 'Buat Tempat Wisata Baru'
    });
});

router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id
    model.Place.findById(id)
        .then(place => {
            // console.log(`Cekkkk: ${place}`);
            res.render('edit_place', {
                title: 'Ubah Tempat Wisata',
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
                title: 'Buat Postingan Baru',
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
            // console.log(`Cekkkkk Post: ${post.description}`);
            model.Place.findAll()
                .then(places => {
                    res.render('edit_post', {
                        title: 'Ubah Post',
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

router.get('/vote/:id', (req, res, next) => {
    let id = req.params.id
    model.Vote.findOrCreate({
            where: {
                placeId: id
            }
        })
        .then(vote => {
            let last = vote[0].count
            if (last === null) {
                last = 0
            }
            // console.log(vote);
            let place = vote[0].placeId
            // console.log('sssss' + place);
            model.Vote.update({
                    count: last + 1
                }, {
                    fields: ['count'],
                    where: {
                        placeId: place
                    }
                })
                .then(row => {
                    res.redirect('/')
                })
        })
        .catch(err => {
            console.log(err.message);
        })
})

module.exports = router;