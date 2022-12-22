import { Request, Response, NextFunction } from "express";

const fitUpdate = async (req: Request, res: Response, next: NextFunction) => {
    const requestBody = Object.keys(req.body)

    if (requestBody.includes("isAdm")
        || requestBody.includes("isActive")
        || requestBody.includes("id")) {

        return res.status(401).json({
            message: "You are not allowed to update"
        })
    }

    return next()
}

export default fitUpdate