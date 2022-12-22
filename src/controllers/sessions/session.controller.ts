import { Request, Response } from "express";
import { AppError } from "../../errors/AppError";
import createSessionService from "../../services/sessions/createSession.service";


const userLoginController = async (req: Request, res: Response) => {
    const { email, password } = req.body
    const token = await createSessionService({ email, password })

    return res.status(200).json({ token })
}

export default userLoginController