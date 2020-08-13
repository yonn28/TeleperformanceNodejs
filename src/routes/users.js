const express = require('express');
const router=express.Router();

const UserControler=require('../controlllers/UserController')

router.get('/',UserControler.list);
router.post('/add',UserControler.save);
router.get('/delete/:id',UserControler.delete);
router.get('/update/:id',UserControler.edit);
router.post('/update/:id',UserControler.update );

module.exports = router;