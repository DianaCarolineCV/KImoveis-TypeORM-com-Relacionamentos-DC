import AppDataSource from "../../data-source"
import { Categories } from "../../entities/categories.ententy"

const listCategoriesService = async () => {
    const categoriesRepository = AppDataSource.getRepository(Categories)
    const categories = await categoriesRepository.find()

    return categories;
}
export default listCategoriesService