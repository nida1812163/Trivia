var express = require('express');
const Vehicle_controller = require('../controllers/Vehicle.controller');
var router = express.Router();

//route that will show all products
router.get('/listV', Vehicle_controller.Vehicle_list);

//route that will show the insert/create form
router.get('/createformV', Vehicle_controller.Vehicle_formcreate);


//route that will perform the insert operation
router.post('/create', Vehicle_controller.Vehicle_create);


//route that will perform the delete operation
router.post('/:id/delete', Vehicle_controller.Vehicle_delete);


//route that will call the update form
router.post('/updateformV/:id', Vehicle_controller.Vehicle_updateform);


//route that will perform the update operation
router.post('/:id/update', Vehicle_controller.Vehicle_update);


module.exports = router;