const express = require('express');
const routes = express.Router();

const AnnotationController = require('../controllers/AnnotationController');
const PriorityController = require('../controllers/PriorityController');
const ContentController = require('../controllers/ContentController');

// Rotas Annotations
// GET
routes.get('/annotations', AnnotationController.read);

// POST
routes.post('/annotations', AnnotationController.create);

// DELETE
routes.delete('/annotations/:id', AnnotationController.delete);

// Rotas Priority
// GET
routes.get('/priorities', PriorityController.read);

// POST
routes.post('/priorities/:id', PriorityController.update);

// Rotas Content
// POST
routes.post('/contents/:id', ContentController.update);

module.exports = routes;