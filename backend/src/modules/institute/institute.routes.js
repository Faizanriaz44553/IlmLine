import express from "express";
import { authenticate } from "../../middleware/auth.middleware.js";
import { authorizeRoles } from "../../middleware/role.middleware.js";
import { InstituteController } from "./institute.controller.js";


const InstituteRouter = express.Router();

InstituteRouter.post("/create", authenticate, authorizeRoles("superadmin"), InstituteController.create);
InstituteRouter.get("/getall", authenticate, authorizeRoles("superadmin"), InstituteController.getAll);
InstituteRouter.get("/getone/:id", authenticate, authorizeRoles("superadmin"), InstituteController.getOne);
InstituteRouter.put("/update/:id", authenticate, authorizeRoles("superadmin"), InstituteController.update);
InstituteRouter.delete("/remove/:id", authenticate, authorizeRoles("superadmin"), InstituteController.remove);

export default InstituteRouter;
