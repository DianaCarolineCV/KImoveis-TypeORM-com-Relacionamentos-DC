import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.ententy";
import { AppError } from "../../errors/AppError";

const listCategoriesPropertiesService = async (id: string) => {

    const categoriesRepository = AppDataSource.getRepository(Categories);
    const categories = await categoriesRepository.findOne({
        where: { id: id },
        relations: { properties: true },
    })

    if (!categories) {
        throw new AppError("Categories not found", 404);
    }

    return categories;
}

export default listCategoriesPropertiesService;



