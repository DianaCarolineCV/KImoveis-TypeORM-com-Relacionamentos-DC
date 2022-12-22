import { Request, Response, NextFunction } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.ententy";

const ensureIsExists = async (req: Request, res: Response, next: NextFunction) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.findOneBy({ id: req.params.id })

    if (!users) {
        return res.status(404).json({
            message: "User not found",
        })
    }
    return next()
}

export default ensureIsExists