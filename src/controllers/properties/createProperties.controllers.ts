import { Request, Response } from "express";
import createPropertiesService from "../../services/properties/createProperties.services";

async function createPropetiesController(req: Request, res: Response) {
    const { value, size, address, categoryId } = req.body;
    const createdPropertie = await createPropertiesService({
        value,
        size,
        address,
        categoryId,
    })

    return res.status(201).json(createdPropertie);
}

export default createPropetiesController;