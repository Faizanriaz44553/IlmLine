// admin.routes.js
import express from 'express';
import { AdminController } from './admin.controller.js';
import { authenticate } from '../../middleware/auth.middleware.js';
import { authorizeRoles } from '../../middleware/role.middleware.js';


const AdminRouter = express.Router();

AdminRouter.get('/getAll', authenticate, authorizeRoles, AdminController.getAll);
AdminRouter.get('/getOne/:authId', authenticate, authorizeRoles, AdminController.getOne);
AdminRouter.put('/update/:authId', authenticate, authorizeRoles, AdminController.update);
AdminRouter.delete('/remove/:authId', authenticate, authorizeRoles, AdminController.delete);

export default AdminRouter;