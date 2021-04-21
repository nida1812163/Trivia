var express = require('express');
const invoice_controller=require('../controllers/invoice.controller');
var router = express.Router();

router.get('/listI', invoice_controller.invoice_list);

//route that will show the insert/create form
router.get('/createformI', invoice_controller.invoice_formcreate);


//route that will perform the insert operation
router.post('/create', invoice_controller.invoice_create);


//route that will perform the delete operation
router.post('/:id/delete', invoice_controller.invoice_delete);


//route that will call the update form
router.post('/updateformI/:id', invoice_controller.invoice_updateform);


//route that will perform the update operation
router.post('/:id/update', invoice_controller.invoice_update);

module.exports = router;