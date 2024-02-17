import { validateMyUserRequest } from "./../middleware/validation";
import { jwtCheck, jwtParse } from "../middleware/auth";
import express from "express";
import MyUserController from "../controllers/MyUserController";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtParse,
  validateMyUserRequest,
  MyUserController.updateCurrentUser
);

export default router;