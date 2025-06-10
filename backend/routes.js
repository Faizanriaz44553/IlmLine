import express from "express";
import authRouter from "./src/modules/auth/auth.routes.js";
import InstituteRouter from "./src/modules/institute/institute.routes.js";
import AdminRouter from "./src/modules/admin/admin.routes.js";


const routes = express.Router();

routes.use('/auth' , authRouter)
routes.use('/institutes' ,  InstituteRouter);
routes.use('/admin' ,  AdminRouter);





export default routes