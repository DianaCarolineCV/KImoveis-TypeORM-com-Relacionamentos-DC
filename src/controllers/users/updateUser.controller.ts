import { Request, Response } from "express"
import { IUserUpdate } from "../../interfaces/users/index"
import updateUserService from "../../services/users/updateUser.service"

const updateUserController = async (req: Request, res: Response) => {
    try {
        const userData: IUserUpdate = req.body
        const userId = req.params.id
        const updatedUser = await updateUserService(userData, userId)

        return res.status(200).send(updatedUser)

    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(401).send({
                error: error.name,
                message: error.message
            })

        }
    }
}

export default updateUserController