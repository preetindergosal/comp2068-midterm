const meta_human = require('../models/resource');
const mongoose = require('mongoose');

exports.index = (req, res) => {
    meta_human.find()
    .then(mhumans => {
      res.render('m_humans/index', {
        blogs: blogs,
        title: 'Archive'
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/');
    });
};


exports.show = (req, res) => {
      meta_human.findById(req.params.id)
    .then(mhumans => {
      res.render('m_humans/show', {
        title: meta_human.title,
        blog: m_humans
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/m_humans');
    });
};


exports.new = (req, res) => {
      res.render('m_humans/new', {
    title: 'New Metahuman'
  });
};


exports.edit = (req, res) => {
     meta_human.findById(req.params.id)
    .then(mhumans => {
      res.render('m_humans/edit', {
        title: `Edit ${blog.title}`,
        blog: blog
      });
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/m_humans');
    });
};


exports.create = async (req, res) => {
     meta_human.create(req.body.blog)
    .then(() => {
      req.flash('success', 'Your new blog was created successfully.');
      res.redirect('/m_humans');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.render('m_humans/new', {
        blog: req.body.blog,
        title: 'New Blog'
      });
    });
};


exports.update = (req, res) => {
     meta_human.updateOne({
      _id: req.body.id
    }, req.body.blog, {
      runValidators: true
    })
    .then(() => {
      req.flash('success', 'Your blog was updated successfully.');
      res.redirect('/m_humans');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.render('m_humans/edit', {
        blog: req.body.blog,
        title: `Edit ${req.body.blog.title}`
      });
    });
};


exports.destroy = (req, res) => {
      meta_human.deleteOne({
      _id: req.body.id
    })
    .then(() => {
      req.flash('success', 'Your blog was deleted successfully.');
      res.redirect("/m_humans");
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/m_humans');
    });
};