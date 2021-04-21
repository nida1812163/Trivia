var express = require('express');
const employee_controller=require('../controllers/employee.controller');
var router = express.Router();

//route that will show all products
router.get('/listE', employee_controller.employee_list);

//route that will show the insert/create form
router.get('/createformE', employee_controller.employee_formcreate);


//route that will perform the insert operation
router.post('/create', employee_controller.employee_create);


//route that will perform the delete operation
router.post('/:id/delete', employee_controller.employee_delete);


//route that will call the update form
router.post('/updateformE/:id', employee_controller.employee_updateform);


//route that will perform the update operation
router.post('/:id/update', employee_controller.employee_update);

module.exports = router;