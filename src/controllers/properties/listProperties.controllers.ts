import { Request, Response } from "express";
import listPropertiesService from "../../services/properties/listProperties.services";

async function listPropertiesController(req: Request, res: Response) {
    try {
        const properties = await listPropertiesService();

        return res.status(200).json(properties);
    } catch (error) {
        if (error instanceof Error) {

            return res.status(400).send({
                error: error.name,
                message: error.message
            })
        }
    }
}
export default listPropertiesController;