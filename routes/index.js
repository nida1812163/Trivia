var express = require('express');
const Profile_controller = require('../controllers/Profile.controller');
const Supplier_controller = require('../controllers/Supplier.controller');
const Parts_controller = require('../controllers/Parts.controller');
const Vehicle_controller = require('../controllers/Vehicle.controller');
const invoice_controller = require('../controllers/invoice.controller');
const employee_controller = require('../controllers/employee.controller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { page: 'Home', menuId:'index' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { page: 'About Us', menuId:'about' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { page: 'Contact', menuId:'contact' });
});
//-----------------------------------------------------------
router.post('/createsupplier/create',Supplier_controller.supplier_create);
//delete operation
router.post('/:id/delete',Supplier_controller.supplier_delete);
//update supplier
router.post('/supplierupdateform/:id', Supplier_controller.supplier_updateform);
router.post('/:id/update', Supplier_controller.supplier_update);
//route that will show the insert form
router.get('/createsupplier',Supplier_controller.supplier_formcreate);
//view supplier
router.get('/list', Supplier_controller.suppplier_list);


//--------------------------------------------------------------------
//update profile
router.post('/updateform/:id', Profile_controller.profile_updateform);
router.post('/:id/update', Profile_controller.profile_update);


//---------------------------------------------------------------------------------
router.get('/createpart',Parts_controller.parts_formcreate);
//this route will perform the insert operation
router.post('/createP/create',Parts_controller.parts_create);
//delete operation
router.post('/:id/delete',Parts_controller.parts_delete);
//update parts
router.post('/partsupdateform/:id', Parts_controller.parts_updateform);
router.post('/:id/update', Parts_controller.parts_update);
//list
router.get('/listP', Parts_controller.parts_list);

//---------------------------------------------------------------------
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
//--------------------------------------------------------------------

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
//---------------Employee--------------------------------------------------------------------------------

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
