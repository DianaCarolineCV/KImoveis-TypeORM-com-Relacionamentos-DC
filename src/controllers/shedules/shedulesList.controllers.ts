import { Request, Response } from "express"
import listSchedulesService from "../../services/shedules/shedulesList.services"

const listSchedulesController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const allCategories = await listSchedulesService(id)

        return res.status(200).send(allCategories)

    } catch (error) {
        if (error instanceof Error) {
            return res.status(404).send({
                error: error.name,
                message: error.message
            })
        }
    }
}

export default listSchedulesController
