var express = require("express");
var db = require('./queries');

var router = express.Router();

//Handle GET requets for /persons context
router.get('/',function(req,res){
    
    db.getAllPersons(req,res);
});

//Handle POST requets for /persons context
router.post('/',function(req,res){
    
    db.saveNewPerson(req,res);
});

router.put('/',function(req,res){
    
    db.updatePerson(req,res);
});

router.delete('/:id',function(req,res){
    db.deletePerson(req,res);
});

module.exports = router;