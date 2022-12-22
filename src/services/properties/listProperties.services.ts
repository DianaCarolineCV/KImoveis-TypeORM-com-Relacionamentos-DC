import AppDataSource from "../../data-source";
import { Properties } from "../..//entities/properties.ententy"

const listPropertiesService = async () => {
    const userRepository = AppDataSource.getRepository(Properties);
    const users = userRepository.find();

    return users;
};

export default listPropertiesService;