
import jwt from "jsonwebtoken"
import { compare } from "bcryptjs"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.ententy"
import { AppError } from "../../errors/AppError"
import "dotenv/config"
import { IUserLogin } from "../../interfaces/users/index"

const createSessionService = async ({ email, password }: IUserLogin): Promise<string> => {

    const userRepository = AppDataSource.getRepository(User)
    const user = await userRepository.findOneBy({ email: email })

    if (!user) {
        throw new AppError("User or password invalid", 403)
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
        throw new AppError("User or password invalid", 403)
    }

    if (user.isActive === false) {
        throw new AppError("User not active", 400)
    }
    const token = jwt.sign({ isAdm: user.isAdm }, String(process.env.JWT_SECRET) as string, {
        expiresIn: "24h"
    })

    return token;

}
export default createSessionService



