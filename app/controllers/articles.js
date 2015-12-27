var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/articles', function (req, res, next) {
	db.Article.findAll().then(function (articles) {
		res.render('articles/index', {
			articles: articles
		});
	});
});

router.get('/articles/view/:id', function (req, res, next) {
	db.Article.findById(req.params.id).then(function (article) {		
		if(article == null){
			var err = new Error("Article - Cet article avec cet identifiant n'existe pas.");
			err.status = 404;
			next(err);
		}else{
			res.render('articles/article', {				
				article: article
			});
		}
	});
});


router.get('/articles/insert', function (req, res, next) {	
	res.render('articles/insert');
});

//POST
router.post('/articles/add', function (req, res, next) {
	db.Article.create(req.body).then(function(){
		res.redirect('/articles');
	}).catch(function(err){
		var err = new Error(err);
		err.status = 404;
		next(err);
	});
});

router.get('/articles/update/:id', function (req, res, next) {
	db.Article.findById(req.params.id).then(function (article) {		
		if(article == null){
			var err = new Error("Article - Cet article avec cet identifiant n'existe pas.");
			err.status = 404;
			next(err);
		}else{
			res.render('articles/update', {				
				article: article
			});
		}
		
	});
});

//POST
router.post('/articles/update/:id', function (req, res, next) {
	db.Article.update(req.body,{ where: {id:req.params.id } }).then(function(){
		res.redirect('/articles');
	});
});

router.get('/articles/delete/:id', function (req, res, next) {
	db.Article.destroy({ where: {id:req.params.id }}).then(function(){
		res.redirect('/articles');
	});
});
