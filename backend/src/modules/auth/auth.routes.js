import express from 'express';
import { AuthController } from './auth.controller.js';
import { authorizeRoles } from '../../middleware/role.middleware.js';
import { authenticate } from '../../middleware/auth.middleware.js';

const router = express.Router();

// Add Admin Route (Only Super Admin Allowed)
router.post(
    "/register-admin",
    authenticate,
    authorizeRoles("superadmin"), // ✅ Only super admin can add admin
    AuthController.register
  );
  
  // Add Teacher Route (Only Admin)
  router.post(
    "/register-teacher",
    authenticate,
    authorizeRoles("admin"), // ✅ Only admin can add teacher
    AuthController.register
  );
  
  // Add Student Route (Only Teacher or Admin)
  router.post(
    "/register-student",
    authenticate,
    authorizeRoles("teacher", "admin"), // ✅ Either can add student
    AuthController.register
  );
  
router.post('/login', AuthController.login);

export default router;
