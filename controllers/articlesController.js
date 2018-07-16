const db = require("./../models");

// Defining methods for thbdb.ArticlesController
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find({}, function(err, results){
        console.log(results)
      })
      // .sort({ date: -1 })
      .then(dbModel => res.json(dbModel), console.log(dbModel))
      // .catch(err => res.status(422).json(err));
  },
  // create: function(req, res) {
  //   db.Article
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  saveArticle: function(req, res) {
    db.Article
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)), console.log(req.body);
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
