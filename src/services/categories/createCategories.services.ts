import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.ententy";
import { AppError } from "../../errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoriesService = async ({ name }: ICategoryRequest) => {

    const categoryRepository = AppDataSource.getRepository(Categories);

    const category = new Categories();
    category.name = name;

    categoryRepository.create(category);
    await categoryRepository.save(category);

    return category;

}
export default createCategoriesService;