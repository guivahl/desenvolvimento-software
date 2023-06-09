const { Router } = require('express');
const ClassController = require('../controllers/ClassController');

const Authentication = require('../middlewares/Authentication');

const classesRouter = Router();

classesRouter.get('/classes/reviews', Authentication.checkIfUserIsProfessor, ClassController.getByReviews);
classesRouter.get('/classes/coordinators', Authentication.checkIfUserIsProfessor, ClassController.getByCoordinators);
classesRouter.post('/classes', Authentication.checkIfUserIsProfessor, ClassController.create);
classesRouter.put('/classes', Authentication.checkIfUserIsProfessor, ClassController.update);

module.exports = classesRouter;
