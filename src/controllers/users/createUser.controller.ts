import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users/index"
import createUserService from "../../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
    try {
        const { name, email, password, isAdm }: IUserRequest = req.body
        const newUser = await createUserService({ name, email, password, isAdm })

        return res.status(201).send(newUser)
    } catch (error) {
        if (error instanceof Error) {
            return res.status(409).send({
                error: error.name,
                message: error.message
            })
        }
    }
}

export default createUserController