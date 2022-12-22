import { IUserRequest } from "../../interfaces/users/index"
import AppDataSource from "../../data-source"
import { User } from "../../entities/user.ententy"
import { userWithoutPasswordSerializer } from "../../serializers/user.serializers"
import { hashSync } from "bcryptjs"

const createUserService = async ({ name, email, password, isAdm }: IUserRequest) => {

    const userRepository = AppDataSource.getRepository(User)

    const user = new User()
    user.name = name;
    user.email = email;
    user.password = hashSync(password, 10)
    user.isAdm = isAdm;
    user.isActive = true;

    userRepository.create(user)
    await userRepository.save(user)

    const userWithoutPassord = await userWithoutPasswordSerializer.validate(user, {
        stripUnknown: true
    })

    return userWithoutPassord;
}

export default createUserService


