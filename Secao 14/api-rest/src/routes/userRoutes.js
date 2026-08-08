import { Router } from "express";
import userController from "../controllers/UserController.js";

const router = new Router();

router.post('/', userController.create);

/*
  index: lista todos os usuarios - GET
  store/create: cria um novo usuario - POST
  delete: deleta um usuario - DELETE
  show: mostra um usuario - GET
  update: atualiza um usuario - PUT ou PATCH
*/

export default router;
