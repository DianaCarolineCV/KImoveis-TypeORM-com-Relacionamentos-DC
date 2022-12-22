import AppDataSource from "../../data-source";
import { User } from "../../entities/user.ententy";
import { AppError } from "../../errors/AppError";

const deleteUserService = async (id: string) => {
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.findOneBy({ id: id })

    if (!users?.isActive) {
        throw new AppError("Cannot delete an active user");
    }

    users.isActive = false;
    await userRepository.save(users);

    return true;
}

export default deleteUserService