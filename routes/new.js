var express = require('express');
var router = express.Router();
var Article = require('../models').Article;


/* GET users listing. */
router.get('/', function(req, res, next) {
    Article.findAll()
        .then(articles => {
            res.render('new',{ title: 'Create a new entry', articles: articles });
        })
  
});

module.exports = router;