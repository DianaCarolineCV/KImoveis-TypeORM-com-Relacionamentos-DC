import { Router } from "express"
import createUserController from "../../controllers/users/createUser.controller"
import deleteUserController from "../../controllers/users/deleteUser.controller"
import listUsersController from "../../controllers/users/listUser.controller"
import updateUserController from "../../controllers/users/updateUser.controller"
import ensureAuthMiddleware from "../../middlewares/ensureAuth.middlewares"
import ensureDataIsValidMiddleware from "../../middlewares/ensureDataIsValid.middlewares"
import ensureIsExists from "../../middlewares/ensureUserExist.middlewares"
import fitUpdate from "../../middlewares/fitUpdate.middlewares"
import isAdm from "../../middlewares/isAdmin.middlewares"
import { userSerializer } from "../../serializers/user.serializers"


const userRoutes = Router()

userRoutes.post("", ensureDataIsValidMiddleware(userSerializer), createUserController)
userRoutes.get("", ensureAuthMiddleware, isAdm, listUsersController)
userRoutes.patch("/:id", ensureAuthMiddleware, ensureIsExists, fitUpdate, updateUserController)
userRoutes.delete("/:id", ensureAuthMiddleware, ensureIsExists, fitUpdate, isAdm, deleteUserController)

export default userRoutes