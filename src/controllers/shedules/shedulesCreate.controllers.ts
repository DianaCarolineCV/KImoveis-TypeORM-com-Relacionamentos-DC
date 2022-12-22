import { Request, Response } from "express"
import schedulesCreateService from "../../services/shedules/shedulesCreate.services"

const createSchedulesController = async (req: Request, res: Response) => {
    const { date, hour, propertyId, userId } = req.body
    await schedulesCreateService({ date, hour, propertyId, userId })

    return res.status(201).json({ message: "Schedule created with success" })
}


export default createSchedulesController