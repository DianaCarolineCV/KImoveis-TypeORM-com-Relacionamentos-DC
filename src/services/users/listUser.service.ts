import AppDataSource from "../../data-source"
import { User } from "../../entities/user.ententy"
import { listUsersWithoutPassword } from "../../serializers/user.serializers"
import { IUser } from "../../interfaces/users/index"

const listUsersService = async (): Promise<IUser[]> => {

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const userWithoutPassword = await listUsersWithoutPassword.validate(users, {
        stripUnknown: true,
    });

    return userWithoutPassword;

}

export default listUsersService