import { Request, Response, NextFunction } from "express";

const isAdm = async (req: Request, res: Response, next: NextFunction) => {
    if (req.user.isAdm == false) {
        return res.status(403).json({
            message: "User is not admin"
        })
    }
    return next()
}

export default isAdm