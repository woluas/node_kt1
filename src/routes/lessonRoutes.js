const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lessonController');
const validateLesson = require('../middlewares/validateLesson');

router.get('/', lessonController.getAll);
router.get('/:id', lessonController.getById);
router.post('/', validateLesson, lessonController.create);
router.put('/:id', validateLesson, lessonController.update);
router.patch('/:id', lessonController.patch); 
router.delete('/:id', lessonController.remove);

module.exports = router;