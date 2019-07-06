import { Router } from 'express';
var router = Router();

/* GET Home Page - Display Teachers and Students list */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
