// Our router module
const router = require('express').Router();

// Our controller
const ResourcesController = require('../controllers/resourcesController');

// Your routes
router.get(`/new`, ResourcesController.new);
router.get(`/`, ResourcesController.index);
router.get(`/:id`, ResourcesController.show);
router.post(`/`, ResourcesController.create);
router.get(`/:id/edit`, ResourcesController.edit);
router.post(`/update`, ResourcesController.update);
router.post(`/destroy`, ResourcesController.destroy);
// We have to export our changes
module.exports = router;