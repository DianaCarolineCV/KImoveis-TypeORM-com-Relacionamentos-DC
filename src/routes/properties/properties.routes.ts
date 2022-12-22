import { Router } from "express"
import createPropetiesController from "../../controllers/properties/createProperties.controllers"
import listPropertiesController from "../../controllers/properties/listProperties.controllers"
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middlewares"
import isAdmin from "../../middlewares/isAdmin.middlewares"

const propertiesRoutes = Router()

propertiesRoutes.post("", ensureAuthMiddleware, isAdmin, createPropetiesController)
propertiesRoutes.get("", listPropertiesController)

export default propertiesRoutes