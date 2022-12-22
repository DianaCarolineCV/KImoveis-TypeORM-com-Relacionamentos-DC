import { Request, Response } from "express";
import createCategoriesService from "../../services/categories/createCategories.services";

const createCategoryController = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const createCategory = await createCategoriesService({ name });

        return res.status(201).json(createCategory);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(409).send({
                error: error.name,
                message: error.message
            })
        }
    }
};

export default createCategoryController;