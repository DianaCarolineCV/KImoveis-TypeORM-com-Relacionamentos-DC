import { Request, Response } from "express";
import listUsersService from "../../services/users/listUser.service";

const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService()

    return res.json(users)
}

export default listUsersController