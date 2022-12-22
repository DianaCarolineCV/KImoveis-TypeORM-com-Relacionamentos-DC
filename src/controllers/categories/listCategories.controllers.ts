import { Request, Response } from "express";
import listCategoriesService from "../../services/categories/listCategories.services";

async function listCategoriesController(req: Request, res: Response) {
    try {
        const categories = await listCategoriesService();

        return res.status(200).json(categories);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(400).send({
                error: error.name,
                message: error.message
            })
        }
    }
}

export default listCategoriesController;