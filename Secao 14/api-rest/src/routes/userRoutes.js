import { Router } from "express";
import userController from "../controllers/UserController.js";

import loginRequired from "../middlewares/loginRequired.js";

const router = new Router();

router.post('/', userController.create);
router.get('/', loginRequired, userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
/*
  index: lista todos os usuarios - GET
  store/create: cria um novo usuario - POST
  delete: deleta um usuario - DELETE
  show: mostra um usuario - GET
  update: atualiza um usuario - PUT ou PATCH
*/

export default router;
