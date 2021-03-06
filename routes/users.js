var express = require('express');
var router = express.Router();
var model = require('../models')
var multer = require('multer')
var upload = multer({
    dest: 'public/uploads/'
})

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', upload.any(), (req, res, next) => {
    let tempUrlPath = req.files[0].path
    let resultPath = tempUrlPath.replace('public', '')
    // console.log(`hasil = ${resultPath}`);
    model.Place.create({
            placeName: req.body.placeName,
            description: req.body.description,
            imagePath: resultPath
        })
        .then(() => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err.message);
        })
    // console.log(req.files[0].path);
    // res.send(req.files)
})

module.exports = router;