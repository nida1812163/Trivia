var express = require('express');
const Supplier_controller = require('../controllers/Supplier.controller');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('index', { page: 'Home', menuId:'index' });
  });
  
  router.get('/about', function(req, res, next) {
    res.render('about', { page: 'About Us', menuId:'about' });
  });
  
  router.get('/contact', function(req, res, next) {
    res.render('contact', { page: 'Contact', menuId:'contact' });
  });
//-------Supplier-----------------

//this route will perform the insert operation
router.post('/createsupplier/create',Supplier_controller.supplier_create);
//delete operation
router.post('/:id/delete',Supplier_controller.supplier_delete);
//update supplier
router.post('/supplierupdateform/:id', Supplier_controller.supplier_updateform);
router.post('/:id/update', Supplier_controller.supplier_update);
//---------------------------------------------------------------------

 module.exports = router;