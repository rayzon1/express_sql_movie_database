var express = require('express');
var router = express.Router();
var Article = require('../models').Article;


/* GET users listing. */
router.get('/', function(req, res, next) {
    Article.findAll()
        .then(article => {
            res.render('new',{ title: 'Create a new entry', articles: article });
        })
  
});

router.post('/', (req,res,next) => {
    Article.create(req.body)
        .then( article => {
            res.redirect('/create')
        })
})

module.exports = router;