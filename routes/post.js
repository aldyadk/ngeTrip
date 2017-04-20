var express = require('express');
var router = express.Router();
var model = require('../models')

/* GET home page. */
router.post('/', function(req, res, next) {
    model.Post.findAll({
            include: [{
                model: model.Place
            }],
            order: '"updatedAt" DESC'
        })
        .then(posts => {
            // console.log('Cobaaaaaaaa' + posts[5].Place);
            res.render('index_post', {
                title: 'List of posts',
                dataPosts: posts
            });
        })
        .catch(err => {
            console.log(err.message);
        })
});

router.post('/create', (req, res, next) => {
    console.log('Test' + req.body.title);
    console.log(req.body.description);
    console.log(req.body.placeId);
    // console.log(req);
    model.Post.create({
            title: req.body.title,
            description: req.body.description,
            placeId: req.body.placeId
        })
        .then(() => {
            // window.location.href = 'http://localhost:3000/post';
            res.redirect('./')
        })
        .catch(err => {
            console.log(err.message);
        })
})

router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id
    model.Post.destroy({
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err.message);
        })
})

router.post('/edit_post/:id', (req, res, next) => {
    let id = req.params.id
    model.Post.update({
            title: req.body.title,
            description: req.body.description,
            placeId: req.body.place
        }, {
            where: {
                id: id
            }
        })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err.message);
        })
})

module.exports = router;;