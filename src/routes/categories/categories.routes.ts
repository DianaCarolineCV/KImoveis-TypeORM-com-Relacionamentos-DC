import { Router } from "express"
import createCategoryController from "../../controllers/categories/createCategories.controllers"
import listCategoriesController from "../../controllers/categories/listCategories.controllers"
import listCategoriesPropertiesController from "../../controllers/categories/listCategoriesProperties.controllers"
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middlewares"
import isAdmin from "../../middlewares/isAdmin.middlewares"

const categoriesRoutes = Router()

categoriesRoutes.post("", ensureAuthMiddleware, isAdmin, createCategoryController)
categoriesRoutes.get("", listCategoriesController)
categoriesRoutes.get("/:id/properties", listCategoriesPropertiesController)

export default categoriesRoutes