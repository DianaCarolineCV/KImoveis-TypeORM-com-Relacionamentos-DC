import { Request, Response } from "express";
import listCategoriesPropertiesService from "../../services/categories/listCategoriesProperties.services";

async function listCategoriesPropertiesController(req: Request, res: Response) {
    try {
        const id = req.params.id as string;
        const categories = await listCategoriesPropertiesService(id);

        return res.status(200).json(categories);

    } catch (error) {
        if (error instanceof Error) {
            return res.status(404).send({
                error: error.name,
                message: error.message
            })
        }
    }
}
export default listCategoriesPropertiesController;