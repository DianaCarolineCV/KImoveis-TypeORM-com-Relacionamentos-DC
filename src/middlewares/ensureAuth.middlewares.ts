import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import "dotenv/config"

const ensureAuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(" ")[1]
        if (!token) {
            return res.status(401).json({
                message: "Missing authorization token."
            })
        }
        jwt.verify(token as string, String(process.env.JWT_SECRET) as string, (err: any, decoded: any) => {
            req.user = {
                id: decoded.sub as string,
                email: decoded.email as string,
                isAdm: decoded.isAdm as boolean
            }
            return next()
        })
    } catch (error) {
        return res.status(401).json({ message: "Invalid Token" })
    }
}
export default ensureAuthMiddleware
