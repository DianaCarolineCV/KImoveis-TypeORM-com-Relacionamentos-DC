import { Router } from "express"
import isAdmin from "../../middlewares/isAdmin.middlewares"
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middlewares"
import listSchedulesController from "../../controllers/shedules/shedulesList.controllers"
import createSchedulesController from "../../controllers/shedules/shedulesCreate.controllers"

const schedulesRoutes = Router()

schedulesRoutes.post("", ensureAuthMiddleware, createSchedulesController)
schedulesRoutes.get("/properties/:id", ensureAuthMiddleware, isAdmin, listSchedulesController)

export default schedulesRoutes