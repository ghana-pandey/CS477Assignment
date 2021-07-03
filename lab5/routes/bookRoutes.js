const express=require('express')
const bookController=require('../controllers/bookControllers')
const router=express.Router();
router.get('/',bookController.getAllBooks)
router.get('/:bookId',bookController.getBookById)
router.post('/',bookController.save);
router.put('/:bookId',bookController.update)
router.delete('/:bookId', bookController.deleteById);
module.exports=router;