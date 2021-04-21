var express = require('express');
const Parts_controller = require('../controllers/Parts.controller');
var router = express.Router();

//route that will show the insert form
router.get('/createP',Parts_controller.parts_formcreate);
//this route will perform the insert operation
router.post('/createP/create',Parts_controller.parts_create);
//delete operation
router.post('/:id/delete',Parts_controller.parts_delete);
//update parts
router.post('/partsupdateform/:id', Parts_controller.parts_updateform);
router.post('/:id/update', Parts_controller.parts_update);
router.post('/listP', Parts_controller.parts_list);
module.exports = router;