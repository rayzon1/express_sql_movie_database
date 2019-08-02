var express = require('express');
var router = express.Router();
var Article = require('../models').Article;

/* GET users listing. */
router.get('/', function(req, res, next) {
  Article.create({
    title: 'Lord of the rings',
    author: 'Jrr Tolkien',
    body: 'best fantasy books of all time.'
  })
    .then(() => console.log('Article created'))
  Article.findAll()
    .then(articles => {
      res.render('users', { articles: articles, title: 'Current Titles'});
    })

});

module.exports = router;
